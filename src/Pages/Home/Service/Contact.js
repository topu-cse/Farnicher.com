import React from 'react';
import b1 from '../../../assets/banner/b1.png'
import {GrLocation } from "react-icons/gr";
import {MdEmail } from "react-icons/md";
import {BsFillTelephoneMinusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div>
            <div className="hero bg-green-950 h-full lg:h-[520px] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">

                        <img className='w-[740px] pt-12 lg:ml-[150px]' src={b1} alt="" />
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm  ">
                        <div>
                            <h1 className='text-white text-2xl mb-3 lg:text-5xl'>Contact</h1>
                            <p className='text-gray-300 py-10'>Donec vitae odio quis nisl dapibus malesuada.
                                Nullam ac aliquet velit.
                                Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <div className=' '>
                            <Link to={'/shop'}><button className='btn rounded-none text-white bg-orange-600 hover:bg-orange-700 border-none'>Shop Now</button></Link>
                    <Link to={'/shop'}> <button className='btn rounded-none mx-2 bg-green-950 text-white hover:bg-green-950  '>Explore</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Location */}

              <div className='flex justify-center items-center h-[300px] bg-base-200'>
                <div className='max-w-[1640] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:pl-[50px]'>

                  <div className='flex'>
                        <div className='bg-green-900 p-[10px] rounded'>
                           <GrLocation size={20}  className='mt-1  '/>
                        </div>

                        <div className='pl-[10px]'>
                              <p>43 Raymouth Rd.<br/> Baltemoer, London 3910</p>
                        </div>
                  </div>


                  <div className='flex'>
                        <div className='bg-green-900 p-[10px] rounded'>
                           <BsFillTelephoneMinusFill size={20}  className='mt-1  '/>
                        </div>

                        <div className='pl-[10px] mt-3'>
                              <p>01703843108</p>
                        </div>
                  </div>

                  <div className='flex'>
                        <div className='bg-green-900 p-[10px] rounded'>
                           <MdEmail size={20}  className='mt-1  '/>
                        </div>

                        <div className='pl-[10px] mt-3'>
                              <p>Email:topu15-3604@diu.edu.bd</p>
                        </div>
                  </div>

                </div>
              </div>


                {/* contact */}

                    <div className='bg-base-200'>
                        
                <div className="w-full max-w-lg mx-auto py-10">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
           
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name="message"
            placeholder="Your Message"
            
            rows="4"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-900  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
                    </div>
 
        </div>
    );
};

export default Contact;