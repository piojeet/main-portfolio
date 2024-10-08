// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import Designeight from '../../assets/project8.webp';
import DesignFour from '../../assets/project4.webp';
import DesignFive from '../../assets/project5.webp';
import { useProjectAllContext } from '../../context/ProjectAllContext';
import { NavLink } from 'react-router-dom';

const workItems = [
    { id: 0, title: 'Sharad Sahu', media: DesignFour, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://sharadsportfolio.netlify.app/' },
    { id: 1, title: 'I am William', media: DesignFive, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://vocal-chimera-107087.netlify.app/' },
    { id: 2, title: 'Oraman', media: Designeight, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://gregarious-syrniki-7b45c9.netlify.app/' },
];

const WorkItem = ({ title, media, type, isVisible, buttonText, toggleType, link }) => {
    const {
        updateToggle,
    } = useProjectAllContext();

    return (
        <div className={`${isVisible ? 'block' : 'hidden'}`}>
            <div className='w-full'>
                <NavLink to={link} className='groups-m !bg-blackColor pointer-cursor block'>
                    <div className='w-full video-bg overflow-hidden lg:h-[25vw] sm:h-[52vw] h-[52vw] border border-blackColor border-b-0 border-l-0'>
                    {type === 'video' ? (
                            <video autoPlay loop muted className='w-full h-full object-cover'>
                                <source src={media} />
                            </video>
                        ) : (
                            <img src={media} alt={title} className='w-full h-full object-cover' />
                        )}
                    </div>
                    <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                        {title}
                    </div>
                </NavLink>
                <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto' onClick={() => updateToggle(toggleType)}>
                    <div className='magnetic-btn relative w-full h-full'>
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center'
                            style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                        >
                            <span className='text-center w-full block'>{buttonText}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

WorkItem.propTypes = {
    title: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'image']).isRequired,
    isVisible: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired,
    toggleType: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

const EcommerceWorks = ({ activeIndex }) => {
    return (
        <>
            {workItems.map(item => (
                <WorkItem
                    key={item.id}
                    {...item}
                    isVisible={activeIndex === item.id}
                />
            ))}
        </>
    );
};

EcommerceWorks.propTypes = {
    activeIndex: PropTypes.number.isRequired,
};

export default EcommerceWorks;
