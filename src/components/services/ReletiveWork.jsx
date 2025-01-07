import React, { useState, useEffect, useRef } from 'react';
import DesignTwo from '../../assets/project3.webp';
import DesignThree from '../../assets/project6.webp';
import DesignFour from '../../assets/project2.webp';
import DesignFive from '../../assets/project9.webp';
import DesignSix from '../../assets/project4.webp';
import DesignSeven from '../../assets/project5.webp';
import DesignEight from '../../assets/project1.webp';
import DesignNine from '../../assets/project10.webp';
import Designten from '../../assets/project11.webp';
import DesignElevin from '../../assets/project13.webp';
import Refresh from '../../assets/refresh.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useProjectAllContext } from '../../context/ProjectAllContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function ReletiveWork() {


    const location = useLocation();
    const [works, setWorks] = useState([]);
    const [isRotating, setIsRotating] = useState(false); // State to toggle rotation


    
    const { updateToggle } = useProjectAllContext();
    const navigate = useNavigate();
    const openTab = (tab) => {
        updateToggle(tab)
        navigate(`/projects`)
    }

    const workItemsByPage = {
        '/branding': [
            { title: 'Header Goes', image: DesignTwo, btn: "Bussiness", tab: 2, url: "https://glittering-marshmallow-440edb.netlify.app/" },
            { title: 'Fix Computers', image: DesignThree, btn: "Bussiness", tab: 2, url: "https://gleeful-fenglisu-06cdc4.netlify.app/" },
            { title: 'Redefine', image: DesignFour, btn: "Bussiness", tab: 2, url: "https://redefine-three.vercel.app/" },
            { title: 'Growing Logistics', image: DesignFive, btn: "Bussiness", tab: 2, url: "https://lucent-boba-5f2a5f.netlify.app/" },
        ],
        '/website-design': [
            { title: 'Redefine', image: DesignFour, btn: "Bussiness", tab: 2, url: "https://glittering-marshmallow-440edb.netlify.app/" },
            { title: 'Ochi', image: DesignEight, btn: "Bussiness", tab: 2, url: "https://ochi99.netlify.app/" },
            { title: 'Julia Noam', image: DesignNine, btn: "Portfolio", tab: 1, url: "https://grand-jalebi-65aa54.netlify.app/" },
            { title: 'Doctor', image: Designten, btn: "Portfolio", tab: 1, url: "https://fancy-empanada-211970.netlify.app/" },
        ],
        '/frontend-design': [
            { title: 'Health-Plus', image: DesignElevin, btn: "Portfolio", tab: 1, url: "https://health-plus-brown.vercel.app/" },
            { title: 'Doctor', image: Designten, btn: "Portfolio", tab: 1, url: "https://fancy-empanada-211970.netlify.app/" },
            { title: 'Redefine', image: DesignFour, btn: "Bussiness", tab: 2, url: "https://glittering-marshmallow-440edb.netlify.app/" },
            { title: 'Sharad Sahu', image: DesignSix, btn: "Portfolio", tab: 1, url: "https://sharadsportfolio.netlify.app/" },
        ],
        '/design-support': [
            { title: 'Header Goes', image: DesignTwo, btn: "Bussiness", tab: 2, url: "https://glittering-marshmallow-440edb.netlify.app/" },
            { title: 'Redefine', image: DesignFour, btn: "Bussiness", tab: 2, url: "https://glittering-marshmallow-440edb.netlify.app/" },
            { title: 'Sharad Sahu', image: DesignSix, btn: "Portfolio", tab: 1, url: "https://sharadsportfolio.netlify.app/" },
            { title: 'I am William', image: DesignSeven, btn: "Portfolio", tab: 1, url: "https://vocal-chimera-107087.netlify.app/" },
        ],
    };

    const getRandomWorks = (items, count) => {
        const shuffled = [...items].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const refreshWorks = () => {
        setIsRotating(true); // Start rotation
        const currentPath = location.pathname;
        const worksForPage = workItemsByPage[currentPath] || [];
        const randomWorks = getRandomWorks(worksForPage, 2);
        setWorks(randomWorks);
        setTimeout(() => setIsRotating(false), 500); // Stop rotation after 500ms
    };

    useEffect(() => {
        refreshWorks(); // Initial load ke liye random works set karta hai
    }, [location.pathname]);

    const latterRef = useRef(null);
    useGSAP(() => {
        gsap.from(".lettert span", {
            y: 110,
            duration: 0.4,
            stagger: 0.1,
            scrollTrigger: {
                trigger: latterRef.current,
                start: "0% 80%",
                end: "50% 50%",
            }
        })
    })


    return (
        <div className='lg:mt-[160px] mt-[100px]'>
            <div>
                <div className='flex items-end lg:flex-row flex-col'>

                    <div className='w-full'>
                        <div className={`group pointer-cursor h-[80px] w-[80px] flex-shrink-0 border border-blackColor bg-blackColor flex justify-start items-center lg:border-r-0 ml-auto select-none`} onClick={refreshWorks}>
                            <div className='magnetic-btn relative w-full h-full'>
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] font-semibold content-center inline-flex items-center justify-center'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className={`text-center block w-fit ${isRotating ? 'clickRotate' : ''}`}><img src={Refresh} alt="" className='w-12 h-12' /></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='lg:text-[84px] sm:text-[45px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] md:block flex items-start flex-wrap justify-center text-blackColor lg:w-[67.5vw] w-full border border-blackColor flex-shrink-0 py-4' ref={latterRef}>
                        <span className='lettert inline-block overflow-hidden'>
                            <span className='inline-block relative'>R</span>
                            <span className='inline-block relative'>e</span>
                            <span className='inline-block relative'>l</span>
                            <span className='inline-block relative'>a</span>
                            <span className='inline-block relative'>t</span>
                            <span className='inline-block relative'>e</span>
                            <span className='inline-block relative'>d</span>
                        </span>&nbsp;
                        <span className='lettert inline-block overflow-hidden'>
                            <span className='inline-block relative'>W</span>
                            <span className='inline-block relative'>o</span>
                            <span className='inline-block relative'>r</span>
                            <span className='inline-block relative'>k</span>
                        </span>
                    </div>
                </div>

                <div className='w-full grid lg:grid-cols-2'>
                    {works.map((work, index) => (
                        <div key={index}>
                            <div className=' w-full lg:ml-auto ml-0'>
                                <div className='w-full'>
                                    <NavLink className='groups-m bg-blackColor pointer-cursor' to={work.url}>
                                        <div className='w-full video-bg overflow-hidden h-full'>

                                                <img src={work.image} alt='img' className='scal-up  w-full lg:h-[28vw] h-full' /> {/* 8. Displaying dynamic image/video */}
                                   
                                        </div>
                                        <div className='lg:h-[100px] h-[80px] w-full md:text-[37px] lg:text-[40px] text-[25px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                                            {work.title}
                                        </div>
                                    </NavLink>
                                    {work.btn && work.btn.trim() !== "" && (
                                        <div
                                            className='group pointer-cursor h-[80px] xl:w-[15vw] lg:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 select-none'
                                            onClick={() => openTab(work.tab)}
                                        >
                                            <div className='magnetic-btn relative w-full h-full'>
                                                <span
                                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] inline-block font-semibold content-center'
                                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                                >
                                                    <span className='text-center w-full block'>{work.btn}</span>
                                                </span>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ReletiveWork;
