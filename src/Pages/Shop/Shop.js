import React from 'react';
import img1 from '../../assets/explore/e1.png'
import img2 from '../../assets/explore/e2.png'
import img3 from '../../assets/explore/e3.png'
import { AiOutlinePlus } from "react-icons/ai";

const Shop = () => {
    const exploreData=[
        {
            id:1,
            img:img1,
            name:"Nordic Chair",
            price:'$50.00'

        },
        {
            id:2,
            img:img2,
            name:"Kruzo Aero Chair",
            price:'$78.00'
        },
        {
            id:3,
            img:img3,
            name:"Ergonomic chair",
            price:'$43.00'
        },
        {
            id:4,
            img:img1,
            name:"Nordic Chair",
            price:'$73.00'
        },
        {
            id:5,
            img:img2,
            name:"Kruzo Aero Chair",
            price:'$43.00'
        },
        {
            id:6,
            img:img3,
            name:"Ergonomic chair",
            price:'$44.00'
        },
        {
            id:7,
            img:img1,
            name:"Nordic Chair",
            price:'$50.00'
        },
        {
            id:8,
            img:img2,
            name:"Kruzo Aero Chair",
            price:'$43.00'
        },
    ]
    return (
        <div className='mb-[100px]'>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>Shop</h1>
            </div>

                 <div className='max-w-[1640] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 px-[20px]  lg:px-[100px] '>
                 {
                exploreData.map((e)=>(
                    <div key={e.id} className=' cursor-pointer cart shadow-lg hover:scale-105 duration-300 mt-[30px] pb-[10px]'>
                        <img className='' src={e.img} alt="" />
                        <div className='pt-7 text-center'>
                            <p>{e.name}</p>
                            <p className='font-bold'>{e.price}</p>
                             <div className='cart-hide'>< AiOutlinePlus size={30} className='justify-between items-center w-full mt-[-5px] ml-[50px] md:ml-[70px] lg:ml-[80px]'/></div>
                        </div>
                    </div>
                ))
              }
                 </div>

        </div>
    );
};

export default Shop;