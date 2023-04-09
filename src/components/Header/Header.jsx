import React from 'react';
import { Link } from 'react-router-dom';
// import '../../index.css';

const Header = () => {
    return (
        <div>
            <Link to='/' className=''>Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to='/appliedJobs'>Applied Jobs</Link>
            <Link to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;