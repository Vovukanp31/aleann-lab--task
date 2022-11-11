import React, { useEffect, useState } from 'react';
import { ILocate } from '../models/ILocation';
import { IUser } from '../models/IUser';
import { locationService } from '../services/locationService';
import css from '../styles/JobCard.module.css'

interface JobsProps {
    job: IUser
}

const JobCard = ({job}: JobsProps) => {

    const {pictures, title, name, createdAt, description, location} = job;

    const [locate, setLocate] = useState<ILocate>({city: '', country: ''})

   const arr = new Number((new Date().getTime() - new Date(createdAt).getTime()) / 31536000000).toFixed(0);
     
    
   console.log(arr)

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
        <div className={css.job_card__wrapper}>
            <img className={css.job_card__img} src={pictures[0]} alt={name}/>
            <div className={css.job_card__info_Container}>
                <div className={css.job_card__title}>
                title -- {title} -- name --  {name}
                </div>
                <div className={css.job_card_additional}>
                    addToFavouritesImg -- 
                rating -- rating component
                createdAt -- {String(createdAt)}
                </div>
            </div>
        </div>
    );
};

export default JobCard;