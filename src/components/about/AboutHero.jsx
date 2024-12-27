import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function AboutHero() {

  useGSAP(()=> {
    gsap.from(".letter span", {
      y: 100,
      duration: 0.3,
      stagger: 0.05,
    })
  })

  return (
    <div>
        <div>
        <div className='w-full md:h-[87vh] h-auto min-h-[70vh] border border-blackColor flex items-center justify-center backdrop-blur-sm py-12'>
        <div>
          <div className='md:flex hidden items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-6'>
            <p className='md:block hidden'>Designers</p>
            <span className='relative flex items-center justify-center text-[60px] font-thin'>
              &
            </span>
            <p className='md:block hidden'>Developers</p>
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center overflow-hidden'>
            <span className='letter text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal pl-5 overflow-hidden inline-block'>
              <span className='custom-strok inline-block'>F</span>
              <span className='custom-strok inline-block'>r</span>
              <span className='custom-strok inline-block'>o</span>
              <span className='custom-strok inline-block'>n</span>
              <span className='custom-strok inline-block'>t</span>
              <span className='custom-strok inline-block'>e</span>
              <span className='custom-strok inline-block'>n</span>
              <span className='custom-strok inline-block'>d</span>
            </span>
            &nbsp;<br />
            <span className='letter overflow-hidden inline-block'>
              <span className='inline-block'>E</span>
              <span className='inline-block'>x</span>
              <span className='inline-block'>p</span>
              <span className='inline-block'>e</span>
              <span className='inline-block'>r</span>
              <span className='inline-block'>t</span>
              <span className='inline-block'>s</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[600px] w-full m-auto text-center text-[20px] px-8 md:px-0'>Priyajeet brings creativity and technology together to design interactive, user-centered websites that enhance brand presence in the digital and real world.</p>
        </div>

      </div>
        </div>
    </div>
  )
}

export default AboutHero