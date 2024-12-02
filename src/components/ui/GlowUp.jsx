import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

function GlowUp({ title, subTitle, icon, btn }) {
    return (
        <div className='min-h-[60vh] h-auto mt-[80px] mb-[10rem]'>
            <div className=''>
                <div className='w-full min-h-[60vh] h-auto border border-blackColor flex items-center justify-center backdrop-blur-sm bg-blackColor px-2'>
                    <div>
                        <div><img src={icon} alt="IMG" className='lg:w-20 w-16 block mx-auto invert' /></div>

                        <div className='lg:text-[61px] sm:text-[40px] text-[10vw] font-TTCPro text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-bodyColor font-semibold'>
                            {title}
                        </div>

                        <p className='md:text-[26px] font-TTCPro font-medium max-w-[800px] w-full m-auto text-center text-[20px] px-8 md:px-0 text-bodyColor'>{subTitle}</p>
                    </div>

                </div>

                <NavLink to="/contact" className='group pointer-cursor h-[80px] md:w-[45vw] w-full flex-shrink-0 border border-blackColor bg-blackColor flex justify-start items-center border-t-0 lg:mx-auto md:ml-auto'>
                    <div className='magnetic-btn relative w-full h-full'>
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[17px] md:text-[16px] tracking-[2px] inline-block font-bold content-center'
                            style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                        >
                            <span className='text-center w-full block uppercase font-TTCPro'>{btn}</span>
                        </span>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

GlowUp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
};

export default GlowUp