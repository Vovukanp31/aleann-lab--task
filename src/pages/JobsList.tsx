import React, {useEffect, useState} from 'react';
import JobCard from '../components/JobCardComponent';
import { jobsService } from '../services/jobsService';
import { IUser } from '../models/IUser';
import PageLoader from '../components/UI/PageLoader';
import Pagination from '../components/UI/Pagination';

const JobsList = () => {

    const [jobs, setJobs] = useState<IUser[] | null>(null);

    useEffect(() => {
       setTimeout(() => jobsService.getJobsList().then(val => setJobs(val)), 5000);
    }, [])
   
    return (
            jobs ? 
            <div className='bg-gray-200 p-2 items-center inline-flex flex-col w-full'>
            {jobs.map(job => <JobCard key={job.id} job={job}/>)}
            <Pagination/>
            </div>
            : <PageLoader/>
    );
};

export default JobsList;