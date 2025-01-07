/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react';
import RightArrow from '../assets/right-arrow.svg';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { NavLink, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function SendMessageBox() {

    const location = useLocation();

    const lattersRef = useRef(null);
    useGSAP(() => {
        gsap.from(".letteress span", {
          y: 110,
          duration: 0.4,
          stagger: 0.1,
          scrollTrigger: {
            trigger: lattersRef.current,
            start: "0% 80%",
              end: "50% 50%",
            //   markers: true
          }
        })
      })

    return (
        <>
        {location.pathname !== "/contact" && (
            <div className='w-full'>
            <div className='w-full border border-blackColor bg-blackColor'>
                <div className='md:p-8 p-4'>
                    <span className='text-bodyColor block w-fit m-auto'>
                        <svg
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMin meet"
                            className="--icon --icon-misc-mail --ui-icon-inline w-7"
                        >
                            <path
                                d="m2.4 7.2 7.8 5.5a4.4 4.4 0 0 0 1.3.7 2 2 0 0 0 1 0 4.4 4.4 0 0 0 1.3-.7l7.8-5.5M7 19.7h10a7.2 7.2 0 0 0 3-.3 2.9 2.9 0 0 0 1.3-1.3 7.2 7.2 0 0 0 .3-3V8.9a7.2 7.2 0 0 0-.3-3A2.9 2.9 0 0 0 20 4.6a7.2 7.2 0 0 0-3-.3H7a7.2 7.2 0 0 0-3 .3A2.9 2.9 0 0 0 2.7 6a7.2 7.2 0 0 0-.3 3v6.2a7.2 7.2 0 0 0 .3 3A2.9 2.9 0 0 0 4 19.4a7.2 7.2 0 0 0 3 .3Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>
                    </span>
                    <div className='lg:text-[61.5px] md:text-[56px] text-[10vw] font-TTCPro uppercase font-extrabold text-bodyColor text-center leading-[.89]'>
                        <div ref={lattersRef} className="overflow-hidden">
                            <span className="letteress inline-block">
                                <span className="inline-block">l</span>
                                <span className="inline-block">e</span>
                                <span className="inline-block">t</span>
                                <span className="inline-block">'s</span>
                            </span>&nbsp;
                            <span className="letteress inline-block">
                                <span className="inline-block">c</span>
                                <span className="inline-block">h</span>
                                <span className="inline-block">a</span>
                                <span className="inline-block">t</span>
                            </span>
                        </div>
                    </div>
                    <p className='md:text-[26px] text-[22px] font-TTCPro font-normal text-bodyColor text-center leading-[1.6]'>Let's work together!</p>

                    <NavLink to="/contact" className='group pointer-cursor h-[80px] w-[100%] flex-shrink-0 border border-blackColor bg-gray-800 flex justify-start items-center mt-10'>
                        {/* Magnetic effect on wrapper div */}
                        <div className='magnetic-btn relative w-full h-full'>
                            {/* Hover transition on inner span */}
                            <span
                                className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-semibold content-center transition-all duration-500'
                                style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                            >
                                <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
                                <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14'>Send us a message</span>
                                <span className='absolute right-5 top-1/2 -translate-y-1/2'>
                                    <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2 11 13" />
                                        <path d="m22 2-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </span>
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
        )}
        </>
        
    );
}

export default SendMessageBox;
