import React, { useEffect, useRef, useState } from 'react'
import Star from '../assets/starg.svg'
import RightArrow from '../assets/right-arrow.svg'
import { useLocation } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from '@gsap/react';


function Expertic() {



  const location = useLocation()

  const textRef = useRef(null);
  useGSAP(() => {
    gsap.from(".lettere span", {
      y: 110,
      duration: 0.4,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "0% 80%",
          end: "50% 50%",
      }
    })
  })


  return (
    <>
      <div className='md:flex items-center justify-between lg:min-h-[80vh] md:min-h-[60vh] content-center flex-col lg:flex-row py-12'>
        <div ref={textRef} className='flex-1 pl-4'>
          {location.pathname !== '/services' && (
            <h2 className='uppercase font-TTCPro font-[900] text-blackColor xl:text-[95px] lg:text-[84px] sm:text-[63px] text-[10vw]'>
              <span ref={textRef} className='lettere inline-block overflow-hidden'>
                <span className='inline-block'>E</span>
                <span className='inline-block'>x</span>
                <span className='inline-block'>p</span>
                <span className='inline-block'>e</span>
                <span className='inline-block'>r</span>
                <span className='inline-block'>t</span>
                <span className='inline-block'>i</span>
                <span className='inline-block'>s</span>
                <span className='inline-block'>e</span>
              </span>
            </h2>
          )}

          {location.pathname === "/services" && (
            <h2 className='uppercase font-TTCPro font-[900] text-blackColor xl:text-[95px] lg:text-[84px] sm:text-[63px] text-[10vw] leading-none mb-4'>
              <span className='lettere inline-block overflow-hidden'>
                <span className='inline-block'>w</span>
                <span className='inline-block'>h</span>
                <span className='inline-block'>a</span>
                <span className='inline-block'>t</span>
              </span>
              &nbsp;
              <span className='lettere inline-block overflow-hidden'>
                <span className='inline-block'>a</span>
                <span className='inline-block'>r</span>
                <span className='inline-block'>e</span>
              </span>
              &nbsp;
              <span className='lettere inline-block overflow-hidden'>
                <span className='inline-block'>y</span>
                <span className='inline-block'>o</span>
                <span className='inline-block'>u</span>
              </span><br />
              <span className='inline-block lettere overflow-hidden'>
                <span className='inline-block'>l</span>
                <span className='inline-block'>o</span>
                <span className='inline-block'>o</span>
                <span className='inline-block'>k</span>
                <span className='inline-block'>i</span>
                <span className='inline-block'>n</span>
                <span className='inline-block'>g</span>
              </span>
              &nbsp;
              <span className='inline-block lettere overflow-hidden'>
                <span className='inline-block'>f</span>
                <span className='inline-block'>o</span>
                <span className='inline-block'>r</span>
                <span className='inline-block'>?</span>
              </span>
            </h2>
          )}

          <p className='lg:text-[26px] md:text-[24px] font-TTCPro font-medium max-w-[40ch] w-full'>Physical, digital, meta-physical – We’ll find a creative solution for all your business problems</p>
        </div>

        {location.pathname !== '/services' && (
          <div className='md:flex-1 md:inline-flex md:justify-end pt-8 sm:w-full lg:w-fit w-full'>
            <div className='md:flex items-start lg:justify-between sm:justify-end lg:h-[240px]'>
              <span className='lg:block hidden'></span>
              <div className='group pointer-cursor md:h-[80px] h-[70px] lg:w-[22.5vw] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor inline-flex justify-start items-center w-full'>
                {/* Magnetic effect on wrapper div */}
                <div className='magnetic-btn relative w-full h-full'>
                  {/* Hover transition on inner span */}
                  <span
                    className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 group-hover:border lg:group-hover:border-blackColor bg-bodyColor font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-semibold content-center transition-all duration-500'
                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                  >
                    <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
                    <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12 font-bold'>View services</span>
                    <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={Star} alt="" className='w-8' /></span>
                  </span>
                </div>
              </div>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Expertic