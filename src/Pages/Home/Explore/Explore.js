import React from 'react';
import img1 from '../../../assets/explore/e1.png'
import img2 from '../../../assets/explore/e2.png'
import img3 from '../../../assets/explore/e3.png'
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Explore = () => {

    const exploreData = [
        {
            id: 1,
            img: img1,
            name: "Nordic Chair",
            price: '$50.00'

        },
        {
            id: 2,
            img: img2,
            name: "Kruzo Aero Chair",
            price: '$78.00'
        },
        {
            id: 3,
            img: img3,
            name: "Ergonomic chair",
            price: '$43.00'
        },
    ]
    return (
        <div>
            <div className='max-w-[1640] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-28 mx-[60px]  lg:px-[100px]'>
                <div>
                    <h1 className='text-4xl  font-bold'> Crafted with excellent  material.</h1>
                    <p>Donec vitae odio quis nisl dapibus malesuada.
                        Nullam ac aliquet velit. Aliquam vulputate
                        velit imperdiet dolor tempor tristique.</p>
                    <Link to={'/shop'}> <button className='btn rounded-none mt-7 bg-green-950 text-white hover:bg-green-950/80  '>Explore</button></Link>
                </div>

                {/* cart */}
                {
                    exploreData.map((e) => (
                        <Link to={'/cart'}>
                            <div className=' cursor-pointer cart shadow-lg hover:scale-105 duration-300 '>
                                <img className='' src={e.img} alt="" />
                                <div className='pt-7 text-center'>
                                    <p>{e.name}</p>
                                    <p className='pb-[10px]'>{e.price}</p>
                                    <div className='cart-hide'>< AiOutlinePlus size={30} className='justify-between items-center w-full mt-[-14px] ml-[70px]' /></div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>





        </div>
    );
};

export default Explore;