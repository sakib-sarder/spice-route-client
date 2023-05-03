import React from 'react';
import cooking from '../../assets/cooking.jpg'

const JoinUs = () => {
    return (
        <div className='md:flex justify-between bg-white shadow-lg h-[65vh]'>
            <div className=' m-auto'>
                <div className='space-y-4 ps-4'>
                <p className='text-amber-500 text-2xl font-semibold'>Join Us</p>
                <h3 className='text-4xl font-bold'>Let's start sharing your <br /> awesome recipes</h3>
                <button className='p-2 bg-amber-500 text-lg tracking-wider font-semibold rounded-lg'>Join Now</button>
                </div>
            </div>
            <div className=''>
                <img className='h-full' src={cooking} alt="cooking" />
            </div>
        </div>
    );
};

export default JoinUs;