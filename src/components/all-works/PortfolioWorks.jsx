// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import DesignTwo from '../../assets/homedesign3.mp4';
import { useProjectAllContext } from '../../context/ProjectAllContext';
import { NavLink } from 'react-router-dom';

const workItems = [
    { id: 0, title: 'Ink of Violet', videoSrc: DesignTwo, type: 'video', buttonText: 'Branding & Identity1', toggleType: 0, link: '/'  },
    { id: 1, title: 'Creative Ink', videoSrc: DesignTwo, type: 'video', buttonText: 'Branding & Identity', toggleType: 1, link: '/'  },
    { id: 2, title: 'Creative Ink', videoSrc: DesignTwo, type: 'video', buttonText: 'Branding & Identity', toggleType: 0, link: '/'  },
    { id: 3, title: 'Creative Ink', videoSrc: DesignTwo, type: 'video', buttonText: 'Branding & Identity', toggleType: 1, link: '/'  },
    { id: 4, title: 'Creative Ink', videoSrc: DesignTwo, type: 'video', buttonText: 'Branding & Identity', toggleType: 2, link: '/'  },
];

const WorkItem = ({ title, videoSrc, isVisible, buttonText, toggleType, link }) => {

    const { updateToggle } = useProjectAllContext();

    return (
        <div className={`${isVisible ? 'block' : 'hidden'}`}>
            <div className='w-full'>
                <NavLink to={link} className='groups-m bg-blackColor'>
                    <div className='w-full video-bg overflow-hidden'>
                        <video autoPlay loop muted className='w-full'>
                            <source src={videoSrc} />
                        </video>
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
    videoSrc: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired,
    toggleType: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

function PortfolioWorks({ activeIndex }) {
    return (
        <>
            {workItems.map(item => (
                <WorkItem
                    key={item.id}
                    title={item.title}
                    videoSrc={item.videoSrc}
                    isVisible={activeIndex === item.id}
                    buttonText={item.buttonText}
                    toggleType={item.toggleType}
                    link={item.link}
                />
            ))}
        </>
    );
}

PortfolioWorks.propTypes = {
    activeIndex: PropTypes.number.isRequired,
};

export default PortfolioWorks;