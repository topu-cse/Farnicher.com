import React from 'react';
import img1 from '../../../assets/explore/e1.png'
import img2 from '../../../assets/explore/e2.png'
import img3 from '../../../assets/explore/e3.png'
import { Link } from 'react-router-dom';

const Cart = () => {
    
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
    ]
    return (
        <div>

<div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>Cart</h1>
            </div>



            <div className="overflow-x-auto  my-[50px]">
  <table className="table  mx-[50px]">
    <thead>
      <tr className='text-xl'>
        <th>Image</th> 
        <td>Product</td> 
        <td>Price</td> 
        <td>Total</td> 
        
        
      </tr>
    </thead> 
    <tbody >
      
      {
                exploreData.map((e)=>(
                    <tr key={e.id}>
        <th ><img className='h-[100px]' src={e.img} alt="" /></th> 
        <td>{e.name}</td> 
        <td>{e.price}</td> 
        <td>{e.price}</td>  
        
   <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current mt-[50px]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
  

         
      </tr>
                ))
      }
      
       
    </tbody> 
    
  </table>
</div>


        <div className='flex flex-col md:flex-row lg:flex-row p-9 lg:px-[100px]'>

             <div>
                   <div>
                   <button className='btn rounded-none text-white bg-orange-600 hover:bg-orange-700 border-none'>Update Cart</button>
                    <button className='btn rounded-none mx-2 bg-green-950 text-white hover:bg-green-950  '>Continue Shopping</button>
                   </div>
                   <div className='mt-7'>
                      <h1 className='text-xl font-bold'>Coupon</h1>
                      <p className='my-5 text-gray-400'> Enter your coupon code if you have one.</p>
                        <div className='flex  '>
                        <input type="text" placeholder="Coupon Code" className="input mr-4 input-bordered input-md w-full max-w-xs focus:outline-none focus:border-green-900" />
                        <button className='btn rounded-none  bg-green-950 text-white hover:bg-green-950 '>Apply Coupon</button>
                        </div>
                   </div>
             </div>


               
               <div className='mx-auto  top-0 justify-end items-end mt-10 md:mt-0 lg:mt-0 lg:pl-[200px]'>
                <h1 className='text-4xl mb-1 font-bold'>CART TOTALS</h1>
                <hr  className='mb-10 text-green-900'/>
                <div className='flex my-10'>
                    <p className=''>Subtotal</p>
                    <p className='font-bold pl-[100px]'>$230.00</p>
                </div>
                <div className='flex'>
                    <p>Total</p>
                    <p className='font-bold pl-[125px]'>$230.00</p>
                </div>
                <Link to={'/checkout'}> <button className='btn rounded-none  bg-green-950 text-white hover:bg-green-950 mt-5'> Proceed To Checkout</button></Link>
               </div>

        </div>

           
        </div>
    );
};

export default Cart;