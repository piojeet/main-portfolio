// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import BrandingIcon from '../icons/BrandingIcon';
import WebDesignIcon from '../icons/WebDesignIcon';
import FronEndIcon from '../icons/FronEndIcon';
import DesignSupportIcon from '../icons/DesignSupportIcon';
import RightArrowIcon from '../icons/RightArrowIcon';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Cards() {


    const cardRef = useRef(null);
    useGSAP(() => {
        gsap.fromTo(
            ".card",
            { y: "100%" },
            {
                y: "0%",
                stagger: 0.1,
                duration: 2.5,
                ease: "elastic.out(1,0.3)",
                scrollTrigger: {
                    start: "0% 80%",
                    end: "50% 50%",
                    trigger: cardRef.current,
                    // markers: "true",
                }
            }
        )
    })

    return (
        <>
            <div ref={cardRef} className='xl:flex items-start justify-between md:flex-wrap lg:flex-nowrap grid grid-cols-2 mb-28 md:mb-0'>

                <NavLink to="/branding" className='card relative group lg:w-[100%] border border-blackColor bg-bodyColor border-b-0 md:border-b lg:h-[32vw] sm:h-[50vw] h-[55vw] md:w-[45vw] block'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7 flex flex-col justify-between md:block select-none'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 sm:left-[-25%] left-[-30%] transition-left duration-500 sm:group-hover:left-5 group-hover:text-bodyColor group-hover:left-0'>
                                    <RightArrowIcon className="sm:size-16 size-8" />
                                </span>
                                <span className='cards-icon relative left-4 sm:group-hover:left-24 group-hover:left-12 transition-left duration-500  group-hover:text-bodyColor'>
                                    <BrandingIcon className="sm:size-16 size-10" />
                                </span>

                            </div>
                            <div className='md:absolute bottom-[0] md:translate-y-[58%] left-0 w-full sm:px-6 px-4 group-hover:px-3 py-3 transition-all duration-500 group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro md:text-[32px] sm:text-[27px] text-[20px] font-[500] mb-2 group-hover:text-bodyColor'>Branding</h3>
                                <p className='font-TTCPro md:text-[21px] text-[18px] font[450] group-hover:text-bodyColor md:block hidden'>Create or refine a visual identity to celebrate your unique personality and proposition.</p>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/website-design" className='card relative group lg:w-[100%] border border-blackColor border-b-0 md:border-b bg-bodyColor lg:h-[32vw] sm:h-[50vw] h-[55vw] top-12 lg:mt-16 md:w-[45vw] block'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7 flex flex-col justify-between md:block select-none'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 sm:left-[-25%] left-[-30%] transition-left duration-500 sm:group-hover:left-5 group-hover:text-bodyColor group-hover:left-0'>
                                    <RightArrowIcon className="sm:size-16 size-8" />
                                </span>
                                <span className='cards-icon relative left-4 sm:group-hover:left-24 group-hover:left-12 transition-left duration-500  group-hover:text-bodyColor'>
                                    <WebDesignIcon className="sm:size-16 size-10" />
                                </span>

                            </div>
                            <div className='md:absolute bottom-[0] md:translate-y-[65%] left-0 w-full sm:px-6 px-4 group-hover:px-3 py-3 transition-all duration-500 group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro md:text-[32px] sm:text-[27px] text-[20px] font-[500] mb-2 group-hover:text-bodyColor'>Website Design</h3>
                                <p className='font-TTCPro md:text-[21px] text-[18px] font[450] group-hover:text-bodyColor md:block hidden'>Amplify your brands presence and engage your audience with an impactful and interactive website.</p>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/frontend-design" className='card relative group lg:w-[100%] border border-blackColor md:border-b bg-bodyColor lg:h-[32vw] sm:h-[50vw] h-[55vw] lg:mt-7 md:w-[45vw] block'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7 flex flex-col justify-between md:block select-none'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 sm:left-[-25%] left-[-30%] transition-left duration-500 sm:group-hover:left-5 group-hover:text-bodyColor group-hover:left-0'>
                                    <RightArrowIcon className="sm:size-16 size-8" />
                                </span>
                                <span className='cards-icon relative left-4 sm:group-hover:left-24 group-hover:left-12 transition-left duration-500  group-hover:text-bodyColor'>
                                    <FronEndIcon className="sm:size-16 size-10" />

                                </span>

                            </div>
                            <div className='md:absolute bottom-[0] lg:translate-y-[65%] md:translate-y-[70%] left-0 w-full sm:px-6 px-4 group-hover:px-3 py-3 transition-all duration-500 md:group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro md:text-[32px] sm:text-[27px] text-[20px] font-[500] mb-2 group-hover:text-bodyColor'>Front-End</h3>
                                <p className='font-TTCPro md:text-[21px] text-[18px] font[450] group-hover:text-bodyColor md:block hidden'>I build efficient, responsive websites using modern web technologies and best design principles.</p>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/design-support" className='card group lg:w-[100%] border border-blackColor relative top-12 bg-bodyColor lg:h-[32vw] sm:h-[50vw] h-[55vw] md:w-[45vw] block'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7 flex flex-col justify-between md:block'>
                            <div className='relative select-none'>
                                <span className='cards-icon absolute top-0 sm:left-[-25%] left-[-30%] transition-left duration-500 sm:group-hover:left-5 group-hover:text-bodyColor group-hover:left-0'>
                                    <RightArrowIcon className="sm:size-16 size-8" />
                                </span>
                                <span className='cards-icon relative left-4 sm:group-hover:left-24 group-hover:left-12 transition-left duration-500  group-hover:text-bodyColor'>
                                    <DesignSupportIcon className="sm:size-16 size-10" />

                                </span>

                            </div>
                            <div className='md:absolute bottom-[0] md:translate-y-[65%] left-0 w-full sm:px-6 px-4 group-hover:px-3 py-3 transition-all duration-500 group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro md::text-[32px] sm:text-[27px] text-[20px] font-[500] mb-2 group-hover:text-bodyColor select-none'>Design Support</h3>
                                <p className='font-TTCPro md:text-[21px] text-[18px] font[450] group-hover:text-bodyColor md:block hidden select-none'>An ongoing engagement to help with your regular or ad-hoc creative requirements and output.</p>
                            </div>
                        </div>
                    </div>
                </NavLink>

            </div>
        </>
    )
}

export default Cards