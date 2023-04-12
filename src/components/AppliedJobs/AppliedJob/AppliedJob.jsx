import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const AppliedJob = ({appliedJob}) => {
    // console.log(appliedJob)
    const {companyLogo, jobTitle, companyName, remoteOrOnsite, fullTimeOrPartTime, location, salary, id} = appliedJob;
    return (
        <div className='flex border-2 border-purple-500 p-3 gap-10 rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300'>
            <img className='w-52 h-40' src={companyLogo} alt="" />
            <div className='flex flex-row justify-between items-center gap-10'>
                <div>
                    <h5 className='text-xl font-bold'>{jobTitle}</h5>
                    <p className='text-sm text-gray-500 mt-1'>{companyName}</p>
                    <button className='border-2 border-purple-500 px-3 py-1 rounded-lg font-bold mt-2 text-purple-500'>{remoteOrOnsite}</button>
                    <button className='border-2 border-purple-500 px-3 py-1 rounded-lg font-bold ms-2 text-purple-500'>{fullTimeOrPartTime}</button>
                    <div className='flex gap-5 mt-2'>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className='ms-2'>{location}</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCircleDollarToSlot} />
                            <span className='ms-2'>{salary}</span>
                        </p>
                    </div>
                </div>
                <div>
                    <button className='bg-purple-500 px-5 py-2 rounded-lg text-white font-bold hover:bg-purple-600'><Link to={`/jobDetails/${id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;