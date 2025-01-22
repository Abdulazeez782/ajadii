import React, { useState } from 'react'

const ProjectCard = ({projectImage, liveSite, github, projectName}) => {
    const [mouseOver, setMouseOver] = useState(false);
    
  return (
    <div className='bg-[#244855] rounded-lg'>
        <div 
            className='border-[1px] border-[#E64833] relative rounded-t-lg cursor-pointer overflow-hidden'   
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            onClick={() => setMouseOver(true)}  
        >
           <img 
                src={projectImage} 
                alt='' 
                width={1000} 
                height={1000} 
                className={`rounded-t-lg ${(mouseOver) ? "opacity-50 scale-[1.1]" : ""} transition-transform duration-500 ease-in-out`}/> 
           <div className={`${(mouseOver) ? "block" : "hidden"}`}>
                <a 
                    href={github}
                    target='_blank'
                    className='absolute bottom-3 bg-[#244855] text-[#E64833] p-2'           
                >
                    Github Repo
                </a>  

                <a 
                    href={liveSite}
                    target='_blank'
                    className='absolute bottom-3 right-0 bg-[#244855] text-[#E64833] p-2'
                >
                    Live Site
                </a>
           </div>           
        </div>
        
        <h1 className='text-[#E64833] p-4 lowercase'>{projectName}</h1>
    </div>
  )
}

export default ProjectCard