import React from 'react'
import HeroImg from '../../assets/project1.webp'
import { NavLink } from 'react-router-dom'
import LinkArrow from '../../assets/link-arrow.svg'

function PersonationOchiHero() {
  return (
    <>
        <div className='w-full h-screen border border-blackColor'>
            <img src={HeroImg} alt="" className='w-full h-full object-cover' />
        </div>

        <NavLink to='/projects' className='group pointer-cursor h-[80px] lg:w-[25%] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor border-t-0 justify-start items-center block relative z-20 ml-auto'>
                {/* Magnetic effect on wrapper div */}
                <div className='magnetic-btn relative w-full h-full'>
                  {/* Hover transition on inner span */}
                  <span
                  className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 bg-bodyColor border group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 inline-flex items-center justify-around'
                  style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                >
                  <span className=''>Go Live</span>
                  <span className='w-6 group-hover:animate-bounce-on'><img src={LinkArrow} alt="" className='w-full' /></span>
                  </span>
              </div>
            </NavLink>
    </>
  )
}

export default PersonationOchiHero