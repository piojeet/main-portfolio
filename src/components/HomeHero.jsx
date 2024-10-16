import React, { useEffect, useState } from 'react'
import Glob from '../assets/glob.svg'
import GlobC from '../assets/globc.svg'
import Start from '../assets/starg.svg'
import RightArrow from '../assets/right-arrow.svg'

function HomeHero() {

  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll('.magnetic-btn');

    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        setIsMagnetic(true);
      };

      const handleMouseLeave = () => {
        setIsMagnetic(false);
        button.style.transition = 'transform .4s linear'; // Smooth return on leave
        button.style.transform = 'translate(0, 0)'; // Reset position
      };

      const handleMouseMove = (e) => {
        if (!isMagnetic) return;

        const { left, top, width, height } = button.getBoundingClientRect();
        const buttonCenterX = left + width / 2;
        const buttonCenterY = top + height / 2;

        const deltaX = e.clientX - buttonCenterX;
        const deltaY = e.clientY - buttonCenterY;

        // Apply limit of 12px (0.75rem) in any direction and slow down movement
        const limitedDeltaX = Math.max(-12, Math.min(12, deltaX * 0.1)); // Slower, smoother scaling factor (0.1)
        const limitedDeltaY = Math.max(-12, Math.min(12, deltaY * 0.1));

        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

        if (distance < 150) {
          button.style.transition = 'transform 0.1s ease-out'; // Smoother, shorter transition on hover
          button.style.transform = `translate(${limitedDeltaX}px, ${limitedDeltaY}px)`; // Magnetic effect with limits
        }
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);
      button.addEventListener('mousemove', handleMouseMove);

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
        button.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, [isMagnetic]);

  return (
    <>
      <div className='w-full md:h-[87vh] h-auto min-h-[70vh] border border-blackColor flex items-center justify-center backdrop-blur-sm'>
        <div>
          <div className='flex items-center text-[17px] uppercase font-TTCPro font-semibold justify-center gap-6'>
            <p className='md:block hidden'>Creative services</p>
            <span className='relative flex items-center justify-center'>
              <img src={Glob} alt="" className='w-[3rem]' />
              <img src={GlobC} alt="" className='w-3 h-3 aspect-square absolute animate-spiner origin-center' />
            </span>
            <p className='md:block hidden'>for modern brands</p>
          </div>

          <div className='lg:text-[95px] sm:text-[63px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center'>
            <span>
              <span>W</span>
              <span>e</span>
            </span>
            &nbsp;
            <span>
              <span>b</span>
              <span>u</span>
              <span>i</span>
              <span>l</span>
              <span>d</span>
            </span>
            &nbsp;
            <span>
              <span>b</span>
              <span>r</span>
              <span>a</span>
              <span>n</span>
              <span>d</span>
              <span>s</span>
            </span> &nbsp;
             <br />
            <span>
              <span>t</span>
              <span>h</span>
              <span>a</span>
              <span>t</span>
            </span>
            &nbsp;
            <span className='text-[#bebebe] [text-shadow:-5px_2px_0px_black] specal'>
              <span className='custom-strok'>s</span>
              <span className='custom-strok'>t</span>
              <span className='custom-strok'>a</span>
              <span className='custom-strok'>n</span>
              <span className='custom-strok'>d</span>
            </span>
            &nbsp;
            <span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </span>
          </div>

          <p className='md:text-[26px] font-TTCPro font-medium max-w-[500px] w-full m-auto text-center text-[20px] px-8 md:px-0'>Priyajeet is a digital-first creative studio bringing brands to life online and IRL</p>
        </div>

      </div>
      <div className='flex items-start lg:justify-between sm:justify-end lg:h-[240px] sm:h-[150px] mb-12 md:mb-0'>
        <span className='lg:block sm:hidden'></span>
        <div className='group pointer-cursor md:h-[80px] h-[70px] lg:w-[22.5vw] sm:w-[45vw] w-full flex-shrink-0 border border-blackColor border-t-0 bg-blackColor flex justify-start items-center'>
          {/* Magnetic effect on wrapper div */}
          <div className='magnetic-btn relative w-full h-full'>
            {/* Hover transition on inner span */}
            <span
              className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-semibold content-center transition-all duration-500'
              style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
            >
              <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
              <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12'>Get Started</span>
              <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={Start} alt="" className='w-8' /></span>
            </span>
          </div>
        </div>
        <span></span>
        <span></span>
      </div>



    </>
  )
}

export default HomeHero