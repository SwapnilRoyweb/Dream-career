import React from 'react';


const Banner = () => {
    return (
        <div className='flex items-center justify-evenly mt-20'>
            <div>
                <h1 className='text-7xl font-extrabold'>One Step <br /> Closer To Your <br /><span className='text-indigo-400'>Dream Job</span></h1>
                <p className='text-gray-500 mt-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all  <br /> your job application from start to finish.</p>
                <button className='bg-indigo-400 px-5 py-3 rounded-lg mt-5 text-white text-xl font-semibold hover:bg-indigo-600'>Get Started</button>
            </div>
            <img className='h-96' src="https://i.ibb.co/QJNf0fd/P3-OLGJ1-copy-1.png" alt="" />
        </div>
    );
};

export default Banner;