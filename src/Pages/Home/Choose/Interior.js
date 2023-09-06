import React from 'react';
import img1 from '../../../assets/explore/img1.jpg'
import img2 from '../../../assets/explore/img2.jpg'
import e1 from '../../../assets/explore/e1.png'
import e2 from '../../../assets/explore/e2.png'
import e3 from '../../../assets/explore/e3.png'
import { Link } from 'react-router-dom';

const Interior = () => {
    const exploreData=[
        {
            id:1,
            img:e1,
            name:"Nordic Chair",
            info:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio'

        },
        {
            id:2,
            img:e2,
            name:"Kruzo Aero Chair",
            info:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio'
        },
        {
            id:3,
            img:e3,
            name:"Ergonomic chair",
            info:'Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio'
        },
    ]
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



            <div>
                <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-16  px-[20px] md:px-[20px] lg:px-[100px]'>
                    {
                        exploreData.map((e)=>(
                            <div className='flex h-[200px]'>
                                <div>
                                    <img className='w-[200px] h-[120px]' src={e.img} alt="" />
                                </div>
                                <div className='pt-[10px] px-2'>
                                    <p className='font-bold'>{e.name}</p>
                                    <p className='text-gray-400 py-2'>{e.info}</p>
                                    <Link className='text-green-900'>Read More</Link>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    );
};

export default Interior;