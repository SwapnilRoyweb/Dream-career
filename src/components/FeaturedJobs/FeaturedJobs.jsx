import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import FeatureJob from './FeatureJob/FeatureJob';

const FeaturedJobs = ({FeatureJobs}) => {
    const [featureJobs, setJobs] = useState([]);
    const [isClicked, setClicked] = useState(false);

    useEffect(() => {
        const firstFeatureJobs = FeatureJobs.slice(0, 4);
        setJobs(firstFeatureJobs);
    }, []);
    // let firstJobs = FeatureJobs.slice(0, 4);
    
    const handleSeeAllButton = () => {
        setClicked(true);
        setJobs(FeatureJobs);
    }

    return (
        <div className='mt-10 flex flex-col items-center'>
            <h1 className='text-5xl font-extrabold'>Featured Jobs</h1>
            <p className='mt-3 text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need.<br /> Its your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-10'>
                {
                    featureJobs.map(featureJob => <FeatureJob key={featureJob.id} featureJob={featureJob}></FeatureJob>)
                }
            </div>
            <button className={`${isClicked ? 'hidden' : ''} mt-10 bg-purple-500 px-5 py-2 rounded-md text-white font-semibold hover:bg-purple-600`} onClick={handleSeeAllButton}>See All Jobs</button>
        </div>
    );
};

export default FeaturedJobs;