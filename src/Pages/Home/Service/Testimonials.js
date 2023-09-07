import React from 'react';
import Slider from 'react-slick';
 
import img from '../../../assets/explore/i.jpg'

const Testimonials = () => {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      };
    return (
        <div>
            <div className='text-center font-bold text-4xl mt-[40px]'>Testimonials</div>
                   <div className=' my-[50px]  text-center'>
       
        <Slider {...settings}>
          <div>
            <div  className='lg:w-[700px] text-center lg:ml-[300px] px-4'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</div>
            <img className='h-[100px] mx-auto mt-4 rounded-full' src={img} alt='' />
            <div>
                <p className='font-bold my-2'>Maria Jones</p>
                <p className='text-gray-400'>CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>

          <div>
            <div  className='lg:w-[700px] text-center lg:ml-[300px] px-4'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</div>
            <img className='h-[100px] mx-auto mt-4 rounded-full' src={img} alt='' />
            <div>
                <p className='font-bold my-2'>Maria Jones</p>
                <p className='text-gray-400'>CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>
          <div>
            <div  className='lg:w-[700px] text-center lg:ml-[300px] px-4'>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                 Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</div>
            <img className='h-[100px] mx-auto mt-4 rounded-full' src={img} alt='' />
            <div>
                <p className='font-bold my-2'>Maria Jones</p>
                <p className='text-gray-400'>CEO, Co-Founder, XYZ Inc.</p>
            </div>
          </div>
          
        </Slider>
      </div>
        </div>
    );
};

export default Testimonials;