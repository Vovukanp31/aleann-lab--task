import React from 'react';
import { useLocation } from 'react-router-dom';
import SaveToListSvg from '../assets/svg/saveToListSvgComponent';
import ShareSvg from '../assets/svg/shareSvgComponent';
import DateComponent from '../components/dateComponent';
import MapComponent from '../components/mapComponent';
import Banner from '../components/UI/Banner';
import Button from '../components/UI/Button';
import List from '../components/UI/List';
import Title from '../components/UI/Title';
import { IJob } from '../models/IJob';

const JobDetails = () => {

    const location = useLocation();

    const {address,
        benefits,
        createdAt,
        description,
        email,
        employment_type,
        location:{lat,long},
         name,
         phone,
         pictures,
         salary,
         title,
         updatedAt}:IJob = location.state;

         const salaryFixer = () => {
            return salary.replaceAll('k', ' 000').split('-').join(' - ');
         };

    return (
        <div className='px-4 lg:px-80 pt-2 md:pt-14 md:flex'>

            <main>
                
                <div className='md:relative'>
                    <Title size={1} title='Job Details'/>
                    <nav className='flex pt-6 md:pt-0 md:absolute md:right-1 md:top-1 gap-8'>
                        <div onClick={() => {/*some popup window with adding to LocalStorage Job post */}} className='flex cursor-pointer gap-4 hover:text-blue-400 stroke-gray-logos hover:stroke-blue-400'><SaveToListSvg/> Save to my list</div>
                        <div onClick={() => {/*some popup window */}} className='flex cursor-pointer gap-4 hover:text-blue-400 hover:stroke-blue-400'><ShareSvg/> Share</div>
                    </nav>
                </div>
                
               <div className='py-9 hidden md:block'>
                    <Button isMain={true} onClick={() => alert('send user data')} text='APPLY NOW'/>
                </div>
                
                <section className='flex gap-16 content-center justify-between'>
                    <h3 className='font-proximaBold text-2xl'>{title}</h3>
                    <h3>
                        <div className='font-proximaBold text-xl whitespace-nowrap'>€ {salaryFixer()}</div>
                        <span className='whitespace-nowrap'>Brutto, per year</span>
                     </h3>
                </section>
                
                <div className='text-gray-additional my-2'>
                    {new Date(createdAt).getMilliseconds() === new Date(updatedAt).getMilliseconds() ? <time><DateComponent date={createdAt} title='Posted'/></time> : <time><DateComponent date={createdAt} title='Posted'/>; <DateComponent date={updatedAt} title='Updated'/></time>}
                </div>
                
                <div>
                    {description}
                    Address- {address}; Email- {email}; Phone- {phone}
                </div>

                <section> {/* There's no responsibilities in Api, so i repeat this info to fill empty spaces */}
                    
                    <Title size={2} title='Responibilities'/>               
                    <p>
                        {description}
                    </p>
                    <br/>
                    <p>
                        {description}
                    </p>
                    <br/>
                    <p>
                        {description}
                    </p>
                </section>

                <section className='relative'>
                    
                    <Title size={2} title='Compensation & Benefits:'/>
                    <span>Our physicians enjoy a wide range of benefits, including:</span> {/* didn't find description in api, so just hardcoded it */}
                    <span className='md:relative md:-left-4'>
                        <List listArr={benefits}/>
                    </span>
                
                </section>
                
                <div className='py-9'>
                    <Button isMain={true} onClick={() => alert('send user data')} text='APPLY NOW'/>
                </div>
                
                <section>
                    <Title size={1} title='Additional info'/>
                    <div className='mt-3'>
                        <Title size={3} title='Employment type'/>
                    <Banner color='blue' data={employment_type}/>
                    </div>
                    
                    <div className='mt-3'>
                        <Title size={3} title='Benefits'/>
                        <Banner color='yellow' data={benefits}/>
                    </div>
                </section>

                <section className='pt-14'>
                    <Title size={1} title='Attached images'/>
                    <div className='flex flex-wrap gap-2 pt-3'>
                    {pictures.map((img, i) => <img className='rounded-lg w-52 h-32' key={i} src={img} alt={name}/>)}
                    </div>
                </section>

                <div className='py-9'>
                    <Button isMain={false} isNav={true} text={'RETURN TO JOB BOARD'}/>
                </div>
            
            </main>

            <aside>
                <MapComponent lati={lat} long={long}/>
            </aside>

        </div>
    );
};

export default JobDetails;