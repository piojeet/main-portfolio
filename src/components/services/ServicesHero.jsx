/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Flag from '../../assets/flag.svg'

function ServicesHero() {
  return (
    <>
 <div className='w-full min-h-[60vh] h-auto border border-blackColor flex items-center justify-center backdrop-blur-sm'>
        <div>
          <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-3'>
            <p className='md:block hidden'>Creative</p>
            <span className='relative flex items-center justify-center'>
              <img src={Flag} alt="" className='w-[5rem]' />
            </span>
            <p className='md:block hidden'>Expertise</p>
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center'>
            <span>
              <span>O</span>
              <span>u</span>
              <span>r</span>
            </span>
            &nbsp;
            <span>
              <span>s</span>
              <span>e</span>
              <span>r</span>
              <span>v</span>
              <span>i</span>
              <span>c</span>
              <span>e</span>
              <span>s</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] px-8 md:px-0'>We're a small but versatile team specialising in digital creativity.</p>
        </div>

      </div>
    </>
  )
}

export default ServicesHero