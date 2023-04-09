import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-evenly mt-5'>
            <h2 className='text-3xl font-extrabold'>Dream<span className='text-indigo-500'>Career</span></h2>
            <div className='flex gap-5 text-gray-500 font-medium'>
                <Link to='/'>Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to='/appliedJobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <button className='bg-gradient-to-r from-sky-500 to-indigo-500 p-3 rounded-lg text-white font-bold'>Star Applying</button>
        </div>
    );
};

export default Header;