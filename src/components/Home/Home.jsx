import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import JobCategory from '../JobCategory/JobCategory';

const Home = () => {
    const FeatureJobs = useLoaderData();
    // console.log(FeatureJobs);
    
    // console.log(firstFeatureJobs);
    return (
        <div>
            <Banner></Banner>
            <JobCategory></JobCategory>
            <FeaturedJobs FeatureJobs={FeatureJobs}></FeaturedJobs>
        </div>
    );
};

export default Home;