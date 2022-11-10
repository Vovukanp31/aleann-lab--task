import React from 'react';
import { IUser } from '../models/IUser';

interface JobsProps {
    job: IUser
}

const JobCard = ({job}: JobsProps) => {
    return (
        <div>
            {JSON.stringify(job)}
        </div>
    );
};

export default JobCard;