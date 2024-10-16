import React, { useEffect, useState } from 'react'
import Rocket from '../../assets/chevron-down.svg'
import Mail from '../../assets/mail.svg'
import { useProjectAllContext } from '../../context/ProjectAllContext';
import ContactEnquiery from './ContactEnquiery';
import ContactGenral from './ContactGenral';
import downArrow from '../../assets/chevron-down.svg'
function ContactHero() {

    const {
        showFirstForm,
        handleFirstForm,
        handleSecondForm,
    } = useProjectAllContext();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup interval when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='lg:border-t border-blackColor border-b-0 border-l-0  border-r-0 grid lg:grid-cols-2 grid-cols-1 items-start justify-between mb-40'>
            <div className='w-[100%] h-full'>
                <div className='border-blackColor py-16 px-8 border lg:border-0 lg:border-l lg:border-b'>
                    <div className='flex items-center justify-center gap-4 lg:text-[17px] text-[15px] font-TTCPro font-semibold uppercase text-blackColor'>
                        <span>Conversation</span>
                        <img src={Mail} alt="" className='w-16' />
                        <span>Invitation</span>
                    </div>
                    <div className='flex items-center uppercase mx-auto w-fit lg:text-[60px] md:text-[50px] text-[40px] font-TTCPro font-bold'>
                        <span>c</span>
                        <span>o</span>
                        <span>n</span>
                        <span>t</span>
                        <span>a</span>
                        <span>c</span>
                        <span>t</span>
                    </div>
                    <p className='lg:text-[26px] text-[22px] font-TTCPro font-normal text-center text-blackColor lg:max-w-[350px] max-w-[500px] w-full mx-auto'>Get in touch, drop us a line, give us a bell and let’s make something wonderful together</p>
                </div>

                <div className='pt-[80px] h-fit sticky top-0 lg:block hidden'>
                    <div>
                        <div className='h-[80px] w-[80px] flex items-center justify-center flex-shrink-0 border border-blackColor border-l-0'>
                            <span className='black w-8 h-8 border-2 border-blackColor rounded-full relative flex items-center justify-center'>
                                <span className='absolute w-full h-2 origin-center animate-spin-watch'>
                                    <span className='absolute right-[10%] top-1/2 -translate-y-1/2 w-[40%] h-[2px] bg-blackColor'></span>
                                </span>

                                <span className='absolute w-full h-2 origin-center rotate-45'>
                                    <span className='absolute right-[20%] top-1/2 -translate-y-1/2 w-[30%] h-[2px] bg-blackColor'></span>
                                </span>

                                <span className='absolute w-1 h-1 bg-blackColor rounded-full'></span>

                            </span>
                        </div>
                        <div className='pl-[79px] pr-8'>
                            <div className='text-[21px] font-TTCPro font-medium text-blackColor h-[80px] text-center content-center border border-blackColor'>
                                IST <span>{currentTime.toLocaleTimeString()}</span>
                            </div>
                            <div className='h-[150px] text-center content-center font-TTCPro bg-blackColor'>
                                <p className='text-[20px] font-medium text-bodyColor uppercase -tracking-tighter'>The Developer is</p>
                                <div className='flex items-center justify-center uppercase text-[60px] font-extrabold text-bodyColor leading-[1]'>
                                    <span>A</span>
                                    <span>b</span>
                                    <span>a</span>
                                    <span>i</span>
                                    <span>l</span>
                                    <span>a</span>
                                    <span>b</span>
                                    <span>l</span>
                                    <span>e</span>
                                </div>
                            </div>
                            <div className='text-[21px] font-TTCPro font-extrabold uppercase text-blackColor h-[80px] text-center content-center border border-blackColor mt-8 border-b-0'>
                                Developer Hours
                            </div>
                            <div className='h-[80px] flex items-start justify-between text-[21px] font-TTCPro font-medium text-blackColor'>
                                <div className='w-full text-center content-center h-full border border-blackColor border-r-0'>mon - sun</div>
                                <div className='w-full text-center content-center h-full border border-blackColor'>24/7</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[100%]'>

                <div className='lg:hidden flex'>
                    <div className='group pointer-cursor h-[80px] w-[50%] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center relative z-20 border-t-0' onClick={handleFirstForm}>
                        {/* Magnetic effect on wrapper div */}
                        <div className='magnetic-btn relative w-full h-full'>
                            {/* Hover transition on inner span */}
                            <span
                                className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 bg-blackColor group-hover:border group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 inline-flex items-center justify-around'
                                style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                            >

                                <span className={`relative z-20 ${showFirstForm ? 'text-bodyColor' : 'text-blackColor'}`}>Enquiry</span>
                                <span className='relative z-20'><img src={downArrow} alt="" className={`w-8 ${showFirstForm ? 'invert' : ''}`} /></span>
                                <span className={`absolute top-0 right-0 origin-right w-full h-full bg-bodyColor transition-all duration-300 z-10 ${showFirstForm ? 'scale-x-0' : 'scale-x-100'}`}></span>
                            </span>
                        </div>
                    </div>

                    <div className='group pointer-cursor h-[80px] w-[50%] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center relative z-10 border-t-0' onClick={handleSecondForm}>
                        {/* Magnetic effect on wrapper div */}
                        <div className='magnetic-btn relative w-full h-full'>
                            {/* Hover transition on inner span */}
                            <span
                                className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 bg-blackColor group-hover:border group-hover:border-blackColor font-TTCPro uppercase text-[15px] tracking-[2px] inline-flex font-bold content-center transition-all duration-500 items-center justify-around'
                                style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                            >
                                <span className={`relative z-20 ${showFirstForm ? 'text-blackColor' : 'text-bodyColor'}`}>General</span>
                                <span className='relative z-20'><img src={downArrow} alt="" className={`w-8 ${showFirstForm ? 'invert-0' : 'invert'}`} /></span>
                                <span className={`absolute top-0 right-0 origin-right w-full h-full bg-bodyColor transition-all duration-300 z-10 ${showFirstForm ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className='w-full border-t border-blackColor lg:border-t-0'>
                    <div className={` ${showFirstForm ? 'block tab-ani relative' : 'hidden'}`}>
                        <ContactEnquiery />
                    </div>
                    <div className={`${showFirstForm ? 'hidden' : 'block tab-ani relative'}`}>
                        <ContactGenral />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero