import React from 'react'
import Alertb from '../../../assets/alertb.svg'

function WebDesignStandout() {
  return (
    <>
      <div className='mt-[80px]'>
        <div className='w-[80px] h-[80px] border border-blackColor border-b-0 flex items-center justify-center'>
          <img src={Alertb} alt="" className='w-8' />
        </div>
        <div className='w-full min-h-[40vh] h-auto flex items-center justify-center backdrop-blur-sm border border-blackColor'>
          <div>

            <div className='lg:text-[90px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor'>
              <span>
                <span>d</span>
                <span>e</span>
                <span>s</span>
                <span>i</span>
                <span>g</span>
                <span>n</span>
              </span>&nbsp;
              <span>
                <span>y</span>
                <span>o</span>
                <span>u</span>
                <span>r</span>
              </span><br />

              <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal'>
                <span className='custom-strok'>d</span>
                <span className='custom-strok'>r</span>
                <span className='custom-strok'>e</span>
                <span className='custom-strok'>a</span>
                <span className='custom-strok'>m</span>
              </span>&nbsp;
              <span>
                <span>w</span>
                <span>e</span>
                <span>b</span>
                <span>s</span>
                <span>i</span>
                <span>t</span>
                <span>e</span>
              </span>
            </div>

          </div>

        </div>

        <div className='flex lg:flex-row flex-col'>
          <div className='w-full p-6 border border-blackColor border-t-0 lg:border-r-0 h-fit'>
            <p className='lg:text-[32px] md:text-[30px] text-[25px] font-TTCPro text-blackColor font-medium leading-10'>Your dream website isn’t just about design—it’s about creating an online platform that elevates your brand’s identity, engages your audience, and leaves a lasting impression.</p>
          </div>
          <div className='w-full p-6 border border-blackColor border-t-0'>
            <p className='lg:text-[26px] md:text-[24px] text-[21px] font-TTCPro text-blackColor font-medium leading-9'>Websites today cater to diverse needs—whether it's interactive experiences, promotional campaign sites, powerful web applications, elegant brochure-style pages, or seamless eCommerce platforms.</p>
            <p className='lg:text-[21px] md:text-[19px] font-TTCPro text-blackColor font-medium leading-8 mt-8'>With years of expertise in web design and development, we combine a robust tech stack with a user-first approach. Our focus is on creating websites that are as functional as they are visually appealing, delivering seamless experiences without compromising on style or performance.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default WebDesignStandout