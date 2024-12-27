import React from 'react'
import Paint from '../../../assets/webdesign.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function DesignSupportHero() {

  useGSAP(()=> {
    gsap.from(".lettersd span", {
      y: 100,
      duration: 0.5,
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
              <span className='lettersd inline-block overflow-hidden'>
                  <span className='inline-block relative'>d</span>
                  <span className='inline-block relative'>e</span>
                  <span className='inline-block relative'>s</span>
                  <span className='inline-block relative'>i</span>
                  <span className='inline-block relative'>g</span>
                  <span className='inline-block relative'>n</span>
                </span>&nbsp;
                <span className='lettersd inline-block overflow-hidden'>
                  <span className='inline-block relative'>s</span>
                  <span className='inline-block relative'>u</span>
                  <span className='inline-block relative'>p</span>
                  <span className='inline-block relative'>p</span>
                  <span className='inline-block relative'>o</span>
                  <span className='inline-block relative'>r</span>
                  <span className='inline-block relative'>t</span>
                </span>
              </div>
    
              <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] lg:px-8 px-2 md:px-0 text-bodyColor'>Think of me as your dedicated design expert, here to support all your creative needs.</p>
            </div>
    
          </div>
            </div>
      
  )
}

export default DesignSupportHero