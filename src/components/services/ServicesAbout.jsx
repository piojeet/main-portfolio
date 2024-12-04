import React from 'react'
import AlertB from '../../assets/alertb.svg'


function ServicesAbout() {

    

    return (
        <>
            <div className='my-[80px]'>
                <div className='flex'>
                    <div className='lg:flex'>
                        <div className='lg:flex-[.69] border border-blackColor lg:p-8 p-4 h-fit backdrop-blur-md'>
                            <p className='font-TTCPro font-medium text-blackColor lg:text-[32px] text-[25px]'>I am a passionate frontend developer with a diverse range of skills and experience. I believe in the power of creativity to solve complex problems.</p>
                        </div>
                        <div className='lg:flex-1'>
                            <div className='flex-shrink-0 w-[81px] h-[81px] border border-blackColor ml-auto lg:flex items-center justify-center hidden'>
                                <img src={AlertB} alt="" className='w-7' />
                            </div>
                            <div className='flex-1 border border-blackColor lg:mr-[80px] lg:p-8 p-4 backdrop-blur-md'>
                                <p className='font-TTCPro lg:text-[26px] text-[21px] font-medium'>With years of experience, I leverage design to solve problems across various disciplines and sectors. Along the way, I have developed a valuable set of skills.</p>
                                <p className='lg:mt-8 mt-4 font-TTCPro text-[17px]'>I make it a point to include web design, elaborate infographics or even custom animations in every project I undertake to guarantee completeness and professionalism of the work done.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ServicesAbout