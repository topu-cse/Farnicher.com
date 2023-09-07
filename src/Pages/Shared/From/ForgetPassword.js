import React from 'react';

const ForgetPassword = () => {
    return (
        <div>
            <div className='w-full mx-auto  top-0 flex justify-center items-center h-[300px] bg-green-950'>
                <h1 className='text-white text-[50px]'>Forget Password</h1>
            </div>

            <div className='bg-base-200'>
            <div className="w-full max-w-xs mx-auto py-10">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-6">Forgot Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            
            required
          />
           <label className="block text-gray-700 text-sm font-bold my-2" htmlFor="email">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="email"
            placeholder="New password"
            
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
            </div>
        </div>
    );
};

export default ForgetPassword;