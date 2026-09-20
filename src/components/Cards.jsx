// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import BrandingIcon from '../icons/BrandingIcon';
import WebDesignIcon from '../icons/WebDesignIcon';
import FronEndIcon from '../icons/FronEndIcon';
import DesignSupportIcon from '../icons/DesignSupportIcon';
import RightArrowIcon from '../icons/RightArrowIcon';
import { NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Cards() {

    const data = [
        {
            branding: <BrandingIcon className="sm:size-16 size-10" />,
            title: "Branding",
            disc: "Create or refine a visual identity to celebrate your unique personality and proposition.",
            hrf: "/branding",
            class: "card relative lg:w-[100%] border border-blackColor bg-bodyColor border-b-0 md:border-b lg:h-[22vw] sm:h-[50vw] h-[55vw] md:w-[45vw] block pointer-cursor"
        },
        {
            branding: <WebDesignIcon className="sm:size-16 size-10" />,
            title: "Website Design",
            disc: "Amplify your brands presence and engage your audience with an impactful and interactive website.",
            hrf: "/website-design",
            class: "card relative lg:w-[100%] border border-blackColor border-b-0 md:border-b bg-bodyColor lg:h-[22vw] sm:h-[50vw] h-[55vw] top-12 lg:mt-16 md:w-[45vw] block pointer-cursor"
        },
        {
            branding: <FronEndIcon className="sm:size-16 size-10" />,
            title: "Front-End",
            disc: "I build efficient, responsive websites using modern web technologies and best design principles.",
            hrf: "/frontend-design",
            class: "card relative lg:w-[100%] border border-blackColor md:border-b bg-bodyColor lg:h-[22vw] sm:h-[50vw] h-[55vw] lg:mt-7 md:w-[45vw] block pointer-cursor"
        },
        {
            branding: <DesignSupportIcon className="sm:size-16 size-10" />,
            title: "Design Support",
            disc: "An ongoing engagement to help with your regular or ad-hoc creative requirements and output.",
            hrf: "/design-support",
            class: "card lg:w-[100%] border border-blackColor relative top-12 bg-bodyColor lg:h-[22vw] sm:h-[50vw] h-[55vw] md:w-[45vw] block pointer-cursor"
        }
    ]

    const cardRef = useRef(null);
    // har card ke liye alag-alag refs store karne ke liye array
    const itemRefs = useRef([]);

    useGSAP(() => {
        gsap.fromTo(
            ".card",
            { y: "100%" },
            {
                y: "0%",
                stagger: 0.1,
                duration: 2.5,
                ease: "elastic.out(1,0.3)",
                scrollTrigger: {
                    start: "0% 80%",
                    end: "50% 50%",
                    trigger: cardRef.current,
                    // markers: "true",
                }
            }
        )
    })

    const handleMouseEnter = (index) => {
        const el = itemRefs.current[index];
        if (!el) return;

        const overlay = el.querySelector('.hover-overlay');
        const title = el.querySelector('.card-title');
        const discBox = el.querySelector('.disc-box');
        const discText = el.querySelector('.card-disc');
        const arrowIcon = el.querySelector('.arrow-icon');
        const brandIcon = el.querySelector('.brand-icon');

        gsap.to(overlay, { scale: 0.95, backgroundColor: "#000", duration: 0.2, ease: "power2.out" });
        gsap.to([title, discText], { color: "#fff", duration: 0.3 });
        gsap.to(arrowIcon, { left: "5%", color: "#fff", duration: 0.5, ease: "power2.out" });
        gsap.to(brandIcon, { left: "6rem", color: "#fff", duration: 0.5, ease: "power2.out" });

        // height: "auto" -> GSAP khud real content height measure karke smooth tween karta hai
        gsap.to(discBox, { height: "auto", duration: 0.5, ease: "power2.out" });
        gsap.fromTo(discText, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, delay: 0.1 });
    }

    const handleMouseLeave = (index) => {
        const el = itemRefs.current[index];
        if (!el) return;

        const overlay = el.querySelector('.hover-overlay');
        const title = el.querySelector('.card-title');
        const discBox = el.querySelector('.disc-box');
        const discText = el.querySelector('.card-disc');
        const arrowIcon = el.querySelector('.arrow-icon');
        const brandIcon = el.querySelector('.brand-icon');

        gsap.to(overlay, { scale: 1, backgroundColor: "transparent", duration: 0.2, ease: "power2.out" });
        gsap.to([title, discText], { color: "inherit", duration: 0.3 });
        gsap.to(arrowIcon, { left: "-30%", color: "inherit", duration: 0.5, ease: "power2.out" });
        gsap.to(brandIcon, { left: "1rem", color: "inherit", duration: 0.5, ease: "power2.out" });

        gsap.to(discBox, { height: 0, duration: 0.4, ease: "power2.inOut" });
        gsap.to(discText, { opacity: 0, duration: 0.2 });
    }

    return (
        <>
            <div ref={cardRef} className='xl:flex items-start justify-between md:flex-wrap lg:flex-nowrap grid grid-cols-2 mb-28 md:mb-0'>
                {data.map((item, index) => (
                    <NavLink
                        to={item.hrf}
                        key={item.hrf}
                        ref={(el) => (itemRefs.current[index] = el)}
                        className={`${item.class}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className='transition-all duration-300 h-full relative'>
                            <span className='hover-overlay absolute top-0 left-0 origin-center w-full h-full rounded-lg' />
                            <div className='relative h-full overflow-hidden pt-7 flex flex-col justify-between md:block select-none'>
                                <div className='relative'>
                                    <span className='arrow-icon cards-icon absolute top-0 sm:left-[-25%] left-[-30%]'>
                                        <RightArrowIcon className="sm:size-16 size-8" />
                                    </span>
                                    <span className='brand-icon cards-icon relative left-4'>
                                        {item.branding}
                                    </span>
                                </div>
                                <div className='md:absolute bottom-[0] left-0 w-full sm:px-8 px-6'>
                                    <h3 className='card-title font-TTCPro md:text-[32px] sm:text-[27px] text-[18px] font-[500] mb-2'>{item.title}</h3>
                                    <div className='disc-box overflow-hidden' style={{ height: 0 }}>
                                        <p className='card-disc font-TTCPro md:text-[21px] text-[18px] font[450] md:block hidden pb-6'>{item.disc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </>
    )
}

export default Cards