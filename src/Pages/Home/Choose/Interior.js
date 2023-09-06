import React from 'react';
import img1 from '../../../assets/explore/img1.jpg'
import img2 from '../../../assets/explore/img2.jpg'

const Interior = () => {
    return (
        <div>
            <div className="hero  mb-[200px] lg:px-[100px] ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='relative w-1/2 '>
                        <img src={img1} alt="" className="w-4/5 rounded-lg shadow-2xl sm:w-96 h-[300px]" />
                        <img src={img2} alt="" className="absolute right-5 top-1/2 w-3/5 h-[300px]  rounded-lg shadow-2xl sm:w-96" />
                    </div>
                    <div className='w-1/2 mt-[200px]'>

                        <h1 className="my-5   font-bold md:text-2xl sm:text-sm md:my-10  ">
                        We Help You Make Modern Interior Design</h1>
                        <p className="py-2">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                        Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada </p>
                       
                        <button className='btn rounded-none mx-2 bg-green-950 text-white hover:bg-green-950 mt-[10px] '>Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interior;