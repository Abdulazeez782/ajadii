import React from 'react'
import heroImage from '../assets/images/coding-5-64.svg'

const Hero = () => {
  return (
    <section className='bg-[#FBE9D0] px-[1rem] md:px-[5rem] h-[100vh] flex flex-col-reverse md:flex-row items-center gap-4 mb-[5rem]'>
        <article className='w-full md:w-[50%]'>
          <h1>Hi, I am <span className='text-5xl text-[#E64833] font-indie'>Ajadi!</span> </h1> 
          <p>I am a Creative Frontend Developer and passionate Freelance Model. Whether it's designing a seamless user interface or bringing a brand's vision to live in front of the camera, i thrive on transforming ideas into reality.</p> 
        </article>
        
        <article className='w-full md:w-[50%]'>
            <img src={heroImage} alt='hero-image' width={500} height={500}/>
        </article>
    </section>
  )
}

export default Hero