import React, { useEffect, useState } from 'react'
import Star from '../assets/starg.svg'
import RightArrow from '../assets/right-arrow.svg'
import { useLocation } from 'react-router-dom';

function Expertic() {

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

  const location = useLocation()

    return (
        <>
            <div className='md:flex items-center justify-between lg:h-[80vh] md:h-[60vh] content-center flex-col lg:flex-row py-12'>
                <div className='flex-1 pl-4'>
                    {location.pathname !== '/services' && (
                      <h2 className='uppercase font-TTCPro font-[900] text-blackColor xl:text-[95px] lg:text-[84px] sm:text-[63px] text-[10vw]'>
                      <span>E</span>
                      <span>x</span>
                      <span>p</span>
                      <span>e</span>
                      <span>r</span>
                      <span>t</span>
                      <span>i</span>
                      <span>s</span>
                      <span>e</span>
                  </h2>
                    )}

                    {location.pathname === "/services" && (
                      <h2 className='uppercase font-TTCPro font-[900] text-blackColor xl:text-[95px] lg:text-[84px] sm:text-[63px] text-[10vw] leading-none mb-4'>
                      <span>w</span>
                      <span>h</span>
                      <span>a</span>
                      <span>t</span>
                      &nbsp;
                      <span>a</span>
                      <span>r</span>
                      <span>e</span>
                      &nbsp;
                      <span>y</span>
                      <span>o</span>
                      <span>u</span><br />
                      <span>l</span>
                      <span>o</span>
                      <span>o</span>
                      <span>k</span>
                      <span>i</span>
                      <span>n</span>
                      <span>g</span>
                      &nbsp;
                      <span>f</span>
                      <span>o</span>
                      <span>r</span>
                      <span>?</span>
                  </h2>
                    )}

                    <p className='lg:text-[26px] md:text-[24px] font-TTCPro font-medium'>Physical, digital, meta-physical – We’ll find a creative solution for all your business problems</p>
                </div>

                <div className='md:flex-1 md:inline-flex md:justify-end pt-8 sm:w-full lg:w-fit w-full'>
                    <div className='md:flex items-start lg:justify-between sm:justify-end h-[240px]'>
                        <span className='lg:block hidden'></span>
                        <div className='group pointer-cursor md:h-[80px] h-[70px] lg:w-[22.5vw] md:w-[45vw] flex-shrink-0 border border-blackColor bg-blackColor inline-flex justify-start items-center w-full'>
                            {/* Magnetic effect on wrapper div */}
                            <div className='magnetic-btn relative w-full h-full'>
                                {/* Hover transition on inner span */}
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-semibold content-center transition-all duration-500'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
                                    <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12 font-bold'>View services</span>
                                    <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={Star} alt="" className='w-8' /></span>
                                </span>
                            </div>
                        </div>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertic