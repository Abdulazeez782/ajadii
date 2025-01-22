import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { techStack } from '../constants';
import { Autoplay } from 'swiper/modules';

const TechStack = () => {
  return (
    <section className='text-center px-[1rem] md:px-[5rem] py-[3rem]'>
        <h1 className='text-3xl md:text-5xl text-[#E64833] font-indie mb-16'>Technologies I use proficiently</h1>
        <Swiper
            modules={[Autoplay]}
            navigation
            autoplay={{delay: 1000}}
            slidesPerView={2}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                }            
            }}
            className='flex items-center justify-center'
        >
            {
                techStack.map((stack, index) => (
                    <SwiperSlide key={index}><img src={stack.imgUrl} width={150} height={150}/></SwiperSlide>
                ))
            }
        </Swiper>        
    </section>
  )
}

export default TechStack