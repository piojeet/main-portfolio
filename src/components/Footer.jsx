/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from 'react'
import RightArrow from '../assets/right-arrow.svg'
import { NavLink } from 'react-router-dom'
import LinkArrow from '../assets/link-arrow.svg'
import SendMessageBox from './SendMessageBox'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);



function Footer() {

  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const footer = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true }); // Timeline create aur pause rakhein
    timeline.from(".flatter", {
      top: 250,
      duration: 0.5,
      stagger: 0.05,
      ease: "elastic.out(2,3.4)",
    });
  
    ScrollTrigger.create({
      trigger: footer.current,
      start: "0% 70%",
      end: "50% 50%",
      markers: false,
      onEnter: () => timeline.play(), // Jab trigger aaye, animation chale
      onLeaveBack: () => timeline.reverse(), // Jab trigger viewport se upar ki taraf jaye, reverse ho
    });
  });
  
  



  return (
    <>
      <div className='flex items-start justify-between lg:flex-row flex-col'>
        <div className='w-full'>

          <div className='md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor ml-auto border-b-0 flex items-center justify-center'>
            <svg
              width="46"
              height="46"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
            </svg>

          </div>

          <div className='border border-blackColor lg:border-r-0 border-r not-select py-[1.51rem]'>
            <NavLink
              to="/"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${hoveredIndex === 0 || hoveredIndex === null ? 'text-black' : 'text-gray-500'
                }`}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className='absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink'>
                    Home
                  </span>

                  <span className='w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center'>
                    <img src={RightArrow} alt="" className='w-full' />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${isActive ? 'left-0' : 'left-[-5px]'
                      } group-hover:left-0 ${hoveredIndex === 0 || hoveredIndex === null ? 'bg-blackColor' : 'bg-gray-500'}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/projects"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${hoveredIndex === 1 || hoveredIndex === null ? 'text-black' : 'text-gray-500'
                }`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className='absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink'>
                    Projects
                  </span>

                  <span className='w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center'>
                    <img src={RightArrow} alt="" className='w-full' />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${isActive ? 'left-0' : 'left-[-5px]'
                      } group-hover:left-0 ${hoveredIndex === 1 || hoveredIndex === null ? 'bg-blackColor' : 'bg-gray-500'}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${hoveredIndex === 2 || hoveredIndex === null ? 'text-black' : 'text-gray-500'
                }`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className='absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink'>
                    About
                  </span>

                  <span className='w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center'>
                    <img src={RightArrow} alt="" className='w-full' />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${isActive ? 'left-0' : 'left-[-5px]'
                      } group-hover:left-0 ${hoveredIndex === 2 || hoveredIndex === null ? 'bg-blackColor' : 'bg-gray-500'}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/services"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${hoveredIndex === 3 || hoveredIndex === null ? 'text-black' : 'text-gray-500'
                }`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className='absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink'>
                    Services
                  </span>

                  <span className='w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center'>
                    <img src={RightArrow} alt="" className='w-full' />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${isActive ? 'left-0' : 'left-[-5px]'
                      } group-hover:left-0 ${hoveredIndex === 3 || hoveredIndex === null ? 'bg-blackColor' : 'bg-gray-500'}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${hoveredIndex === 4 || hoveredIndex === null ? 'text-black' : 'text-gray-500'
                }`}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className='absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink'>
                    Contact
                  </span>

                  <span className='w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center'>
                    <img src={RightArrow} alt="" className='w-full' />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${isActive ? 'left-0' : 'left-[-5px]'
                      } group-hover:left-0 ${hoveredIndex === 4 || hoveredIndex === null ? 'bg-blackColor' : 'bg-gray-500'}`}
                  ></span>
                </>
              )}
            </NavLink>


          </div>
        </div>
        <SendMessageBox />
      </div>

      <div className='lg:flex grid md:grid-cols-2 grid-cols-1'>

        <NavLink target='blank' to="https://www.linkedin.com/in/priyajeet-majhi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-40 md:border-r-0 md:border-t-0'>
          {/* Magnetic effect on wrapper div */}
          <div className='magnetic-btn relative w-full h-full'>
            {/* Hover transition on inner span */}
            <span
              className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500'
              style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
            >
              <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
              <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14'>Linkedin</span>
              <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={LinkArrow} alt="" className='w-6' /></span>
            </span>
          </div>
        </NavLink>

        <NavLink target='blank' to="https://x.com/Priyajeet_Majhi?t=dsUWTwxojzvOn5nEVSTS_w&s=09" className='group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-30 md:border-r-0 border-t-0'>
          {/* Magnetic effect on wrapper div */}
          <div className='magnetic-btn relative w-full h-full'>
            {/* Hover transition on inner span */}
            <span
              className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500'
              style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
            >
              <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
              <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14'>x (Twitter)</span>
              <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={LinkArrow} alt="" className='w-6' /></span>
            </span>
          </div>
        </NavLink>

        <NavLink target='blank' to="https://www.instagram.com/developer_jeet_?igsh=MTl6YnZ6ZG11ZHJjOQ==" className='group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-20 md:border-r-0 border-t-0 md:border-t'>
          {/* Magnetic effect on wrapper div */}
          <div className='magnetic-btn relative w-full h-full'>
            {/* Hover transition on inner span */}
            <span
              className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500'
              style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
            >
              <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
              <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14'>Instagram</span>
              <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={LinkArrow} alt="" className='w-6' /></span>
            </span>
          </div>
        </NavLink>

        <NavLink to={'/privacy'} className='group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-10 border-t-0 md:border-t'>
          {/* Magnetic effect on wrapper div */}
          <div className='magnetic-btn relative w-full h-full'>
            {/* Hover transition on inner span */}
            <span
              className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500'
              style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
            >
              <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full' /></span>
              <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14'>privacy</span>
              <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'>
                <svg
                  width="25"
                  height="25"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
                </svg>
              </span>
            </span>
          </div>
        </NavLink>

      </div>

      <div className='flex items-start justify-between relative lg:flex-row flex-col'>
        <div className='flex items-start justify-between relative w-full'>
          <div className='flex items-start'>
            <div className='group md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor border-t-0 bg-blackColor overflow-hidden'>

              <div className='animate-spiner text-bodyColor'>
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMin meet"
                  className="--icon --icon-spark-4 scale-50 group-hover:scale-75 transition-all duration-500" // Changed class to className
                >
                  <path
                    d="M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

            </div>

            <div className='group md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor border-t-0 md:block hidden'>

              <div className=' text-blackColor w-full h-full flex items-center justify-center'>
                <svg
                  width="54"
                  height="54"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"  // Changed stroke-linecap to strokeLinecap
                  strokeLinejoin="round"  // Changed stroke-linejoin to strokeLinejoin
                  strokeWidth="1"         // Changed stroke-width to strokeWidth
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                  <path d="M9 10h.01"></path>
                  <path d="M15 10h.01"></path>
                  <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                </svg>
              </div>

            </div>
          </div>

          <div className='flex items-start'>
            <div className='group w-[80px] h-[80px] border border-blackColor border-t-0 bg-blackColor overflow-hidden md:block hidden'>

              <div className='animate-spiner text-bodyColor w-full h-full flex items-center justify-center'>
                <svg
                  width="54"
                  height="54"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"  // Changed from stroke-linecap to strokeLinecap
                  strokeLinejoin="round"  // Changed from stroke-linejoin to strokeLinejoin
                  strokeWidth="1"         // Changed from stroke-width to strokeWidth
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className='scale-75 group-hover:scale-90 transition-all duration-500'
                >
                  <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
                  <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
                  <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
                  <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
                  <path d="M12 2.25v19.5"></path>
                  <path d="M21.75 12H2.25"></path>
                </svg>
              </div>

            </div>

            <div className='group md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor border-t-0'>

              <div className=' text-blackColor w-full h-full flex items-center justify-center'>
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"  // Changed from stroke-linecap to strokeLinecap
                  strokeLinejoin="round"  // Changed from stroke-linejoin to strokeLinejoin
                  strokeWidth="1"         // Changed from stroke-width to strokeWidth
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 12v10H4V12"></path>
                  <path d="M2 7h20v5H2z"></path>
                  <path d="M12 22V7"></path>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
              </div>

            </div>
          </div>
        </div>

        <div className='lg:absolute xl:top-[40px] lg:top-[10px] md:w-[60%] left-1/2 -translate-x-1/2 flex-shrink-0 block text-[14px] text-center relative lg:p-0 py-14 w-full px-4 md:px-0'>
          <p className='pb-1'>All work © Priyajeet Majhi 2022-24. All rights reserved</p>
          <p>Priyajeet Ltd, Registered in England and Wales No. 14713347. 27 Old Gloucester St, Holborn, London WC1N 3AX</p>
        </div>

      </div>

      <div ref={footer} className='text-[14vw] font-TTCPro uppercase font-black lg:flex items-center leading-3 h-fit hidden overflow-hidden lg:pb-10'>
        <span className='inline-flex flatter relative'>p</span>
        <span className='inline-block flatter relative'>r</span>
        <span className='inline-block flatter relative'>i</span>
        <span className='inline-block flatter relative'>y</span>
        <span className='inline-block flatter relative'>a</span>
        <span className='inline-block flatter relative'>j</span>
        <span className='inline-block flatter relative'>e</span>
        <span className='inline-block flatter relative'>e</span>
        <span className='inline-block flatter relative'>t</span>
        <span className='inline-block flatter relative w-[14vw] h-[14vw] text-blackColor  animate-spiner'>
          <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMin meet" className="--icon --icon-spark-1 inline-block"><path d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z"></path></svg>
        </span>
      </div>
    </>
  )
}

export default Footer