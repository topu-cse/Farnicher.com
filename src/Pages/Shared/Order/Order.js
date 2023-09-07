import React from 'react';
import { GiShoppingCart } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Order = () => {
    return (
        <div>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>successfully</h1>

                 
            </div>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[500px] bg-base-200'>
                    <div>
                         <div>
                            <h1 ><GiShoppingCart size={40}  className='w-[80px] h-[80px] text-center ml-[120px]'/></h1>
                         </div>
                         <h1 className='text-[50px] text-center font-bold'>Thank you!</h1>
                         <p className='text-center my-10 text-[20px] text-gray-500'>You order was successfuly completed.</p>
                         <Link to={'/shop'}><button className='btn rounded-none  bg-green-950 text-white hover:bg-green-950 ml-[80px] px-[50px]'>Back Shop</button></Link>
                    </div>
                </div>
        </div>
    );
};

export default Order;