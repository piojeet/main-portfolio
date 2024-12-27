import React from 'react'
import Paint from '../../../assets/webdesign.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function WebSiteDesignHero() {

    useGSAP(() => {
      gsap.from(".letteresbd span", {
        y: 110,
        duration: 0.3,
        stagger: 0.1,
      })
    })

  return (
    <div className='border border-blackColor p-4'>
        <div className='w-full md:min-h-[60vh] min-h-[40vh] h-auto border border-blackColor flex items-center justify-center backdrop-blur-sm bg-blackColor rounded-lg p-2 py-4'>
        <div>
          <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-3'>
            {/* <p className='md:block hidden'>Creative</p> */}
            <span className='relative flex items-center justify-center'>
              <img src={Paint} alt="" className='lg:w-[4rem] w-12 invert' />
            </span>
            {/* <p className='md:block hidden'>Expertise</p> */}
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-bodyColor'>
          <span className='letteresbd inline-block overflow-hidden'>
              <span className='inline-block relative'>w</span>
              <span className='inline-block relative'>e</span>
              <span className='inline-block relative'>b</span>
              <span className='inline-block relative'>s</span>
              <span className='inline-block relative'>i</span>
              <span className='inline-block relative'>t</span>
              <span className='inline-block relative'>e</span>
            </span>&nbsp;
            <span className='letteresbd inline-block overflow-hidden'>
              <span className='inline-block relative'>d</span>
              <span className='inline-block relative'>e</span>
              <span className='inline-block relative'>s</span>
              <span className='inline-block relative'>i</span>
              <span className='inline-block relative'>g</span>
              <span className='inline-block relative'>n</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] lg:px-8 px-2 md:px-0 text-bodyColor'>I design and develop interactive websites that captivate users and bring ideas to life with clean, efficient code</p>
        </div>

      </div>
        </div>
  )
}

export default WebSiteDesignHero