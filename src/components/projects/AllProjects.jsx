import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import EcommerceWorks from '../all-works/EcommerceWorks';
import AllWorks from '../all-works/AllWorks';
import PortfolioWorks from '../all-works/PortfolioWorks';




function AllProjects() {

    const svgIcon = [
        {
            id: 1,
            svg: (
                <svg
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMin meet"
                    className="--icon --icon-arrow-right w-14"
                >
                    <path
                        d="M4.77 11.943h13.321m1.025 0L11.943 4.77m7.173 7.173-7.173 7.173"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="square"
                        strokeLinejoin="square"
                    />
                </svg>
            )
        }
    ];

    // Items array with routes
    const items = [
        { name: 'Tech Educators', route: '/' },
        { name: 'Ink Of Violet', route: '/route2' },
        { name: 'HMM', route: '/route3' },
        { name: 'The Breedling', route: '/route4' },
        { name: 'Tech Centre', route: '/route4' },
        { name: 'Concept Capers', route: '/route4' },
        { name: 'Downstream', route: '/route4' },
        { name: 'Tonic University', route: '/route4' },
    ];

    const items2 = [
        { name: 'div 1', route: '/page1' },
        { name: 'div 2', route: '/page2' },
        { name: 'div 3', route: '/page3' },
    ];

    const items3 = [
        { name: 'div 1', route: '/page1' },
        { name: 'div 2', route: '/page2' },
        { name: 'div 3', route: '/page3' },
    ];


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [toggle, setToggle] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [routActive, setRoutActive] = useState(0);
    const [mouseActive, setMouseActive] = useState(true);
    let intervalRef = useRef(null); // Use a ref to keep track of the interval

    const updateToggle = (id) => {
        setToggle(id);
    };

    // Update routActive when the mouse leaves a div
    const handleMouseLeave = (index) => {
        setActiveIndex(index);   // Set the activeIndex to the current index
        setRoutActive(index);    // Update routActive to the current index
    };

    // Function to start the interval timer
    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            let itemCount;

            // Toggle ke hisaab se items count calculate karo
            if (toggle === 0) {
                itemCount = items.length; // toggle 0 ke liye items array
            } else if (toggle === 1) {
                itemCount = items2.length; // toggle 1 ke liye items2 array
            } else if (toggle === 2) {
                itemCount = items3.length; // toggle 2 ke liye items3 array
            }

            // Wrap around activeIndex based on itemCount
            setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
            setRoutActive((prevIndex) => (prevIndex + 1) % itemCount);
        }, 10000);
    };

    // Function to clear the interval timer
    const clearTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        setActiveIndex(0);
        setRoutActive(0);
        startTimer(); // Start the timer on mount

        return () => clearTimer(); // Clear the timer when the component unmounts
    }, [toggle]);

    const mouseenter = () => {
        setMouseActive(false);
        clearTimer(); // Pause and reset the timer on mouse enter
    };

    const mouseleave = () => {
        setMouseActive(true);
        startTimer(); // Restart the timer on mouse leave
    };


    // conatiner dragable logic
    


    return (
        <>
            <div>
                {/* dgra functionality baki hai  */}
                <div className="h-fit bg-red-400 !overflow-visible">
                    <div className='mySwiper !overflow-visible'>
                   <div className='flex items-start'>
                   
                   <button
                        className={`group cursor-pointer h-[80px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center pointer-cursor ${toggle === 0 ? 'bg-gray-800' : ''
                            }`}
                        onClick={() => updateToggle(0)}
                    >
                        <div className="magnetic-btn relative w-full h-full">
                            <span
                                className={`relative overflow-hidden w-full h-full block left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor font-TTCPro text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 px-10 ${toggle === 0 ? 'bg-blackColor' : 'bg-bodyColor'}`}
                            >
                                <span className={`text-[21px] font-TTCPro font-semibold ${toggle === 0 ? 'text-bodyColor' : 'text-blackColor'}`}>
                                    All <sup>08</sup>
                                </span>
                            </span>
                        </div>
                    </button>
                  
                   
                    <button
                        className="group cursor-pointer h-[80px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center"
                        onClick={() => updateToggle(1)}
                    >
                        <div className="magnetic-btn relative w-full h-full">
                            <span
                                className={`relative overflow-hidden w-full h-full block left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor font-TTCPro text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 px-10 ${toggle === 1 ? 'bg-blackColor' : 'bg-bodyColor'}`}
                            >
                                <span className={`text-[21px] font-TTCPro font-semibold ${toggle === 1 ? 'text-bodyColor' : 'text-blackColor'}`}>
                                    Branding <sup>03</sup>
                                </span>
                            </span>
                        </div>
                    </button>
                    
                    <button
                        className="group cursor-pointer h-[80px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center"
                        onClick={() => updateToggle(2)}
                    >
                        <div className="magnetic-btn relative w-full h-full">
                            <span
                                className={`relative overflow-hidden w-full h-full block left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor font-TTCPro text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 px-10 ${toggle === 2 ? 'bg-blackColor' : 'bg-bodyColor'}`}
                            >
                                <span className={`text-[21px] font-TTCPro font-semibold ${toggle === 2 ? 'text-bodyColor' : 'text-blackColor'}`}>
                                    Web Design & Build <sup>05</sup>
                                </span>
                            </span>
                        </div>
                    </button>
                   </div>
                    </div>
                </div>
                {/* dgra functionality baki hai  */}

                <div className={`main-project-con flex`} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                    <div className='w-full'>

                        {/* Toggle 1 */}
                        <div
                            className={`border border-blackColor relative transition-all duration-300 transform ${toggle === 0 ? 'block' : 'hidden'
                                }`}
                        >
                            <div className="">
                                {items.map((item, index) => (
                                    <NavLink
                                        to={item.route}  // Use the route for each item
                                        key={index}
                                        className={`group relative block w-full border border-blackColor transform box min-h-[110px] px-8 overflow-hidden ${hoveredIndex === index || hoveredIndex === null ? 'text-blackColor' : 'text-gray-400'} ${toggle === 0 ? 'tab-ani' : ''}`}
                                        onMouseEnter={() => {
                                            setActiveIndex(index);
                                            setHoveredIndex(index);
                                        }}
                                        onMouseLeave={() => {
                                            handleMouseLeave(index);
                                            setHoveredIndex(null);
                                        }}
                                    >

                                        {svgIcon.map((itemsvg) => (
                                            <span key={itemsvg.id} className='absolute -left-14 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-8 z-20 pointer-events-none'>{itemsvg.svg}</span>
                                        ))}

                                        <span className='text-[60px] top-1/2 -translate-y-1/2 font-TTCPro font-bold absolute left-8 z-20 transition-all duration-300 ease-in-out group-hover:left-24'>{item.name}</span>
                                        <span className={`absolute top-0 left-0 h-full w-full bg-gray-300 origin-left scale-x-0 ${activeIndex === index && mouseActive && toggle === 0 ? "animate-moveto" : ""}`}></span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* Toggle 2 */}
                        <div
                            className={`border border-blackColor relative transition-all duration-300 transform ${toggle === 1 ? 'block tab-ani' : 'hidden'}`}
                        >
                            {items2.map((items2, index) => (
                                <NavLink
                                    to={items2.route}
                                    key={index}
                                    className={`group relative block w-full border border-blackColor transform box min-h-[110px] px-8 overflow-hidden ${hoveredIndex === index || hoveredIndex === null ? 'text-blackColor' : 'text-gray-400'} ${toggle === 1 ? 'tab-ani' : ''}`}
                                    onMouseEnter={() => {
                                        setActiveIndex(index);
                                        setHoveredIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        handleMouseLeave(index);
                                        setHoveredIndex(null);
                                    }}
                                >

                                    {svgIcon.map((itemsvg) => (
                                        <span key={itemsvg.id} className='absolute -left-14 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-8 z-20 pointer-events-none'>{itemsvg.svg}</span>
                                    ))}

                                    <span className='text-[60px] top-1/2 -translate-y-1/2 font-TTCPro font-bold absolute left-8 z-20 transition-all duration-300 ease-in-out group-hover:left-24'>{items2.name}</span>
                                    <span
                                        className={`absolute top-0 left-0 h-full w-full bg-gray-300 scale-x-0 origin-left ${activeIndex === index && mouseActive && toggle === 1 ? "animate-moveto" : ""}`}
                                    ></span>

                                </NavLink>
                            ))}
                        </div>

                        {/* Toggle 3 */}
                        <div
                            className={`border border-blackColor relative transition-all duration-300 transform ${toggle === 2 ? 'block tab-ani' : 'hidden'}`}
                        >
                            {items3.map((items3, index) => (
                                <NavLink
                                    to={items3.route}
                                    key={index}
                                    className={`group relative block w-full border border-blackColor transform box min-h-[110px] px-8 overflow-hidden ${hoveredIndex === index || hoveredIndex === null ? 'text-blackColor' : 'text-gray-400'} ${toggle === 2 ? 'tab-ani' : ''}`}
                                    onMouseEnter={() => {
                                        setActiveIndex(index);
                                        setHoveredIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        handleMouseLeave(index);
                                        setHoveredIndex(null);
                                    }}
                                >

                                    {svgIcon.map((itemsvg) => (
                                        <span key={itemsvg.id} className='absolute -left-14 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-8 z-20 pointer-events-none'>{itemsvg.svg}</span>
                                    ))}

                                    <span className='text-[60px] top-1/2 -translate-y-1/2 font-TTCPro font-bold absolute left-8 z-20 transition-all duration-300 ease-in-out group-hover:left-24'>{items3.name}</span>
                                    <span
                                        className={`absolute top-0 left-0 h-full w-full bg-gray-300 scale-x-0 origin-left ${activeIndex === index && mouseActive && toggle === 2 ? "animate-moveto" : ""}`}
                                    ></span>
                                </NavLink>
                            ))}
                        </div>

                    </div>

                    <div className='w-full'>
                        {/* Toggle 1 cont */}
                    <div className={` w-full ${toggle === 0 ? 'block' : 'hidden'}`}>
                        {/* Update rendering based on activeIndex */}
                        <div className={`${activeIndex === 0 && toggle === 0 ? 'block' : 'hidden'}`}>
                            <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 1 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 2 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 3 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 4 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 5 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 6 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 7 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                    </div>

                    {/* Toggle 2 cont */}
                    <div className={` w-full ${toggle === 1 ? 'block' : 'hidden'}`}>
                        {/* Update rendering based on activeIndex */}
                        <div className={`${activeIndex === 0 && toggle === 1 ? 'block' : 'hidden'}`}>
                            <EcommerceWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 1 && toggle === 1 ? 'block' : 'hidden'}`}>
                            <EcommerceWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 2 && toggle === 1 ? 'block' : 'hidden'}`}>
                            chang every 10s 3
                        </div>
                    </div>

                    {/* Toggle 3 cont */}
                    <div className={` w-full ${toggle === 2 ? 'block' : 'hidden'}`}>
                        {/* Update rendering based on activeIndex */}
                        <div className={`${activeIndex === 0 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 1 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 2 && toggle === 2 ? 'block' : 'hidden'}`}>
                            chang every 10s 3
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AllProjects;
