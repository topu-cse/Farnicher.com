import React from 'react';
import b1 from '../../../assets/banner/b1.png'
import { FaShippingFast } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
import { MdAssignmentReturn } from "react-icons/md";
import Explore from '../Explore/Explore';
import Testimonials from './Testimonials';
const Service = () => {
    return (
        <div>


            <div className="hero bg-green-950 h-full lg:h-[520px] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img className='w-[740px] pt-12' src={b1} alt="" />
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm  ">
                        <div>
                            <h1 className='text-white text-2xl mb-3 lg:text-5xl'>Services</h1>
                            <p className='text-gray-300 py-10'>Donec vitae odio quis nisl dapibus malesuada.
                                Nullam ac aliquet velit.
                                Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <div className=' '>
                                <button className='btn rounded-none text-white bg-orange-600 hover:bg-orange-700 border-none'>Shop Now</button>
                                <button className='btn rounded-none mx-2 bg-green-950 text-white hover:bg-green-950  '>Explore</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* service */}



            <div>

                
          <div className='mt-[100px] lg:pl-[90px]'>
           
                <div>
                      

                          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 px-[30px] '>
                               
                          <div className='mb-5'>
                 <FaShippingFast size={40} />
               <div>
                <h6 className='py-2 font-bold'>Fast & Free Shipping</h6>
                <p className='text-gray-500'>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

           <div className='mb-5'>
               <BsBagFill size={40}/>
               <div >
                <h6 className='py-2 font-bold'>Easy to Shop</h6>
                <p className='text-gray-500'>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

           <div className='mb-5'>
               <CgSupport size={40}/>
               <div>
                <h6 className='py-2 font-bold'>24/7 Support</h6>
                <p className='text-gray-500'>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

           <div className='mb-5'>
               <MdAssignmentReturn size={40}/>
               <div>
                <h6 className='py-2 font-bold'>Hassle Free Returns</h6>
                <p className='text-gray-500'>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

                               
                          </div>
                </div>
                
            </div>
          </div>

            <Explore/>
            <Testimonials/>


        </div>
    );
};

export default Service;