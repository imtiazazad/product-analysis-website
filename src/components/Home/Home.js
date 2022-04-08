import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Home = () => {
    return (
        <div>
            <div className='flex w-full'>
            <div className='text-left p-10 w-2/4'>
                <h1 className='text-4xl font-bold mb-5'>Trending Virtual Reality</h1>
                <h1 className='text-blue-700 text-4xl font-bold mb-5'>The Best Virtual Reality</h1>
                <p className='mb-4'>Virtual Reality (VR) is the use of computer technology to create a simulated environment. Virtual reality (VR) is a simulated experience that can be similar to or completely different from the real world. Applications of virtual reality include entertainment (particularly video games), education (such as medical or military training) and business (such as virtual meetings).</p>
            </div>
            <div className='w-2/5'>
                <img src="VR.jpg" alt="" />
            </div>
            </div>

            <div>
                <h2 className='justify-center'>Customer Reviews</h2>
                <button className=' '><CustomLink to="/reviews" className='px-14 py-1 bg-blue-400 text-white rounded'>See All Reviews</CustomLink></button>
            </div>
        </div>
    );
};

export default Home;