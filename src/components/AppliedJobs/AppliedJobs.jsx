import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAppliedJobs } from '../../utilities/fakeDB';
import AppliedJob from './AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);

    const Jobs = useLoaderData();
    const appliedJobsInDB = getAppliedJobs();
    // console.log(appliedJobsInDB);

    useEffect(() => {
        const founedJobs = [];
        for(const id in appliedJobsInDB){
            const foundedAppliedJob = Jobs.find(job => job.id == id);
            if(foundedAppliedJob){
                founedJobs.push(foundedAppliedJob)
            }
        }
        setAppliedJobs(founedJobs);
    }, []);

    const handleOnSiteButton = () => {
        const founedJobs = [];
        for(const id in appliedJobsInDB){
            const foundedAppliedJob = Jobs.find(job => job.id == id);
            if(foundedAppliedJob){
                founedJobs.push(foundedAppliedJob)
            }
        }
        const isOnsite = (job) => {
           const Job = job.remoteOrOnsite == 'Onsite';
            return Job;
        }
        const onsiteJob = founedJobs.filter(isOnsite);
        // console.log(onsiteJobs);
        setAppliedJobs(onsiteJob);
    }

    const handleRemoteButton = () => {
        const founedJobs = [];
        for(const id in appliedJobsInDB){
            const foundedAppliedJob = Jobs.find(job => job.id == id);
            if(foundedAppliedJob){
                founedJobs.push(foundedAppliedJob)
            }
        }
        const isRemote = (job) => {
            const remoteJob = job.remoteOrOnsite == 'Remote';
            return remoteJob;
        }
        const remoteJob = founedJobs.filter(isRemote);
        setAppliedJobs(remoteJob);
    }
    
    return (
        <div>
            <div className='flex justify-evenly mt-1'>
                <img src="https://i.ibb.co/Vx66Pq6/Vector.png" alt="" />
                <h1 className='text-center font-bold text-5xl mt-5'>Applied Jobs</h1>
                <img src="https://i.ibb.co/dDRNdLn/Vector-1.png" alt="" />
            </div>
                <div className='flex gap-5 justify-end me-32 mt-5'>
                    <button className='border-2 border-purple-500 px-5 py-2 rounded-lg text-purple-500 font-bold hover:bg-purple-500 hover:text-white' onClick={handleOnSiteButton}>Onsite</button>
                    <button className='border-2 border-purple-500 px-5 py-2 rounded-lg text-purple-500 font-bold hover:bg-purple-500 hover:text-white' onClick={handleRemoteButton}>Remote</button>
                </div>
            <div className='flex flex-col gap-5 items-center justify-center mt-10'>
                {
                    appliedJobs.map(appliedJob => <AppliedJob appliedJob={appliedJob} key={appliedJob.id}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;