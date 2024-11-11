/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Paint from '../../../assets/paint.svg';

const BrandingHero = () => {
  return (
    <>
        <div className='border border-blackColor p-4'>
        <div className='w-full min-h-[60vh] h-auto border border-blackColor flex items-center justify-center backdrop-blur-sm bg-blackColor rounded-lg'>
        <div>
          <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-3'>
            {/* <p className='md:block hidden'>Creative</p> */}
            <span className='relative flex items-center justify-center'>
              <img src={Paint} alt="" className='w-[4rem] invert' />
            </span>
            {/* <p className='md:block hidden'>Expertise</p> */}
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-bodyColor'>
            <span>
              <span>b</span>
              <span>r</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] px-8 md:px-0 text-bodyColor'>Transforming brand visions into dynamic, responsive websites that captivate users with clean, impactful front-end development</p>
        </div>

      </div>
        </div>
    </>
  )
}

export default BrandingHero