import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Job from './Job/Job';

const JobCategory = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobsCategory.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    return (
        <div className='mt-10 flex flex-col items-center justify-center'>
            <h1 className='text-4xl font-extrabold'>Job Category List</h1>
            <p className='text-gray-500 mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex items-center justify-center gap-10 mt-10'>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default JobCategory;