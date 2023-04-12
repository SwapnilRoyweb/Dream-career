import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroadcastTower } from '@fortawesome/free-solid-svg-icons';
const NotFoundPage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300' src="https://i.ibb.co/64GDrxF/8030430-3828537-removebg-preview.png" alt="" />
            <h1 className='text-8xl font-extrabold text-red-600 text-center mt-5'><span className='mx-10'>404!!!</span> 
                <FontAwesomeIcon icon={faBroadcastTower} /> 
            <span className='mx-10'>Error!!!</span></h1>
        </div>
    );
};

export default NotFoundPage;