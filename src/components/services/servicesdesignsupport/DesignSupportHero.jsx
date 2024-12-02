import React from 'react'
import Paint from '../../../assets/webdesign.svg';

function DesignSupportHero() {
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
              <span>
                  <span>d</span>
                  <span>e</span>
                  <span>s</span>
                  <span>i</span>
                  <span>g</span>
                  <span>n</span>
                </span>&nbsp;
                <span>
                  <span>s</span>
                  <span>u</span>
                  <span>p</span>
                  <span>p</span>
                  <span>o</span>
                  <span>r</span>
                  <span>t</span>
                </span>
              </div>
    
              <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] lg:px-8 px-2 md:px-0 text-bodyColor'>Think of me as your dedicated design expert, here to support all your creative needs.</p>
            </div>
    
          </div>
            </div>
      
  )
}

export default DesignSupportHero