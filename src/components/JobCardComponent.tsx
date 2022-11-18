import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LocationSvg from '../assets/svg/locationSvgComponent';
import SaveToListSvg from '../assets/svg/saveToListSvgComponent';
import { ILocate } from '../models/ILocation';
import { IJob } from '../models/IJob';
import { locationService } from '../services/locationService';
import RatingComponent from './ratingComponent';
import DateComponent from './dateComponent';

interface JobsProps {
    job: IJob;
}

const JobCard = ({job}: JobsProps) => {

    const {pictures, title, name, createdAt, location, id} = job;

    const navigate = useNavigate();

    const jobDetails = () => {
        navigate(`${id}`, {state: job})
    }

    const [locate, setLocate] = useState<ILocate>({city: '', country: ''})

    useEffect(() => {
        locationService.getCityByGeocoding(location.lat, location.long).then(res => {

            if (res.ocean) {
                setLocate({country: res.ocean, city: ''});
            } else if (res.country) {
                setLocate({country: res.country, city: res.city ? res.city : ''})
            } else  setLocate({country: res.name ? res.name : '', city: ''})
       
        });
    }, [location])

    return (
        <article onClick={jobDetails} className='py-6 px-4 min-w-full m-2 gap-2 bg-gray-mobile-card rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 flex justify-between cursor-pointer md:gap-0 md:bg-white'>
            
            <img className='w-16 h-16 rounded-full md:w-24 md:h-24' src={pictures[0]} alt={name}/>

            <div className='flex flex-col-reverse justify-around md:flex-row md:content-start w-11/12 text-gray-additional text-base'>

            <section className='flex flex-col justify-center md:content-start gap-2 md:w-1/2'>
                <div className='font-proximaBold text-gray-main text-lg md:text-xl'>{title}</div>
                <div>Department name • {name}</div>
                <address className='inline-flex'>
                    <LocationSvg/>{locate.city ? `${locate.country}, ` : locate.country} {locate.city}
                </address>
            </section>

            <section className='text-sm flex flex-col justify-center content-evenly gap-2 relative md:w-1/3 md:text-base'>
                <div className='hidden md:block absolute right-1 top-1 stroke-gray-logos hover:stroke-blue-accent'><SaveToListSvg/></div>
                <div><RatingComponent rate={5}/></div> {/*API hasn't rate params, so i've made test version of rate component*/}
                <span className='absolute right-1 bottom-1'><DateComponent date={createdAt} title='Posted'/></span>
            </section>

            </div>
        
        </article>
    );
};

export default JobCard;