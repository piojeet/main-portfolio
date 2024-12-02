import React from 'react'
import { NavLink } from 'react-router-dom'
import Paint from "../../../assets/paint.svg"

function BrandingGlowUp() {


  return (
    <>
    <div className='min-h-[60vh] h-auto mt-[80px] mb-[10rem]'>
    <div className=''>
        <div className='w-full min-h-[60vh] h-auto border border-blackColor flex items-center justify-center backdrop-blur-sm bg-blackColor px-2'>
        <div>
          <div><img src={Paint} alt="IMG" className='lg:w-20 w-16 block mx-auto invert' /></div>

          <div className='lg:text-[61px] sm:text-[40px] text-[10vw] font-TTCPro text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-bodyColor font-semibold'>
            <span>
              <span>L</span>
              <span>o</span>
              <span>o</span>
              <span>k</span>
              <span>i</span>
              <span>n</span>
              <span>g</span>
            </span>&nbsp;
            <span>
              <span>f</span>
              <span>o</span>
              <span>r</span>
            </span>&nbsp;
            <span>
              <span>a</span>
            </span>&nbsp;
            <span>
              <span>b</span>
              <span>r</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
            </span>&nbsp;
            <span>
              <span>g</span>
              <span>l</span>
              <span>o</span>
              <span>w</span>
            </span>&nbsp;
            <span>
              <span>u</span>
              <span>p</span>
              <span>?</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] px-8 md:px-0 text-bodyColor'>Let’s work together!</p>
        </div>

      </div>

      <NavLink to="/contact" className='group pointer-cursor h-[80px] md:w-[45vw] w-full flex-shrink-0 border border-blackColor bg-blackColor flex justify-start items-center border-t-0 lg:mx-auto md:ml-auto'>
                            <div className='magnetic-btn relative w-full h-full'>
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[17px] md:text-[16px] tracking-[2px] inline-block font-bold content-center'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='text-center w-full block uppercase font-TTCPro'>send us a message</span>
                                </span>
                            </div>
                        </NavLink>
        </div>
    </div>
    </>
  )
}

export default BrandingGlowUp