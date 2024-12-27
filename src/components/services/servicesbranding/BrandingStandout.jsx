import React, { useRef } from 'react'
import Alertb from '../../../assets/alertb.svg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const BrandingStandout = () => {

  const textbRef = useRef(null);
  useGSAP(() => {
    gsap.from(".lettereb span", {
      y: 110,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textbRef.current,
        start: "0% 80%",
          end: "50% 50%",
      }
    })
  })

  return (
    <>
      <div className='mt-[80px]'>
        <div className='w-[80px] h-[80px] border border-blackColor border-b-0 flex items-center justify-center'>
          <img src={Alertb} alt="" className='w-8' />
        </div>
        <div className='w-full min-h-[40vh] h-auto flex items-center justify-center backdrop-blur-sm border border-blackColor'>
          <div>

            <div className='lg:text-[90px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor' ref={textbRef}>
              <span className='lettereb inline-block overflow-hidden'>
                <span className='inline-block'>s</span>
                <span className='inline-block'>t</span>
                <span className='inline-block'>a</span>
                <span className='inline-block'>n</span>
                <span className='inline-block'>d</span>
              </span>&nbsp;
              <span className='lettereb inline-block overflow-hidden'>
                <span className='inline-block'>o</span>
                <span className='inline-block'>u</span>
                <span className='inline-block'>t</span>
              </span>&nbsp;
              <span className='lettereb inline-block overflow-hidden'>
                <span className='inline-block'>i</span>
                <span className='inline-block'>n</span>
              </span>&nbsp;
              <span className='lettereb inline-block overflow-hidden'>
                <span className='inline-block'>a</span>
              </span>&nbsp;
              <span className='lettereb inline-block overflow-hidden'>
                <span className='inline-block'>s</span>
                <span className='inline-block'>e</span>
                <span className='inline-block'>a</span>
              </span><br />
              <span className='lettereb inline-block overflow-hidden'>
                <span className='inline-block'>o</span>
                <span className='inline-block'>f</span>
              </span>&nbsp;
              <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal lettereb inline-block overflow-hidden'>
                <span className='custom-strok inline-block'>s</span>
                <span className='custom-strok inline-block'>a</span>
                <span className='custom-strok inline-block'>m</span>
                <span className='custom-strok inline-block'>e</span>
                <span className='custom-strok inline-block'>n</span>
                <span className='custom-strok inline-block'>e</span>
                <span className='custom-strok inline-block'>s</span>
                <span className='custom-strok inline-block'>s</span>
              </span>
            </div>

          </div>

        </div>

        <div className='flex lg:flex-row flex-col'>
          <div className='w-full p-6 border border-blackColor border-t-0 lg:border-r-0 h-fit'>
            <p className='lg:text-[32px] md:text-[30px] text-[25px] font-TTCPro text-blackColor font-medium leading-10'>Elevate your brand online with engaging, user-friendly designs that capture attention, build connections, and leave a lasting digital impression</p>
          </div>
          <div className='w-full p-6 border border-blackColor border-t-0'>
            <p className='lg:text-[26px] md:text-[24px] text-[21px] font-TTCPro text-blackColor font-medium leading-9'>I craft unique digital identities that set you apart. From responsive design and interactive visuals to cohesive brand experiences, I bring your core values to life online.</p>
            <p className='lg:text-[21px] md:text-[19px] font-TTCPro text-blackColor font-medium leading-8 mt-8'>As Priyajeet Majhi, I combine creativity with strategy to craft digital experiences that emotionally connect with your audience. By understanding your business goals and challenges, I develop websites that not only stand out in a crowded marketplace but leave a lasting impact.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default BrandingStandout