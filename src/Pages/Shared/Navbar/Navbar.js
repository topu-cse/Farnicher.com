import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-green-950 text-gray-400  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900  w-52">
        <li ><Link to={'/'} className='hover:text-white'>Home</Link></li>
        <li>
          <Link to={'/shop'} className='hover:text-white'>Shop</Link>
          
        </li>
        <li ><Link to={'/service'} className='hover:text-white'>Service</Link></li>
      </ul>
    </div>
    <Link  className="btn btn-ghost normal-case text-xl hover:text-white">FARNI.</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
      <li><Link to={'/'} className='hover:text-white px-2'>Home</Link></li>
       <li><Link to={'/shop'} className='hover:text-white px-2'>Shop</Link></li>
       <li ><Link to={'/service'} className='hover:text-white px-2'>Service</Link></li>
    </ul>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
           <Link to={'/cart'}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></Link>
          
        </div>
      </label>
  
    </div>
    <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className=" rounded-full">
        <CgProfile size={30}/>
        </div>
      </label>
      <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-green-900 ">
        <li  >
          <Link  className="justify-between hover:text-white">
            Profile
            
          </Link>
        </li>
        
        <li ><Link className='hover:text-white'>Sign In</Link></li>
      </ul>
    </div>
    </div>
  </div>
  </div>

       
    );
};

export default Navbar;