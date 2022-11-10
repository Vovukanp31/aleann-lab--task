import React, {useEffect, useState} from 'react';
import JobCard from '../components/JobCardComponent';
import { jobsService } from '../services/jobsService';
import { IUser } from '../models/IUser';
import Loader from '../components/UI/Loader';
import Pagination from '../components/UI/Pagination';

const JobsList = () => {

    const [jobs, setJobs] = useState<IUser[] | null>(null);

    useEffect(() => {
       setTimeout(() => jobsService.getJobsList().then(val => setJobs(val)), 2000)
    }, [])
   
    return (
            jobs ? 
            <div className='bg-gray-200'>
            {jobs.map(job => <JobCard key={job.id} job={job}/>)}
            <Pagination/>
            </div>
            : <Loader size={20}/>
    );
};

export default JobsList;