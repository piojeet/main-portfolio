import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LinkArrow from '../assets/link-arrow.svg'
import RightArrow from '../assets/right-arrow.svg'

function NavLinks() {
    const [hoverDirection, setHoverDirection] = useState({});

    // Function to handle mouse enter and leave dynamically for any link
    const handleMouseEvent = (e, link) => {
        const { top, height } = e.currentTarget.getBoundingClientRect();
        const mouseY = e.clientY;
        const midHeight = top + height / 2;

        setHoverDirection((prevState) => ({
            ...prevState,
            [link]: mouseY < midHeight ? 'top' : 'bottom',
        }));
    };

    return (
        <>
            <div className='bg-blackColor'>



                {/* Work Link */}
                <NavLink to="/projects" className="block overflow-hidden border border-gray-600 pointer-cursor border-b-0">
                    <div
                        className="group w-full h-[80px] inline-flex relative"
                        onMouseEnter={(e) => handleMouseEvent(e, 'work')}
                        onMouseLeave={(e) => handleMouseEvent(e, 'work')}
                    >
                        <span className='relative z-20 text-[50px] text-white w-full text-center group-hover:text-black content-center font-TTCPro font-extrabold'>
                            Work
                        </span>
                        <span
                            className={`w-full h-full bg-bodyColor absolute left-0 z-10 transition-all duration-200 top-[-100%] ${hoverDirection['work'] === 'top'
                                    ? 'top-[-100%] group-hover:top-0 group-active:scale-y-75'
                                    : hoverDirection['work'] === 'bottom'
                                        ? 'top-[100%] group-hover:top-0'
                                        : ''
                                } pointer-events-none`}
                        ></span>
                    </div>
                </NavLink>

                {/* about Link */}
                <NavLink to="/about" className="block overflow-hidden border border-gray-600 pointer-cursor border-b-0">
                    <div
                        className="group w-full h-[80px] inline-flex relative"
                        onMouseEnter={(e) => handleMouseEvent(e, 'about')}
                        onMouseLeave={(e) => handleMouseEvent(e, 'about')}
                    >
                        <span className='relative z-20 text-[50px] text-white w-full text-center group-hover:text-black content-center font-TTCPro font-extrabold'>
                            About
                        </span>
                        <span
                            className={`w-full h-full bg-bodyColor absolute left-0 z-10 transition-all duration-200 top-[-100%] first ${hoverDirection['about'] === 'top'
                                    ? 'top-[-100%] group-hover:top-0 group-active:scale-y-75'
                                    : hoverDirection['about'] === 'bottom'
                                        ? 'top-[100%] group-hover:top-0'
                                        : ''
                                } pointer-events-none`}
                        ></span>


                    </div>
                </NavLink>

                {/* services Link */}
                <NavLink to="/services" className="block overflow-hidden border border-gray-600 pointer-cursor border-b-0">
                    <div
                        className="group w-full h-[80px] inline-flex relative"
                        onMouseEnter={(e) => handleMouseEvent(e, 'services')}
                        onMouseLeave={(e) => handleMouseEvent(e, 'services')}
                    >
                        <span className='relative z-20 text-[50px] text-white w-full text-center group-hover:text-black content-center font-TTCPro font-extrabold'>
                            Services
                        </span>
                        <span
                            className={`w-full h-full bg-bodyColor absolute left-0 z-10 transition-all duration-200 top-[-100%] first ${hoverDirection['services'] === 'top'
                                    ? 'top-[-100%] group-hover:top-0 group-active:scale-y-75'
                                    : hoverDirection['services'] === 'bottom'
                                        ? 'top-[100%] group-hover:top-0'
                                        : ''
                                } pointer-events-none`}
                        ></span>


                    </div>
                </NavLink>

                {/* contact Link */}
                <NavLink to="/contact" className="block overflow-hidden uppercase border border-gray-600 pointer-cursor">
                    <div
                        className="group w-full h-[80px] inline-flex relative"
                        onMouseEnter={(e) => handleMouseEvent(e, 'contact')}
                        onMouseLeave={(e) => handleMouseEvent(e, 'contact')}
                    >
                        <span className='relative z-20 text-[50px] text-white w-full text-center group-hover:text-black content-center font-TTCPro font-extrabold'>
                            Contact
                        </span>
                        <span
                            className={`w-full h-full bg-bodyColor absolute left-0 z-10 transition-all duration-200 top-[-100%] first ${hoverDirection['contact'] === 'top'
                                    ? 'top-[-100%] group-hover:top-0 group-active:scale-y-75'
                                    : hoverDirection['contact'] === 'bottom'
                                        ? 'top-[100%] group-hover:top-0'
                                        : ''
                                } pointer-events-none`}
                        ></span>


                    </div>
                </NavLink>
            </div>

            <div className='flex items-start justify-between lg:flex-row md:flex-col'>
                <NavLink target='blank' to="https://www.linkedin.com/in/priyajeet-majhi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='group pointer-cursor h-[80px] md:w-[100%] lg:w-[50%] flex-shrink-0 bg-gray-800 sm:flex justify-start items-center hidden relative z-20'>
                    {/* Magnetic effect on wrapper div */}
                    <div className='magnetic-btn relative w-full h-full'>
                        {/* Hover transition on inner span */}
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border-l bg-blackColor border border-gray-600 font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500 border-t-0 hover:border-t'
                            style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                        >
                            <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full invert' /></span>
                            <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12'>linkedin</span>
                            <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={LinkArrow} alt="" className='w-8 saturate-100 invert' /></span>
                        </span>
                    </div>
                </NavLink>


                <NavLink target='blank' to="https://www.instagram.com/developer_jeet_?igsh=MTl6YnZ6ZG11ZHJjOQ==" className='group pointer-cursor h-[80px] md:w-[100%] lg:w-[50%]  flex-shrink-0 bg-gray-800 sm:flex justify-start items-center hidden relative z-10'>
                    {/* Magnetic effect on wrapper div */}
                    <div className='magnetic-btn relative w-full h-full'>
                        {/* Hover transition on inner span */}
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border-l bg-blackColor border border-gray-600 font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500 border-t-0 hover:border-t lg:border-l-0 hover:border-l'
                            style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                        >
                            <span className='absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5'><img src={RightArrow} alt="" className='w-full invert' /></span>
                            <span className='absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-12'>Instagram</span>
                            <span className='group-hover:animate-bounce-on absolute right-5 top-1/2 -translate-y-1/2'><img src={LinkArrow} alt="" className='w-8 saturate-100 invert' /></span>
                        </span>
                    </div>
                </NavLink>
            </div>
        </>
    );
}

export default NavLinks;
