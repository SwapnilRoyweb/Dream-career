import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const FeatureJob = ({featureJob}) => {
    // console.log(featureJob);
    const {companyLogo, jobTitle, companyName, remoteOrOnsite, location, fullTimeOrPartTime, salary, id} = featureJob;

    return (
        <div className='border border-purple-500 py-6 px-8 rounded-lg flex flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300'>
            <img className='w-40' src={companyLogo} alt="" />
            <h1 className='font-bold mt-5'>{jobTitle}</h1>
            <p className='text-gray-500 text-sm'>{companyName}</p>
            <div className='mt-3'>
                <button className='border-2 border-purple-500 px-2 py-1 me-3 text-purple-700 rounded-md font-bold'>{remoteOrOnsite}</button>
                <button className='border-2 border-purple-500 px-2 py-1 text-purple-700 rounded-md font-bold'>{fullTimeOrPartTime}</button>
            </div>
            <div className='flex gap-5 mt-3 text-gray-500'>
                <p>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className='ms-1'>{location}</span>
                </p>
                <p>
                    <FontAwesomeIcon icon={faCircleDollarToSlot} />
                    <span className='ms-1'>{salary}</span>
                </p>
            </div>
            <button className='bg-purple-500 text-white font-semibold px-3 py-2 mt-3 rounded-lg hover:bg-purple-700'><Link to={`/jobDetails/${id}`}>View Details</Link></button>
        </div>
    );
};

export default FeatureJob;