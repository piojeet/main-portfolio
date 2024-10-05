import React from 'react'
import DesignTwo from '../../assets/homedesign1.mp4'

function EcommerceWorks({activeIndex}) {
  return (
    <>
            {/* First work */}
            <div className={`${activeIndex === 0 ? 'block' : 'hidden'}`}>
                <div className='w-full'>
                    <div className='groups-m bg-blackColor'>
                        <div className='w-full video-bg overflow-hidden'>
                            <video autoPlay loop muted className='w-full'>
                                <source src={DesignTwo} />
                            </video>
                        </div>
                        <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                            Ink of Violet
                        </div>
                    </div>
                    <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto'>
                        <div className='magnetic-btn relative w-full h-full'>
                            <span
                                className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center'
                                style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                            >
                                <span className='text-center w-full block'>Web Design & Build</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second work */}
            <div className={`${activeIndex === 1 ? 'block' : 'hidden'}`}>
                <div className='w-full'>
                    <div className='groups-m bg-blackColor'>
                        <div className='w-full video-bg overflow-hidden'>
                            <video autoPlay loop muted className='w-full'>
                                <source src={DesignTwo} />
                            </video>
                        </div>
                        <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                            Creative Ink
                        </div>
                    </div>
                    <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto'>
                        <div className='magnetic-btn relative w-full h-full'>
                            <span
                                className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center'
                                style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                            >
                                <span className='text-center w-full block'>Web Design & Build</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* third work */}
            <div className={`${activeIndex === 2 ? 'block' : 'hidden'}`}>
                <div className='w-full'>
                    <div className='groups-m bg-blackColor'>
                        <div className='w-full video-bg overflow-hidden'>
                            <video autoPlay loop muted className='w-full'>
                                <source src={DesignTwo} />
                            </video>
                        </div>
                        <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                            Creative Ink
                        </div>
                    </div>
                    <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto'>
                        <div className='magnetic-btn relative w-full h-full'>
                            <span
                                className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center'
                                style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                            >
                                <span className='text-center w-full block'>Web Design & Build</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default EcommerceWorks