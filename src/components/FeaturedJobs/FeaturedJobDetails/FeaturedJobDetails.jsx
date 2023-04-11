import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCircleDollarToSlot, faUserSecret, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const FeaturedJobDetails = () => {
    const Jobs = useLoaderData();
    const {jobId} = useParams();
    const [jobDetails, setJobDetails] = useState({});
    // console.log(jobId);
    useEffect(() => {
        const Job = Jobs.find(Job => Job.id == jobId);
        setJobDetails(Job);
    }, [])
    // console.log(jobDetails.phone);
    const {jobDescription, jobResponsibility, educationalRequirements, experiences,  salary, jobTitle, phone, email, location} = jobDetails;

    return (
        <div>
            <div className='flex justify-evenly mt-1'>
                <img src="https://i.ibb.co/Vx66Pq6/Vector.png" alt="" />
                <h1 className='text-center font-bold text-5xl mt-5'>Job Details</h1>
                <img src="https://i.ibb.co/dDRNdLn/Vector-1.png" alt="" />
            </div>
            <div className='mt-20 flex items-center justify-center gap-10'>
                <div className='flex flex-col gap-5 w-96'>
                    <p><span className='font-bold'>Job Description: </span> <br />{jobDescription}</p>
                    <p><span className='font-bold'>Job Responsibility: </span><br />{jobResponsibility}</p>
                    <p><span className='font-bold'>Educational Requirements: </span><br />{educationalRequirements}</p>
                    <p><span className='font-bold'>Experience: </span><br />{experiences}</p>
                </div>
                <div className='bg-purple-100 p-5 rounded-xl flex flex-col'>
                    <h4 className='font-bold'>Job Details</h4>
                    <hr className='p-1 bg-purple-700 rounded'/>
                        <p className='mt-5'>
                            <FontAwesomeIcon icon={faCircleDollarToSlot} />
                            <span className='font-semibold ms-2'>Salary: </span>
                            {salary}
                        </p>
                        <p className='mt-2'>
                            <FontAwesomeIcon icon={faUserSecret} />
                            <span className='font-semibold ms-2'>Job Title: </span>
                            {jobTitle}
                        </p>
                    <h4 className='font-bold mt-5'>Contact Information</h4>
                    <hr className='p-1 bg-purple-700 rounded' />
                        <div className='flex flex-col gap-2 mt-5'>
                            <p>
                                <FontAwesomeIcon icon={faPhone} />
                                <span className='font-semibold ms-2'>Phone: </span>
                                {phone}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className='font-semibold ms-2'>Email: </span>
                                {email}
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span className='font-semibold ms-2'>Location: </span>
                                {location}
                            </p>
                        </div>
                <button className='px-5 py-2 bg-purple-500 mt-5 text-white rounded-lg font-bold'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobDetails;