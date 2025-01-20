import React from 'react'
import heroImage from '../assets/images/coding-5-64.svg'

const Hero = () => {
  return (
    <section className='px-[5rem] flex items-center gap-4'>
        <article className='w-[50%]'>
          <h1>Hi, I am <span className='text-5xl text-[#E64833] font-indie ml-[5px]'>Ajadi!</span> </h1> 
          <p>I am a Creative Frontend Developer and passionate Freelance Model. Whether it's designing a seamless user interface or bringing a brand's vision to live in front of the camera, i thrive on transforming ideas into reality.</p> 
        </article>
        
        <article className='w-[505]'>
            <img src={heroImage} alt='hero-image' width={500} height={500}/>
        </article>
    </section>
  )
}

export default Hero