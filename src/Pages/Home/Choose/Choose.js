import React from 'react';
import img1 from '../../../assets/explore/c1.jpg'
import { FaShippingFast } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { CgSupport } from "react-icons/cg";
import { MdAssignmentReturn } from "react-icons/md";

const Choose = () => {
    return (


          <div className='mt-[100px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                       <h1 className='pl-[40px] font-bold text-4xl py-5'>Why Choose Us</h1>
                       <p className='px-[40px]'>Donec vitae odio quis nisl dapibus malesuada
                        . Nullam ac aliquet velit.
                         Aliquam vulputate velit
                          imperdiet dolor tempor tristique.</p>

                          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 mt-10 px-[40px]'>
                               
                          <div className='mb-5'>
                 <FaShippingFast size={40} />
               <div>
                <h6 className='pt-2 font-bold'>Fast & Free Shipping</h6>
                <p>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

           <div>
               <BsBagFill size={40}/>
               <div>
                <h6>Fast & Free Shipping</h6>
                <p>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

           <div>
               <CgSupport size={40}/>
               <div>
                <h6>Fast & Free Shipping</h6>
                <p>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

           <div>
               <MdAssignmentReturn size={40}/>
               <div>
                <h6>Fast & Free Shipping</h6>
                <p>Donec vitae odio quis nisl
                     dapibus malesuada. 
                     Nullam ac aliquet velit.
                      Aliquam vulputate.</p>
               </div>
           </div>

                               
                          </div>
                </div>
                <div className='flex justify-between items-center w-full'>
                <img src={img1} alt="" className='w-[500px] h-[500px]  '/>
                </div>
            </div>
          </div>




//         <div>
//             <div className="hero min-h-screen px-[80px]">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <img src={img1} className="max-w-sm rounded-lg shadow-2xl"  alt=''/>
//     <div>
//       <h1 className="text-5xl font-bold">Why Choose Us</h1>
//       <p className="py-6">Donec vitae odio quis nisl dapibus malesuada.
//        Nullam ac aliquet velit.
//         Aliquam vulputate velit imperdiet dolor tempor tristique.

// </p>
      
//     </div>
//     <div className='mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4'>
     
//      {/* cart */}

            

//     </div>

//   </div>
  
// </div>


//         </div>
    );
};

export default Choose;