// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import EcommerceWorks from '../all-works/EcommerceWorks';
import AllWorks from '../all-works/AllWorks';
import PortfolioWorks from '../all-works/PortfolioWorks';
import { useProjectAllContext } from '../../context/ProjectAllContext';


function AllProjects() {

    const {
        hoveredIndex,
        setHoveredIndex,
        toggle,
        updateToggle,
        activeIndex,
        mouseActive,
        mouseenter,
        mouseleave,
        items,
        items2,
        items3,
        handleMouseLeave,
        setActiveIndex
    } = useProjectAllContext();

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
    
    return (
        <>
            <div>
                {/* drag functionality baki hai  */}
                <div className="h-fit mt-16">
                    <div className='mySwiper'>
                   <div className='flex items-start md:flex-row flex-col'>
                   
                   <button
                        className={`group h-[80px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center pointer-cursor pointer-cursor relative border-r-0 md:z-30 z-10 ${toggle === 0 ? 'bg-gray-800' : ''
                            } `}
                        onClick={() => updateToggle(0)}
                    >
                        <div className="magnetic-btn relative w-full h-full">
                            <span
                                className={`relative bg-blackColor overflow-hidden w-full h-full block left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor font-TTCPro text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 px-10 group-active:left-0 group-active:bottom-0 border-b-0 hover:border-b hover:border-t`}
                            >
                                <span className={`text-[21px] font-TTCPro font-semibold relative z-20 ${toggle === 0 ? 'text-bodyColor' : 'text-blackColor'}`}>
                                    All <sup>11</sup>
                                </span>
                                <span className={`absolute top-0 right-0 w-full h-full bg-bodyColor z-10 origin-right scale-x-0 transition-all duration-500 ${toggle === 0 ? 'scale-x-0' : 'scale-x-100'}`}></span>
                            </span>
                        </div>
                    </button>
                  
                   
                    <button
                        className={`group h-[80px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center pointer-cursor pointer-cursor relative md:z-20 z-20 border-r-0 ${toggle === 1 ? 'bg-gray-800' : ''}`}
                        onClick={() => updateToggle(1)}
                    >
                        <div className="magnetic-btn relative w-full h-full">
                            <span
                                className={`relative bg-blackColor overflow-hidden w-full h-full block left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor font-TTCPro text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 px-10 group-active:left-0 group-active:bottom-0 border-b-0 border-t-0 hover:border-b hover:border-t`}
                            >
                                <span className={`text-[21px] font-TTCPro font-semibold relative z-20 ${toggle === 1 ? 'text-bodyColor' : 'text-blackColor'}`}>
                                    Portfolio <sup>03</sup>
                                </span>
                                <span className={`absolute top-0 right-0 w-full h-full bg-bodyColor z-10 origin-right scale-x-0 transition-all duration-500 ${toggle === 1 ? 'scale-x-0' : 'scale-x-100'}`}></span>
                            </span>
                        </div>
                    </button>
                    
                    <button
                        className={`group h-[80px] flex-shrink-0 border border-blackColor bg-blackColor border-b-0 md:flex justify-start items-center pointer-cursor relative md:z-10 z-30 border-l-0 ${toggle === 2 ? 'bg-gray-800' : ''}`}
                        onClick={() => updateToggle(2)}
                    >
                        <div className="magnetic-btn relative w-full h-full">
                            <span
                                className={`relative bg-blackColor overflow-hidden w-full h-full block left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor font-TTCPro text-[15px] tracking-[2px] font-bold content-center transition-all duration-500 px-10 group-active:left-0 group-active:bottom-0 border-b-0 border-t-0 hover:border-b hover:border-t`}
                            >
                                <span className={`text-[21px] font-TTCPro font-semibold relative z-20 ${toggle === 2 ? 'text-bodyColor' : 'text-blackColor'}`}>
                                    Bussinuss <sup>08</sup>
                                </span>
                                <span className={`absolute top-0 right-0 w-full h-full bg-bodyColor z-10 origin-right scale-x-0 transition-all duration-500 ${toggle === 2 ? 'scale-x-0' : 'scale-x-100'}`}></span>
                            </span>
                        </div>
                    </button>
                   </div>
                    </div>
                </div>
                {/* drag functionality baki hai  */}

                <div className={`main-project-con relative flex lg:flex-row flex-col`} onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
                    <div className='w-full relative z-20'>

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
                                        className={`group relative block w-full border border-blackColor transform box bg-blackColor pointer-cursor ${hoveredIndex === index || hoveredIndex === null ? 'text-blackColor' : 'text-gray-400'} ${toggle === 0 ? 'tab-ani' : ''}`}
                                        onMouseEnter={() => {
                                            setActiveIndex(index);
                                            setHoveredIndex(index);
                                        }}
                                        onMouseLeave={() => {
                                            handleMouseLeave(index);
                                            setHoveredIndex(null);
                                        }}
                                    >

                                        <div className="magnetic-btn  relative w-full h-full block">
                                            <div className='bg-bodyColor lg:min-h-[110px] sm:min-h-[90px] min-h-[80px] w-full h-full relative px-8 left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor overflow-hidden group-active:left-0 group-active:bottom-0'>
                                            {svgIcon.map((itemsvg) => (
                                            <span key={itemsvg.id} className='absolute -left-14 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-8 z-20 pointer-events-none'>{itemsvg.svg}</span>
                                        ))}

                                        <span className='lg:text-[60px] sm:text-[40px] text-[30px] top-1/2 -translate-y-1/2 font-TTCPro font-bold absolute left-8 z-20 transition-all duration-300 ease-in-out group-hover:left-24'>{item.name}</span>
                                        <span className={`absolute top-0 left-0 h-full w-full bg-gray-300 origin-left scale-x-0 ${activeIndex === index && mouseActive && toggle === 0 ? "animate-moveto" : ""}`}></span>
                                            </div>
                                        </div>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        {/* Toggle 2 */}
                        <div
                            className={`border border-blackColor relative transition-all duration-300 transform bg-blackColor ${toggle === 1 ? 'block tab-ani' : 'hidden'}`}
                        >
                            {items2.map((items2, index) => (
                                <NavLink
                                    to={items2.route}
                                    key={index}
                                    className={`group relative block w-full border border-blackColor transform box min-h-[110px] pointer-cursor ${hoveredIndex === index || hoveredIndex === null ? 'text-blackColor' : 'text-gray-400'} ${toggle === 1 ? 'tab-ani' : ''}`}
                                    onMouseEnter={() => {
                                        setActiveIndex(index);
                                        setHoveredIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        handleMouseLeave(index);
                                        setHoveredIndex(null);
                                    }}
                                >

                                    <div className="magnetic-btn  relative w-full h-full block">
                                        <div className='bg-bodyColor min-h-[110px] w-full h-full relative px-8 left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor overflow-hidden group-active:left-0 group-active:bottom-0'>
                                        {svgIcon.map((itemsvg) => (
                                        <span key={itemsvg.id} className='absolute -left-14 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-8 z-20 pointer-events-none'>{itemsvg.svg}</span>
                                    ))}

                                    <span className='text-[60px] top-1/2 -translate-y-1/2 font-TTCPro font-bold absolute left-8 z-20 transition-all duration-300 ease-in-out group-hover:left-24'>{items2.name}</span>
                                    <span
                                        className={`absolute top-0 left-0 h-full w-full bg-gray-300 scale-x-0 origin-left ${activeIndex === index && mouseActive && toggle === 1 ? "animate-moveto" : ""}`}
                                    ></span>
                                        </div>
                                    </div>

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
                                    className={`group relative block w-full border border-blackColor transform box min-h-[110px] bg-blackColor  pointer-cursor ${hoveredIndex === index || hoveredIndex === null ? 'text-blackColor' : 'text-gray-400'} ${toggle === 2 ? 'tab-ani' : ''}`}
                                    onMouseEnter={() => {
                                        setActiveIndex(index);
                                        setHoveredIndex(index);
                                    }}
                                    onMouseLeave={() => {
                                        handleMouseLeave(index);
                                        setHoveredIndex(null);
                                    }}
                                >

                                   <div className="magnetic-btn  relative w-full h-full block">
                                    <div className='bg-bodyColor min-h-[110px] w-full h-full relative px-8 left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 border border-transparent group-hover:border-blackColor overflow-hidden group-active:left-0 group-active:bottom-0'>
                                    {svgIcon.map((itemsvg) => (
                                        <span key={itemsvg.id} className='absolute -left-14 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out group-hover:left-8 z-20 pointer-events-none'>{itemsvg.svg}</span>
                                    ))}

                                    <span className='text-[60px] top-1/2 -translate-y-1/2 font-TTCPro font-bold absolute left-8 z-20 transition-all duration-300 ease-in-out group-hover:left-24'>{items3.name}</span>
                                    <span
                                        className={`absolute top-0 left-0 h-full w-full bg-gray-300 scale-x-0 origin-left ${activeIndex === index && mouseActive && toggle === 2 ? "animate-moveto" : ""}`}
                                    ></span>
                                    </div>
                                   </div>
                                </NavLink>
                            ))}
                        </div>

                    </div>

                    <div className='w-full z-10 relative'>
                        {/* Toggle 1 cont */}
                    <div className={` w-full sticky top-[5%] ${toggle === 0 ? 'block' : 'hidden'}`}>
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
                        <div className={`${activeIndex === 8 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 9 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 10 && toggle === 0 ? 'block' : 'hidden'}`}>
                        <AllWorks activeIndex={activeIndex} />
                        </div>
                    </div>

                    {/* Toggle 2 cont */}
                    <div className={` w-full sticky top-[5%] ${toggle === 1 ? 'block' : 'hidden'}`}>
                        {/* Update rendering based on activeIndex */}
                        <div className={`${activeIndex === 0 && toggle === 1 ? 'block' : 'hidden'}`}>
                            <EcommerceWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 1 && toggle === 1 ? 'block' : 'hidden'}`}>
                            <EcommerceWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 2 && toggle === 1 ? 'block' : 'hidden'}`}>
                            <EcommerceWorks activeIndex={activeIndex} />
                        </div>
                    </div>

                    {/* Toggle 3 cont */}
                    <div className={` w-full sticky top-[5%] ${toggle === 2 ? 'block' : 'hidden'}`}>
                        {/* Update rendering based on activeIndex */}
                        <div className={`${activeIndex === 0 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 1 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 2 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 3 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 4 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 5 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 6 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                        <div className={`${activeIndex === 7 && toggle === 2 ? 'block' : 'hidden'}`}>
                            <PortfolioWorks activeIndex={activeIndex} />
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AllProjects;
