import React from 'react'
import { socialIcons } from '../constants'

const Footer = () => {
  return (
    <footer id='footer' className='px-[1rem] py-[1.5rem] lg:px-[3rem] bg-[#244855] text-[#E64833]'>
        <h1 className='text-3xl md:text-5xl text-[#E64833] font-indie mb-16 text-center'>Let's get in touch!</h1>
        <div className='flex items-center justify-center gap-5'>
            {
                socialIcons.map((icon, index) => (
                    <a 
                        href={icon.href}
                        target='_blank'
                        key={index}
                        className='cursor-pointer hover:scale-[1.3] transition-transform duration-500 ease-in-out'
                    >
                        <img src={icon.imgUrl} width={40}/>
                    </a>
                ))
            }
        </div>
    </footer>
  )
}

export default Footer