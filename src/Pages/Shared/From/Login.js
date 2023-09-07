import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>Login</h1>
            </div>
            <div className='bg-base-200'>
                <div className="w-full max-w-xs mx-auto py-10 ">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl font-semibold mb-6">Login</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="username"
                                type="text"
                                placeholder="Your Username"

                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Your Password"

                                required
                            />
                        </div>
                        <div>
                            <p>DO not Sign up? <Link to='/signup' className='text-gray-400'>Please Sign Up</Link></p>
                            <Link to="/forgetpasswold" className='text-gray-400'>Forget Password?</Link>
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <button
                                className="bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;