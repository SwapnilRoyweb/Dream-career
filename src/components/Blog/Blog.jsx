import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='flex justify-evenly mt-1'>
                <img src="https://i.ibb.co/Vx66Pq6/Vector.png" alt="" />
                <h1 className='text-center font-bold text-5xl mt-5'>Blogs</h1>
                <img src="https://i.ibb.co/dDRNdLn/Vector-1.png" alt="" />
            </div>
            <div className='text-center bg-purple-200 mx-20 p-10 mt-10 rounded-full flex flex-col gap-8'>
                <div className='bg-white rounded-full mx-20 p-2 hover:-translate-y-6'>
                    <h3 className='text-lg font-bold'>When should you use context API?</h3>
                    <p>we use <strong>Context API</strong> share state across the entire application</p>
                </div>
                <div className='bg-white rounded-full mx-20 p-2 hover:-translate-y-6'>
                    <h3 className='text-lg font-bold'>What is a custom hook?</h3>
                    <p><strong>Custom Hook</strong> is a function that can be made by own and also we can call and use it when needed by adding'use' first</p>
                </div>
                <div className='bg-white rounded-full mx-20 p-2 hover:-translate-y-6'>
                    <h3 className='text-lg font-bold'>What is useRef?</h3>
                    <p>useRef is hook of rect. It returns a mutable ref object that can be assigned to a component's DOM element, or to any other value that needs to be accessed between renders</p>
                </div>
                <div className='bg-white rounded-full mx-20 p-2 hover:-translate-y-6'>
                    <h3 className='text-lg font-bold'>What is useMemo?</h3>
                    <p>useMemo is another hook that can be used to optimize performance by memoizing expensive calculations</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;