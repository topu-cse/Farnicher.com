import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>Checkout</h1>
            </div>


            {/* Information of checkout */}
            <div className='flex flex-col md:flex-row lg:flex-row px-[20px] lg:px-[120px] mt-10 lg:mt-[70px]'>


                <div>
                    <h1 className='text-4xl font-bold mb-5'>Billing Details</h1>
                    {/* Information  */}
                    <div className='border-solid border-2 p-5 lg:p-10 bg-base-200 '>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>

                            </label>
                            <input type="text" placeholder="Enter name" className="  md:w-[320px] input input-bordered  max-w-xx focus:outline-none focus:border-green-900" />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Address</span>

                            </label>
                            <input type="text" placeholder="Address" className=" md:w-[320px] input input-bordered  max-w-xs focus:outline-none focus:border-green-900" />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input type="Email" placeholder="Email" className=" md:w-[320px] input input-bordered  max-w-xs focus:outline-none focus:border-green-900" />

                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone</span>

                            </label>
                            <input type="text" placeholder="Phone Number" className=" md:w-[320px] input input-bordered max-w-xs focus:outline-none focus:border-green-900" />

                        </div>

                        <div className="form-control">
                            <label className="cursor-pointer label">

                                <input type="checkbox" className="checkbox checkbox-success" />
                            </label>
                        </div>

                        <textarea placeholder="Weite some order here" className=" md:w-[320px] textarea textarea-bordered textarea-lg  max-w-xs focus:outline-none focus:border-green-900" ></textarea>
                    </div>
                </div>


                <div className='md:ml-[30px] lg:ml-[200px]'>
                    <h1 className='text-4xl font-bold mb-5 '>Coupon Code</h1>
                    <div className='pl-5 md:pl-10 lg:pl-[70px] border-solid border-2  p-5 lg:p-5 bg-base-200 lg:w-[600px]'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter your coupon code if you have one</span>

                            </label>
                            <input type="text" placeholder="Coupon Code" className=" w-[350px] input input-bordered max-w-xs focus:outline-none focus:border-green-900" />

                        </div>
                        <button className='btn rounded-none  bg-green-950 text-white hover:bg-green-950 mt-8'>Apply Coupon</button>
                    </div>

                    <h1 className='text-4xl font-bold my-5 pl-0 '>Your Order</h1>
                    <div className='pl-5 md:pl-10 lg:pl-[70px] border-solid border-2  p-5 lg:p-5  lg:w-[600px]'>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>

                                        <th>Product</th>
                                        <th>Total</th>

                                    </tr>

                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>

                                        <td>Top Up T-Shirt x 1</td>
                                        <td>$250.00</td>

                                    </tr>
                                    {/* row 2 */}
                                    <tr>

                                        <td>Polo Shirt x 1</td>
                                        <td>D$100.00</td>

                                    </tr>
                                    {/* row 3 */}
                                    <tr>

                                        <td className='font-bold'>Order Total</td>
                                        <td className='font-bold'>$350.00</td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="collapse border-solid border-2  hover:border-green-900 mb-5">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Direct Bank Transfer
                            </div>
                            <div className="collapse-content">
                                <p>Make your payment directly into our bank account.
                                    Please use your Order ID as the payment reference.
                                    Your order won’t be shipped until the funds have cleared in our account.</p>
                            </div>
                        </div>

                        <div className="collapse border-solid border-2  hover:border-green-900 mb-5">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Cheque Payment
                            </div>
                            <div className="collapse-content">
                                <p>Make your payment directly into our bank account.
                                    Please use your Order ID as the payment reference.
                                    Your order won’t be shipped until the funds have cleared in our account.</p>
                            </div>
                        </div>

                        <div className="collapse border-solid border-2  hover:border-green-900 mb-5">
                            <input type="checkbox" />
                            <div className="collapse-title text-xl font-medium">
                                Paypal
                            </div>
                            <div className="collapse-content">
                                <p>Make your payment directly into our bank account.
                                    Please use your Order ID as the payment reference.
                                    Your order won’t be shipped until the funds have cleared in our account.</p>
                            </div>
                        </div>

                         <Link to={'/order'}><button className='btn rounded-none  bg-green-950 text-white hover:bg-green-950 '>Place Order</button></Link>

                    </div>

                </div>



            </div>

        </div>
    );
};

export default Checkout;