// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import DesignTwo from '../../assets/project2.webp';
import DesignOne from '../../assets/project1.webp';
import DesignThree from '../../assets/project3.webp';
import Designsixe from '../../assets/project6.webp';
import Designseven from '../../assets/project7.webp';
import Designnine from '../../assets/project9.webp';
import DesignTen from '../../assets/project10.webp';
import DesignEleven from '../../assets/project12.webp';
import DesignTwelve from '../../assets/project11.webp';
import DesignThirten from '../../assets/project13.webp';
import { useProjectAllContext } from '../../context/ProjectAllContext';
import { NavLink } from 'react-router-dom';

const workItems = [
    { id: 0, title: 'Ochi', media: DesignOne, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://ochi99.netlify.app/' },
    { id: 1, title: 'Redefine', media: DesignTwo, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://redefine-three.vercel.app/' },
    { id: 2, title: 'Header Goes', media: DesignThree, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://magnificent-smakager-29d9e5.netlify.app/' },
    { id: 3, title: 'Fix Computers', media: Designsixe, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://gleeful-fenglisu-06cdc4.netlify.app/' },
    { id: 4, title: 'MantaTrade', media: Designseven, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://ornate-gelato-b0fa21.netlify.app/' },
    { id: 5, title: 'Growing Logistics', media: Designnine, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://lucent-boba-5f2a5f.netlify.app/' },
    { id: 6, title: 'Julia Noam', media: DesignTen, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://grand-jalebi-65aa54.netlify.app/' },
    { id: 7, title: 'Sukri', media: DesignEleven, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://prismatic-klepon-2c9dcc.netlify.app/' },
    { id: 8, title: 'Doctor', media: DesignTwelve, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://fancy-empanada-211970.netlify.app/' },
        { id: 9, title: 'Health-Plus', media: DesignThirten, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://health-plus-brown.vercel.app/' },
];

const WorkItem = ({ title, media, type, isVisible, buttonText, toggleType, link }) => {
    const { updateToggle } = useProjectAllContext();

    return (
        <div className={`${isVisible ? 'block' : 'hidden'}`}>
            <div className='w-full'>
                <NavLink to={link} className='groups-m pointer-cursor block bg-blackColor'>
                    <div className='w-full video-bg overflow-hidden'>
                    {type === 'video' ? (
                            <video autoPlay loop muted className='scal-up w-full h-full object-cover'>
                                <source src={media} />
                            </video>
                        ) : (
                            <img src={media} alt={title} className='scal-up w-full h-full object-cover' />
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

function PortfolioWorks({ activeIndex }) {
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
}

PortfolioWorks.propTypes = {
    activeIndex: PropTypes.number.isRequired,
};

export default PortfolioWorks;