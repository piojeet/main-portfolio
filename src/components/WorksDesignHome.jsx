import React, { useEffect, useState } from 'react'
import DesignOne from '../assets/homedesign1.mp4'
import DesignTwo from '../assets/homedesign2.mp4'
import DesignThree from '../assets/homedesign3.mp4'
import VideoIcon from '../assets/video-icon.svg'

function WorksDesignHome() {

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
            <div className='lg:py-[8rem] md:pb-0 md:pt-[5rem]'>
                <div className='flex lg:items-start justify-start flex-col-reverse lg:flex-row'>
                    <div className='lg:w-[67.5vw] w-full'>
                        <div className='groups-m bg-blackColor'>
                            <div className='w-full video-bg overflow-hidden'>
                                <video autoPlay loop muted className='w-full'>
                                    <source src={DesignOne} />
                                </video>
                            </div>

                            <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                                Ink of Violet
                            </div>
                        </div>

                        <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0'>
                            {/* Magnetic effect on wrapper div */}
                            <div className='magnetic-btn relative w-full h-full'>
                                {/* Hover transition on inner span */}
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='text-center w-full block'>Web Design & Build</span>

                                </span>
                            </div>
                        </div>

                    </div>
                    <div className='lg:mb-[180px]'>
                        <div className='flex items-center lg:justify-end lg:w-fit ml-auto'>

                            <div className='shrink-0 w-[80px] h-[80px] border border-blackColor flex items-center justify-center bg-blackColor'>
                                <span className='animate-spiner'>
                                    <svg role="img" width='40px' height='40px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMin meet" className="--icon --icon-spark-1"><path d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z" fill="#F8F8F8"></path></svg>
                                </span>
                            </div>
                            <div className='shrink-0 w-[80px] h-[80px] border bg-bodyColor border-blackColor flex items-center justify-center'>
                                <img src={VideoIcon} alt="" className='w-10' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-start justify-between lg:mt-[100px] flex-wrap lg:flex-nowrap'>
                    <div className='xl:w-full lg:w-[67.5vw] w-full lg:ml-auto ml-0'>
                        <div className='w-full'>
                            <div className='groups-m bg-blackColor'>
                                <div className='w-full video-bg overflow-hidden lg:h-[35vw] h-full'>
                                    <video autoPlay loop muted className='w-full h-full object-cover'>
                                        <source src={DesignTwo} />
                                    </video>
                                </div>

                                <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                                    Ink of Violet
                                </div>
                            </div>

                            <div className='group pointer-cursor h-[80px] xl:w-[15vw] lg:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0'>
                                {/* Magnetic effect on wrapper div */}
                                <div className='magnetic-btn relative w-full h-full'>
                                    {/* Hover transition on inner span */}
                                    <span
                                        className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] inline-block font-semibold content-center'
                                        style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                    >
                                        <span className='text-center w-full block'>Web Design</span>

                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='xl:w-full lg:w-[67.5vw] w-full relative lg:top-[-280px]'>
                        <div className='w-full'>
                            <div className='groups-m bg-blackColor'>
                                <div className='w-full video-bg overflow-hidden lg:h-[35vw] h-full'>
                                    <video autoPlay loop muted className='w-full h-full object-cover'>
                                        <source src={DesignThree} />
                                    </video>
                                </div>

                                <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                                    Ink of Violet
                                </div>
                            </div>

                            <div className='group pointer-cursor h-[80px] lg:w-[15vw] md:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:inline-flex justify-start items-center border-t-0 relative z-20 border-r-0'>
                                {/* Magnetic effect on wrapper div */}
                                <div className='magnetic-btn relative w-full h-full'>
                                    {/* Hover transition on inner span */}
                                    <span
                                        className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] inline-block font-semibold content-center'
                                        style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                    >
                                        <span className='text-center w-full block'>Web Design</span>

                                    </span>
                                </div>
                            </div>

                            <div className='group pointer-cursor h-[80px] lg:w-[13vw] md:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:inline-flex justify-start items-center border-t-0 relative z-10'>
                                {/* Magnetic effect on wrapper div */}
                                <div className='magnetic-btn relative w-full h-full'>
                                    {/* Hover transition on inner span */}
                                    <span
                                        className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] inline-block font-semibold content-center'
                                        style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                    >
                                        <span className='text-center w-full block'>Branding</span>

                                    </span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='group pointer-cursor h-[80px] md:w-[45vw] lg:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor flex justify-start items-center ml-auto relative md:top-[-80px] md:mt-[160px] lg:mt-0 top-[10px] '>
                    {/* Magnetic effect on wrapper div */}
                    <div className='magnetic-btn relative w-full h-full'>
                        {/* Hover transition on inner span */}
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] inline-block font-semibold content-center'
                            style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                        >
                            <span className='text-center w-full block uppercase'>View our work</span>

                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorksDesignHome