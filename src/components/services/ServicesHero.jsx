/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Flag from '../../assets/flag.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function ServicesHero() {

  useGSAP(()=> {
    gsap.from(".letters span", {
      y: 100,
      duration: 0.5,
      stagger: 0.1,
    })
  })

  return (
    <>
 <div className='w-full md:min-h-[60vh] min-h-[40vh] p-2 h-auto border border-blackColor flex items-center justify-center backdrop-blur-sm'>
        <div>
          <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-3'>
            <p className='md:block hidden'>Creative</p>
            <span className='relative md:flex items-center justify-center hidden'>
              <img src={Flag} alt="" className='w-[5rem]' />
            </span>
            <p className='md:block hidden'>Expertise</p>
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center'>
            <span className='letters inline-block overflow-hidden'>
              <span className='relative inline-block'>O</span>
              <span className='relative inline-block'>u</span>
              <span className='relative inline-block'>r</span>
            </span>
            &nbsp;
            <span className='letters relative inline-block overflow-hidden'>
              <span className='relative inline-block'>s</span>
              <span className='relative inline-block'>e</span>
              <span className='relative inline-block'>r</span>
              <span className='relative inline-block'>v</span>
              <span className='relative inline-block'>i</span>
              <span className='relative inline-block'>c</span>
              <span className='relative inline-block'>e</span>
              <span className='relative inline-block'>s</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] lg:px-8 px-2 md:px-0'>We're a small but versatile team specialising in digital creativity.</p>
        </div>

      </div>
    </>
  )
}

export default ServicesHero