import React from 'react';
import b1 from '../../../assets/banner/b1.png'

const Banner = () => {
    return (
        <div>
            

            <div className="hero bg-green-950 h-full lg:h-[520px] ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
      <img className='w-[740px] pt-12'  src={b1} alt="" />
    </div>
    <div className="flex-shrink-0 w-full max-w-sm  ">
            <div>
              <h1 className='text-white text-2xl mb-3 lg:text-5xl'>Modern Interior <br/> Design Studio</h1>
              <p className='text-gray-300 py-10'>Donec vitae odio quis nisl dapibus malesuada.
                 Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                  <div className=' '>
                    <button className='btn rounded-none text-white bg-orange-600 hover:bg-orange-700 border-none'>Shop Now</button>
                    <button className='btn rounded-none mx-2 bg-green-950 text-white hover:bg-green-950  '>Explore</button>
                  </div>
            </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default Banner;