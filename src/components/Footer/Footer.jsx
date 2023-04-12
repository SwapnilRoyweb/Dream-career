import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook,  faTwitterSquare, faInstagram} from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    return (
        <div className='bg-black text-white p-5 mt-10'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
                <div className='ms-10 flex flex-col gap-3'>
                    <h1 className='text-3xl font-bold'>DreamCareer</h1>
                    <p className='text-xs text-gray-400'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <div className='flex gap-2'>
                        <img className='rounded-full w-10' src="https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?w=996&t=st=1681312044~exp=1681312644~hmac=f4090f11bee0393eb3b56065fe79ad16ff36c16c2671375eae11a3bf2a13f041" alt="" />
                        <img className='rounded-full w-10' src="https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?w=740&t=st=1681312160~exp=1681312760~hmac=96e9b7f644c37fee7aaa5aee46cf766199cdfd99959fed0e68c19cb64fd21b11" alt="" />
                        <img className='rounded-full w-10' src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1681312211~exp=1681312811~hmac=f543204b462bcf8894b756fbe8ecdddab3ee9f732db41a6be6a50e9392fcdf5a" alt="" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Company</h1>
                    <div className='text-gray-400'>
                        <p>About Us</p>
                        <p>Work</p>
                        <p>LatestNews</p>
                        <p>Careers</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Product</h1>
                    <div className='text-gray-400'>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Support</h1>
                    <div className='text-gray-400'>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>Contact</h1>
                    <div className='text-gray-400'>
                        <p>524 Broadway , NYC</p>
                        <p>+1 777 - 978 - 5570</p>
                    </div>
                </div>
            </div>
            <hr className='mt-5 mx-52' />
            <div className='flex flex-col md:flex-row items-center justify-around mt-5 text-gray-500'>
                <p>@2023 <strong>DreamCareer</strong> All Rights Reserved</p>
                <p>Powered by DreamCareer</p>
            </div>
        </div>
    );
};

export default Footer;