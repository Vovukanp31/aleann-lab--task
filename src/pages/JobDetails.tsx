import React from 'react';
import { useLocation } from 'react-router-dom';
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

    return (
        <>
            Hello
        </>
    );
};

export default JobDetails;