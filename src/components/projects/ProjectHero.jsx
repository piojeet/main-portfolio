import React from 'react'
import Project from '../../assets/projecthero.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function ProjectHero() {

    useGSAP(()=> {
        gsap.from(".letter span", {
          y: 100,
          duration: 0.5,
          stagger: 0.1,
        })
      })

    return (
        <>
            <div>
                <div className='w-full md:min-h-[60vh] h-auto min-h-[70vh] border border-blackColor flex items-center justify-center'>
                    <div>
                        <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-6'>
                            <p className='md:block hidden'>project</p>
                            <span className='relative flex items-center justify-center'>
                                <img src={Project} alt="" className='w-[5rem]' />
                            </span>
                            <p className='md:block hidden'>Showcase</p>
                        </div>

                        <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center'>

                            &nbsp;
                            <span className='letter overflow-hidden inline-block'>
                                <span className='inline-block'>y</span>
                                <span className='inline-block'>o</span>
                                <span className='inline-block'>u</span>
                                <span className='inline-block'>r</span>
                            </span>
                            &nbsp;
                            <span className='letter overflow-hidden inline-block'>
                                <span className='inline-block'>w</span>
                                <span className='inline-block'>o</span>
                                <span className='inline-block'>r</span>
                                <span className='inline-block'>k</span>
                            </span>
                            <br />

                        </div>

                        <p className='md:text-[26px] font-TTCPro font-medium max-w-[500px] w-full m-auto text-center text-[20px] px-8 md:px-0'>Creative solutions for modern brands</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectHero