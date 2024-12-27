/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import Alertb from '../../../assets/alertb.svg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function DesignSupportStandout() {

  const textbsRef = useRef(null);
  useGSAP(() => {
    gsap.from(".letterebs span", {
      y: 110,
      duration: 0.3,
      stagger: 0.1,
      scrollTrigger: {
        trigger: textbsRef.current,
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

            <div className='lg:text-[90px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor'>
              <span className='letterebs inline-block overflow-hidden'>
                <span className='inline-block relative'>y</span>
                <span className='inline-block relative'>o</span>
                <span className='inline-block relative'>u</span>
                <span className='inline-block relative'>r</span>&nbsp;
                <span className='inline-block relative'>n</span>
                <span className='inline-block relative'>e</span>
                <span className='inline-block relative'>w</span>
              </span>&nbsp;
              <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal letterebs inline-block overflow-hidden'>
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
              </span><br />
              <span className='letterebs inline-block overflow-hidden'>
                <span className='inline-block relative'>p</span>
                <span className='inline-block relative'>a</span>
                <span className='inline-block relative'>r</span>
                <span className='inline-block relative'>t</span>
                <span className='inline-block relative'>n</span>
                <span className='inline-block relative'>e</span>
                <span className='inline-block relative'>r</span>
              </span>&nbsp;

              
              
            </div>

          </div>

        </div>

        <div className='flex lg:flex-row flex-col'>
          <div className='w-full p-6 border border-blackColor border-t-0 lg:border-r-0 h-fit'>
            <p className='lg:text-[32px] md:text-[30px] text-[25px] font-TTCPro text-blackColor font-medium leading-10'>Great design empowers great businesses. Let me handle your design needs, so you can focus on what you do best with confidence.</p>
          </div>
          <div className='w-full p-6 border border-blackColor border-t-0'>
            <p className='lg:text-[26px] md:text-[24px] text-[21px] font-TTCPro text-blackColor font-medium leading-9'>From social content creation to detailed design consultations—whether it's an ongoing project, a single presentation, or a complete redesign, I’m here to provide dedicated support tailored to your needs. Think of me as your go-to design partner, focused on simplifying your creative process and delivering high-quality results.</p>
            <p className='lg:text-[21px] md:text-[19px] font-TTCPro text-blackColor font-medium leading-8 mt-8'>As a solo professional, I bring a versatile skill set that adapts to your business as it grows and evolves. Whether you need assistance on a project-by-project basis or someone to seamlessly integrate into your workflow, I’m committed to ensuring your creative requirements are met with precision and care. Together, we’ll create designs that not only meet your expectations but also elevate your brand’s identity.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default DesignSupportStandout