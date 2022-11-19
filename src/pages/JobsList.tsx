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

    useEffect(() => {
       jobsService.getJobsList().then(val => {setErr(null); setJobs(val)}).catch((e) => e ? setErr(e.message) : null);
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