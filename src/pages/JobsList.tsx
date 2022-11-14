import React, {useEffect, useState} from 'react';
import JobCard from '../components/JobCardComponent';
import { jobsService } from '../services/jobsService';
import { IJob } from '../models/IJob';
import PageLoader from '../components/UI/PageLoader';
import Pagination from '../components/UI/Pagination';
import OnError from './OnError';

const JobsList = () => {

    const [jobs, setJobs] = useState<IJob[] | null>(null);
    const [err, setErr] = useState<string | null>(null)

    const testObj: IJob[] = [{
        id: '43',
    name: 'vova',
    email: 'vpapeta31@gmail.com',
    phone: '0932013915',
    title: 'some title',
    salary: '37000',
    address: 'Horodotska st',
    benefits: ['good salary', 'good food'],
    location: {
                 lat: -13,
                long: 23,
            },
    pictures: ['https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'],
    createdAt: new Date('2010-12-17T03:24:00'),
    updatedAt: new Date('2015-12-17T03:24:00'),
    description: 'some Description',
    employment_type: ['in company office', 'some other type'],
}, {
id: '48',
name: 'vova',
email: 'vpapeta31@gmail.com',
phone: '0932013915',
title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
salary: '37000',
address: 'Horodotska st',
benefits: ['good salary', 'good food'],
location: {
             lat: -13,
            long: 23,
        },
pictures: ['https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'],
createdAt: new Date('2010-12-17T03:24:00'),
updatedAt: new Date('2015-12-17T03:24:00'),
description: 'some Description',
employment_type: ['in company office', 'some other type'],
}, {
    id: '42',
    name: 'vova',
    email: 'vpapeta31@gmail.com',
    phone: '0932013915',
    title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
    salary: '37000',
    address: 'Horodotska st',
    benefits: ['good salary', 'good food'],
    location: {
                 lat: -13,
                long: 23,
            },
    pictures: ['https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'],
    createdAt: new Date('2010-12-17T03:24:00'),
    updatedAt: new Date('2015-12-17T03:24:00'),
    description: 'some Description',
    employment_type: ['in company office', 'some other type'],
    }, {
        id: '41',
        name: 'vova',
        email: 'vpapeta31@gmail.com',
        phone: '0932013915',
        title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
        salary: '37000',
        address: 'Horodotska st',
        benefits: ['good salary', 'good food'],
        location: {
                     lat: -13,
                    long: 23,
                },
        pictures: ['https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'],
        createdAt: new Date('2010-12-17T03:24:00'),
        updatedAt: new Date('2015-12-17T03:24:00'),
        description: 'some Description',
        employment_type: ['in company office', 'some other type'],
        }, {
            id: '45',
            name: 'vova',
            email: 'vpapeta31@gmail.com',
            phone: '0932013915',
            title: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)',
            salary: '37000',
            address: 'Horodotska st',
            benefits: ['good salary', 'good food'],
            location: {
                         lat: -13,
                        long: 23,
                    },
            pictures: ['https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'],
            createdAt: new Date('2010-12-17T03:24:00'),
            updatedAt: new Date('2015-12-17T03:24:00'),
            description: 'some Description',
            employment_type: ['in company office', 'some other type'],
            }
    ]

    useEffect(() => {
       jobsService.getJobsList().then(val => {setErr(null); setJobs(val)}).catch((e) => e ? setErr(e.message) : null);
       //setJobs(testObj);
    }, [])
   
    return (
        err ? <OnError err={err}/> :  jobs ? 
            <div className='bg-gray-layer p-1 md:py-2 md:px-8 items-center inline-flex flex-col w-full min-h-screen'>
            {jobs.map(job => <JobCard key={job.id} job={job}/>)}
            <Pagination/>
            </div>
            : <PageLoader/>
    );
};

export default JobsList;