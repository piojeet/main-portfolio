import React, { useEffect, useRef, useState } from 'react'
import Glob from '../assets/glob.svg'
import GlobC from '../assets/globc.svg'
import Start from '../assets/starg.svg'
import RightArrow from '../assets/right-arrow.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { NavLink } from 'react-router-dom'


function HomeHero() {




  
  useGSAP(()=> {
    gsap.from(".letter span", {
      y: 100,
      duration: 0.5,
      stagger: 0.1,
    })
  })

  return (
    <>
      <div className='w-full md:h-[87vh] h-auto min-h-[70vh] border border-blackColor flex items-center justify-center backdrop-blur-sm'>
        <div>
          <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-6'>
            <p className='md:block hidden'>Creative services</p>
            <span className='relative flex items-center justify-center'>
              <img src={Glob} alt="" className='w-[3rem]' />
              <img src={GlobC} alt="" className='w-3 h-3 aspect-square absolute animate-spiner origin-center' />
            </span>
            <p className='md:block hidden'>for modern brands</p>
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center'>
            <span className='letter inline-block overflow-hidden'>
              <span className='inline-block'>W</span>
              <span className='inline-block'>e</span>
            </span>
            &nbsp;
            <span className='letter inline-block overflow-hidden'>
              <span className='inline-block'>b</span>
              <span className='inline-block'>u</span>
              <span className='inline-block'>i</span>
              <span className='inline-block'>l</span>
              <span className='inline-block'>d</span>
            </span>
            &nbsp;
            <span className='letter inline-block overflow-hidden'>
              <span className='inline-block'>b</span>
              <span className='inline-block'>r</span>
              <span className='inline-block'>a</span>
              <span className='inline-block'>n</span>
              <span className='inline-block'>d</span>
              <span className='inline-block'>s</span>
            </span> &nbsp;
             <br />
            <span className='letter inline-block overflow-hidden'>
              <span className='inline-block'>t</span>
              <span className='inline-block'>h</span>
              <span className='inline-block'>a</span>
              <span className='inline-block'>t</span>
            </span>
            &nbsp;
            <span className='letter inline-block overflow-hidden text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal'>
              <span className='custom-strok inline-block'>s</span>
              <span className='custom-strok inline-block'>t</span>
              <span className='custom-strok inline-block'>a</span>
              <span className='custom-strok inline-block'>n</span>
              <span className='custom-strok inline-block'>d</span>
            </span>
            &nbsp;
            <span className='letter inline-block overflow-hidden'>
              <span className='inline-block'>o</span>
              <span className='inline-block'>u</span>
              <span className='inline-block'>t</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[500px] w-full m-auto text-center text-[20px] px-8 md:px-0'>Priyajeet is a digital-first creative studio bringing brands to life online and IRL</p>
        </div>

      </div>
      <div className='flex items-start lg:justify-between sm:justify-end lg:h-[240px] sm:h-[150px] mb-12 md:mb-0'>
        <span className='lg:block sm:hidden'></span>
        <NavLink to="/projects" className='group pointer-cursor md:h-[80px] h-[70px] lg:w-[22.5vw] sm:w-[45vw] w-full flex-shrink-0 border border-blackColor border-t-0 bg-blackColor flex justify-start items-center'>
          {/* Magnetic effect on wrapper div */}
          <div className='magnetic-btn relative w-full h-full'>
            {/* Hover transition on inner span */}
            <span
              className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-semibold content-center transition-all duration-500'
              style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
            >
              <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
              <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12'>View Our Work</span>
              <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={Start} alt="" className='w-8' /></span>
            </span>
          </div>
        </NavLink>
        <span></span>
        <span></span>
      </div>



    </>
  )
}

export default HomeHero