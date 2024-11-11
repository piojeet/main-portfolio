import React from 'react'
import Alertb from '../../../assets/alertb.svg'

const BrandingStandout = () => {
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
                <span>s</span>
                <span>t</span>
                <span>a</span>
                <span>n</span>
                <span>d</span>
              </span>&nbsp;
              <span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
              </span>&nbsp;
              <span>
                <span>i</span>
                <span>n</span>
              </span>&nbsp;
              <span>
                <span>a</span>
              </span>
              <span>
                <span>s</span>
                <span>e</span>
                <span>a</span>
              </span><br />
              <span>
                <span>o</span>
                <span>f</span>
              </span>&nbsp;
              <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal'>
                <span className='custom-strok'>s</span>
                <span className='custom-strok'>a</span>
                <span className='custom-strok'>m</span>
                <span className='custom-strok'>e</span>
                <span className='custom-strok'>n</span>
                <span className='custom-strok'>e</span>
                <span className='custom-strok'>s</span>
                <span className='custom-strok'>s</span>
              </span>
            </div>

          </div>

        </div>

<div className='flex'>
  <div className='w-full p-6 border border-blackColor border-t-0 border-r-0 h-fit'>
    <p className='text-[32px] font-TTCPro text-blackColor font-medium leading-10'>Elevate your brand online with engaging, user-friendly designs that capture attention, build connections, and leave a lasting digital impression</p>
  </div>
  <div className='w-full p-6 border border-blackColor border-t-0'>
    <p className='text-[26px] font-TTCPro text-blackColor font-medium leading-9'>I craft unique digital identities that set you apart. From responsive design and interactive visuals to cohesive brand experiences, I bring your core values to life online.</p>
    <p className='text-[21px] font-TTCPro text-blackColor font-medium leading-8 mt-8'>As Priyajeet Majhi, I combine creativity with strategy to craft digital experiences that emotionally connect with your audience. By understanding your business goals and challenges, I develop websites that not only stand out in a crowded marketplace but leave a lasting impact.</p>
  </div>
</div>

      </div>
    </>
  )
}

export default BrandingStandout