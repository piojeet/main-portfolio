import React, { useState, useEffect, useRef } from 'react';
import DesignTwo from '../../assets/project3.webp';
import DesignThree from '../../assets/project6.webp';
import DesignFour from '../../assets/project2.webp';
import DesignFive from '../../assets/project9.webp';
import Refresh from '../../assets/refresh.svg'
import { useLocation, useNavigate } from 'react-router-dom';
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
            { title: 'Header Goes', image: DesignTwo, btn: "Bussiness", tab: 2 },
            { title: 'Fix Computers', image: DesignThree, btn: "Bussiness", tab: 2 },
            { title: 'Sundown Studio', image: DesignFour, btn: "Bussiness", tab: 2 },
            { title: 'Growing Logistics', image: DesignFive, btn: "Bussiness", tab: 2 },
        ],
        '/website-design': [
            { title: 'Work 1: Write an about us page', image: 'https://via.placeholder.com/100' },
            { title: 'Work 2: Create team profiles', image: 'https://via.placeholder.com/100' },
            { title: 'Work 3: Create team profiles', image: 'https://via.placeholder.com/100' },
            { title: 'Work 4: Create team profiles', image: 'https://via.placeholder.com/100' },
        ],
        '/frontend-design': [
            { title: 'Work 1: Implement a contact', image: 'https://via.placeholder.com/100' },
            { title: 'Work 2: Set up email', image: 'https://via.placeholder.com/100' },
            { title: 'Work 3: Set up email', image: 'https://via.placeholder.com/100' },
            { title: 'Work 4: Set up email', image: 'https://via.placeholder.com/100' },
        ],
        '/design-support': [
            { title: 'Work 1: Implement a contact', image: 'https://via.placeholder.com/100' },
            { title: 'Work 2: Set up email', image: 'https://via.placeholder.com/100' },
            { title: 'Work 3: Set up email', image: 'https://via.placeholder.com/100' },
            { title: 'Work 4: Set up email', image: 'https://via.placeholder.com/100' },
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
                        <div className={`group pointer-cursor h-[80px] w-[80px] flex-shrink-0 border border-blackColor bg-blackColor flex justify-start items-center lg:border-r-0 ml-auto`} onClick={refreshWorks}>
                            <div className='magnetic-btn relative w-full h-full'>
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[20px] md:text-[19px] tracking-[2px] font-semibold content-center inline-flex items-center justify-center'
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
                                    <div className='groups-m bg-blackColor'>
                                        <div className='w-full video-bg overflow-hidden h-full'>

                                                <img src={work.image} alt='img' className='scal-up h-full w-full' /> {/* 8. Displaying dynamic image/video */}
                                   
                                        </div>
                                        <div className='h-[100px] w-full md:text-[37px] lg:text-[40px] text-[31px] bg-bodyColor ink-btn font-TTCPro font-semibold content-center px-6 border border-blackColor groups-hover:bg-blackColor'>
                                            {work.title}
                                        </div>
                                    </div>
                                    {work.btn && work.btn.trim() !== "" && (
                                        <div
                                            className='group pointer-cursor h-[80px] xl:w-[15vw] lg:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0'
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
