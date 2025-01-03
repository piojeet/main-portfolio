/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import Alertb from '../../../assets/alertb.svg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function FrontEndStandout() {

  const texteRef = useRef(null);
    useGSAP(() => {
      gsap.from(".letterese span", {
        y: 110,
        duration: 0.3,
        stagger: 0.05,
        scrollTrigger: {
          trigger: texteRef.current,
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

            <div className='lg:text-[90px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor' ref={texteRef}>
              <span className='letterese inline-block overflow-hidden'>
                <span className='inline-block relative'>f</span>
                <span className='inline-block relative'>u</span>
                <span className='inline-block relative'>n</span>
                <span className='inline-block relative'>c</span>
                <span className='inline-block relative'>t</span>
                <span className='inline-block relative'>i</span>
                <span className='inline-block relative'>o</span>
                <span className='inline-block relative'>n</span>
                <span className='inline-block relative'>a</span>
                <span className='inline-block relative'>l</span>
                <span className='inline-block relative'>i</span>
                <span className='inline-block relative'>t</span>
                <span className='inline-block relative'>y</span>
              </span><br />
              <span className='letterese inline-block overflow-hidden'>
                <span className='inline-block relative'>f</span>
                <span className='inline-block relative'>u</span>
                <span className='inline-block relative'>s</span>
                <span className='inline-block relative'>e</span>
                <span className='inline-block relative'>d</span>
              </span>&nbsp;

              <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal letterese inline-block overflow-hidden'>
                <span className='custom-strok inline-block relative'>c</span>
                <span className='custom-strok inline-block relative'>r</span>
                <span className='custom-strok inline-block relative'>e</span>
                <span className='custom-strok inline-block relative'>a</span>
                <span className='custom-strok inline-block relative'>t</span>
                <span className='custom-strok inline-block relative'>i</span>
                <span className='custom-strok inline-block relative'>v</span>
                <span className='custom-strok inline-block relative'>i</span>
                <span className='custom-strok inline-block relative'>t</span>
                <span className='custom-strok inline-block relative'>y</span>
              </span>
              
            </div>

          </div>

        </div>

        <div className='flex lg:flex-row flex-col'>
          <div className='w-full p-6 border border-blackColor border-t-0 lg:border-r-0 h-fit'>
            <p className='lg:text-[32px] md:text-[30px] text-[25px] font-TTCPro text-blackColor font-medium leading-10'>I turn complex ideas into intuitive, user-friendly interfaces that captivate users and help businesses grow.</p>
          </div>
          <div className='w-full p-6 border border-blackColor border-t-0'>
            <p className='lg:text-[26px] md:text-[24px] text-[21px] font-TTCPro text-blackColor font-medium leading-9'>As a frontend developer, I help bring your product vision to life by designing intuitive, beautiful, and functional user interfaces.</p>
            <p className='lg:text-[21px] md:text-[19px] font-TTCPro text-blackColor font-medium leading-8 mt-8'>With extensive experience in frontend development, I specialize in creating intuitive interfaces, enhancing usability, and designing seamless user experiences. Whether it's building new features or refining existing ones, I’m here to bring your vision to life.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default FrontEndStandout