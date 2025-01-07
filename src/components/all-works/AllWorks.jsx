// React aur PropTypes ko import kar rahe hain taaki components aur props ki validation ho sake
import React from 'react';
import PropTypes from 'prop-types';

// ProjectAllContext ka custom hook import kar rahe hain jo context ka access dega
import { useProjectAllContext } from '../../context/ProjectAllContext';

// Webp images ko import kar rahe hain jo projects ke liye use hongi
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
import DesignEleven from '../../assets/project12.webp';
import DesignTwelve from '../../assets/project11.webp';
import DesignThirten from '../../assets/project13.webp';

// NavLink ko import kar rahe hain jo React Router se aata hai aur links banane mein madad karta hai
import { NavLink } from 'react-router-dom';

// Projects ka data ek array mein define kar rahe hain jisme id, title, media, type, buttonText, toggleType aur link hain
const works = [
    { id: 0, title: 'Ochi', media: DesignOne, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://redefine-n9wq7itw1-priyajeets-projects.vercel.app/' },
    { id: 1, title: 'Redefine', media: DesignTwo, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://redefine-three.vercel.app/' },
    { id: 2, title: 'Header Goes', media: DesignThree, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://magnificent-smakager-29d9e5.netlify.app/' },
    { id: 3, title: 'Sharad Sahu', media: DesignFour, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://sharadsportfolio.netlify.app/' },
    { id: 4, title: 'I am William', media: DesignFive, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://vocal-chimera-107087.netlify.app/' },
    { id: 5, title: 'Fix Computers', media: Designsixe, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://gleeful-fenglisu-06cdc4.netlify.app/' },
    { id: 6, title: 'MantaTrade', media: Designseven, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://ornate-gelato-b0fa21.netlify.app/' },
    { id: 7, title: 'Oraman', media: Designeight, type: 'image', buttonText: 'Business', toggleType: 2, link: 'https://gregarious-syrniki-7b45c9.netlify.app/' },
    { id: 8, title: 'Growing Logistics', media: Designnine, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://lucent-boba-5f2a5f.netlify.app/' },
    { id: 9, title: 'Julia Noam', media: DesignTen, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://grand-jalebi-65aa54.netlify.app/' },
    { id: 10, title: 'Sukri', media: DesignEleven, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://prismatic-klepon-2c9dcc.netlify.app/' },
    { id: 11, title: 'Doctor', media: DesignTwelve, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://fancy-empanada-211970.netlify.app/' },
    { id: 12, title: 'Health-Plus', media: DesignThirten, type: 'image', buttonText: 'Portfolio', toggleType: 1, link: 'https://health-plus-brown.vercel.app/' },
];

// WorkItem component ko define kar rahe hain jo ek single project item ko render karega
const WorkItem = ({ title, media, type, isVisible, buttonText, toggleType, link }) => {
    // ProjectAllContext se updateToggle function ko use kar rahe hain
    const { updateToggle } = useProjectAllContext();

    return (
        // Agar isVisible true hai toh item show hoga, nahi toh hidden hoga
        <div className={`${isVisible ? 'block' : 'hidden'}`}>
            <div className='w-full'>
                {/* Project ke link ke liye NavLink component use kar rahe hain */}
                <NavLink to={link} className='groups-m pointer-cursor !bg-blackColor pointer-cursor block'>
                    {/* Media ko show karne ke liye agar type 'video' hai toh video element use karenge */}
                    <div className='w-full video-bg overflow-hidden lg:h-[25vw] sm:h-[52vw] h-[52vw] border border-blackColor border-b-0 border-l-0'>
                        {type === 'video' ? (
                            <video autoPlay loop muted className='scal-up w-full h-full object-cover'>
                                <source src={media} />
                            </video>
                        ) : (
                            // Agar type 'image' hai toh img element use karenge
                            <img src={media} alt={title} className='scal-up w-full h-full object-cover' />
                        )}
                    </div>
                    {/* Project ka title yaha show ho raha hai */}
                    <div className='lg:h-[100px] md:h-[90px] h-[80px] w-full md:text-[37px] lg:text-[40px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                        {title}
                    </div>
                </NavLink>
                {/* Toggle button jo project ko switch karne ke liye hai, click pe updateToggle function call hoga */}
                <div className='group pointer-cursor h-[80px] xl:w-[20vw] lg:w-[28vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto pointer-cursor' onClick={() => updateToggle(toggleType)}>
                    <div className='magnetic-btn relative w-full h-full'>
                        <span
                            className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro md:text-[19px] lg:text-[20px] tracking-[2px] inline-block font-semibold content-center group-active:left-0 group-active:bottom-0'
                            style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                        >
                            {/* Button ka text show ho raha hai */}
                            <span className='text-center w-full block'>{buttonText}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes ka use kar ke props ki types define kar rahe hain, ye zaroori hai taaki sahi data mile
WorkItem.propTypes = {
    title: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video', 'image']).isRequired,
    isVisible: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired,
    toggleType: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
};

// AllWorks component mein projects ko render karte hain jo activeIndex ke hisaab se filter hote hain
function AllWorks({ activeIndex }) {
    return (
        <>
            {works.map((work) => (
                // WorkItem component ko map function ke saath render kar rahe hain aur activeIndex ke basis pe isVisible set kar rahe hain
                <WorkItem
                    key={work.id}
                    {...work}
                    isVisible={activeIndex === work.id}
                />
            ))}
        </>
    );
}

// AllWorks component ke liye bhi PropTypes define kar rahe hain
AllWorks.propTypes = {
    activeIndex: PropTypes.number.isRequired,
};

// AllWorks component ko export kar rahe hain taaki dusri files mein use kiya ja sake
export default AllWorks;
