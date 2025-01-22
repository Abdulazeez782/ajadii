import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from '../constants'

const ProjectsSection = () => {
  return (
    <section id='projects' className='bg-[#90AEAD] px-[1rem] md:px-[5rem] py-[3rem]'>
        <h1 className='text-3xl md:text-5xl text-[#FBE9D0] font-indie py-[3rem]'>Selected Projects</h1>
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {
                projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard 
                            projectImage={project.imgUrl} 
                            liveSite={project.live}
                            github={project.github}
                            projectName={project.label}
                        />   
                    </div>
                ))
            }
           
        </article>
    </section>
  )
}

export default ProjectsSection