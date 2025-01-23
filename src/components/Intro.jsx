import React from 'react'
import { Link } from 'react-router-dom'
import { portfolioImage1 } from '../assets/images'

const Intro = () => {
  return (
    <section className='flex flex-col-reverse items-center justify-between md:flex-row gap-5 px-[1rem] md:px-[5rem] py-[3rem]'>
        <article className='w-full md:w-[60%] '>
            <h1 className='text-3xl border-b-[5px] border-[#244855] w-[140px] mb-5'>About Me</h1>
            <p className='text-5xl text-[#E64833] font-indie'>
                Hello!
            </p>
            <p>I'm Ajadi. A multifaceted individual, i have a few passions that drive me. I'm a frontend developer, dedicated to crafting intuitive and visually stunning interfaces for websites and web applications. I'm also a model, who loves being in front of the camera and helping brands bring their vision to life. And when i'm not working on a codebase or posing for a shoot, you can find me in the gym where i'm focused on building not just a strong physic but a resilient mind and a consistent work ethic. I am passionate about continuous improvement and injecting creativity into every aspect of my life. If you're looking for a partner who can bring a unique blend of technical expertise, charisma and dedication to your brand, kindly reach out <Link to="/#footer" className='cursor-pointer border-b-[2px] border-[#244855] text-[#E64833]'>Here</Link></p>
        </article>

        <article className='w-full md:w-[40%]'>
            <img src={portfolioImage1} alt='polaroid' className='w-[350px] h-[500px]'/>
        </article>
    </section>
  )
}

export default Intro