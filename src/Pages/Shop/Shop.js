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
        <div>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>Shop</h1>
            </div>

                 <div className='max-w-[1640] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-28  px-[100px]'>

                 </div>

        </div>
    );
};

export default Shop;