import React from 'react';
import PropTypes from 'prop-types';
import { useProjectAllContext } from '../../context/ProjectAllContext';
import DesignOne from '../../assets/project1.webp';
import DesignTwo from '../../assets/project2.webp';
import DesignThree from '../../assets/project3.webp';
import DesignFour from '../../assets/project4.webp';
import DesignFive from '../../assets/project5.webp';
import Designsixe from '../../assets/project6.webp';
import Designseven from '../../assets/project7.webp';
import Designeight from '../../assets/project8.webp';
import Designnine from '../../assets/project9.webp';
import DesignTen from '../../assets/project10.webp';
import { NavLink } from 'react-router-dom';

const works = [
    { id: 0, title: 'Ochi', media: DesignOne, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://ochi99.netlify.app/' },
    { id: 1, title: 'Sundown Studio', media: DesignTwo, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://magnificent-smakager-29d9e5.netlify.app/' },
    { id: 2, title: 'Header Goes', media: DesignThree, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://magnificent-smakager-29d9e5.netlify.app/' },
    { id: 3, title: 'Sharad Sahu', media: DesignFour, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://sharadsportfolio.netlify.app/' },
    { id: 4, title: 'I am William', media: DesignFive, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://vocal-chimera-107087.netlify.app/' },
    { id: 5, title: 'Fix Computers', media: Designsixe, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://gleeful-fenglisu-06cdc4.netlify.app/' },
    { id: 6, title: 'MantaTrade', media: Designseven, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://ornate-gelato-b0fa21.netlify.app/' },
    { id: 7, title: 'Oraman', media: Designeight, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://gregarious-syrniki-7b45c9.netlify.app/' },
    { id: 8, title: 'Growing Logistics', media: Designnine, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://lucent-boba-5f2a5f.netlify.app/' },
    { id: 9, title: 'Julia Noam', media: DesignTen, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://grand-jalebi-65aa54.netlify.app/' },
];

const WorkItem = ({ title, media, type, isVisible, buttonText, toggleType, link }) => {
    const { updateToggle } = useProjectAllContext();

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
                    <div className='lg:h-[100px] md:h-[90px] h-[80px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                        {title}
                    </div>
                </NavLink>
                <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto pointer-cursor' onClick={() => updateToggle(toggleType)}>
                    <div className='magnetic-btn relative w-full h-full'>
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center group-active:left-0 group-active:bottom-0'
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

function AllWorks({ activeIndex }) {
    return (
        <>
            {works.map((work) => (
                <WorkItem
                    key={work.id}
                    {...work}
                    isVisible={activeIndex === work.id}
                />
            ))}
        </>
    );
}

AllWorks.propTypes = {
    activeIndex: PropTypes.number.isRequired,
};

export default AllWorks;
