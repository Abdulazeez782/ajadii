import React, { useState } from 'react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { navMenu } from '../constants'
import { motion } from 'motion/react'

const Nav = () => {
    const [sideBar, setSideBar] = useState(false);
    const openSideBar = () => {        
        setSideBar(true);
    }
    const closeSideBar = () => {
        setSideBar(false);
    }

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
            },
        },
    }
  return (
    <section 
        className='px-[1rem] py-[1.5rem] lg:px-[3rem] flex justify-between items-center gap-5 bg-[#244855] text-[#E64833]'
    >
        <a 
            href='/'
            className='text-3xl'
        >
            <h1>AJADII</h1>
        </a>

        <nav 
            className='hidden md:block'
        >
            <div className='flex gap-4'>
                {navMenu.map((menu, index) => (
                    <a
                        key={index}
                    >
                        {menu.label}
                    </a>
                ))}
            </div>
        </nav>

        <motion.nav
            initial="closed"
            animate={sideBar ? "open" : "closed"}
            variants={sidebarVariants}
            className={`${(sideBar) ? "block" : "hidden"} fixed top-0 right-0 bg-[#244855] w-[100%] h-[100vh] p-5`}
        >
            <XMarkIcon className='h-[6rem] w-[5rem] mb-5' onClick={closeSideBar}/>
            <div className='flex flex-col gap-4'>
                {navMenu.map((menu, index) => (
                    <a
                        key={index}
                    >
                        {menu.label}
                    </a>
                ))}
            </div>
        </motion.nav>

        <div
            onClick={openSideBar}
            className={`${(sideBar) ? "hidden" : "block"}`}
        >
            <Bars2Icon className='h-[2rem] w-[2rem] block md:hidden'/>
        </div>

        <h1 className='hidden md:block'>Time</h1>
    </section>
  )
}

export default Nav