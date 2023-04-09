import React from 'react';

const Job = ({job}) => {
    const {image, name, jobAvailable} = job;
    return (
        <div className='flex flex-col items-center justify-center border-2 border-indigo-500 p-5 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300'>
            <img className='' src={image} alt="" />
            <h2 className='text-lg font-semibold mt-5'>{name}</h2>
            <p className='text-gray-500'>{jobAvailable}</p>
        </div>
    );
};

export default Job;