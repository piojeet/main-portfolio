/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Plus from '../../../assets/plus.svg';



function ServicesBrandindFAQ() {
    const [isOpen, setIsOpen] = useState(0);

    const handleToggle = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const accordionData = [
        {
            id: 'accordion',
            title: 'Do you integrate brand strategy in design?',
            icon: Plus,
            para: "Yes, I always consider brand strategy when working on frontend designs. My goal is not only to create visually appealing user interfaces but also to ensure they reflect the brand's identity and objectives.",
            shortPara: 'For sure!',
        },
        {
            id: 'accordion',
            title: 'Are logo designs available separately?',
            icon: Plus,
            para: "As a frontend developer, I specialize in creating user interfaces and interactive experiences. For logo design, I recommend working with a dedicated graphic designer who can craft a logo that aligns with your brand identity. However, I can integrate your logo into your website seamlessly once it's ready!",
        },
        {
            id: 'accordion',
            title: 'Once the brand is designed, can you help us implement it on our website?',
            icon: Plus,
            para: "Absolutely! Once the brand design is ready, I can seamlessly integrate it into your website, ensuring that the visuals, typography, and overall user experience align perfectly with your brand's identity.",
        },
        {
            id: 'accordion',
            title: 'Are you able to help with motion graphics and sound design?',
            icon: Plus,
            para: "As a frontend developer, my main expertise lies in creating intuitive, responsive, and visually appealing user interfaces. While motion and sound design are not part of my core skill set, I can definitely assist in integrating motion effects, animations, and sound elements into your website.\n \n I work closely with designers and developers to ensure that any animations or sound elements align seamlessly with the overall user experience and brand identity. If you need help with those aspects, I can collaborate with your team or recommend professionals who specialize in motion and sound design to bring your vision to life.",
        },
        {
            id: 'accordion',
            title: 'What if we require deliverables that aren’t listed in your services?',
            icon: Plus,
            para: "If you need something beyond my listed services, feel free to ask! While I focus on frontend development and creating engaging user interfaces, I'm flexible and open to discussing additional requirements. If it's outside my expertise, I’d be happy to help you find a trusted professional who specializes in that area.",
        },
        {
            id: 'accordion',
            title: "What's the project timeline like?",
            icon: Plus,
            para: "Project timelines depend on the scope and specific requirements. Typically, I’ll provide an estimated timeframe once I understand the details of your project. I always aim to deliver high-quality work efficiently and keep you updated throughout the process.",
        },
        {
            id: 'accordion',
            title: "How will we stay connected?",
            icon: Plus,
            para: "I prioritize clear and regular communication throughout the project. We can connect via email, messaging apps, or scheduled calls—whatever works best for you. I’ll keep you updated on progress and am always here to answer any questions along the way.",
        },
        {
            id: 'accordion',
            title: "Who will handle our project?",
            icon: Plus,
            para: "You’ll be working directly with me throughout the project. I manage everything from planning and development to implementation, ensuring quality and consistency. If any additional expertise is needed, I collaborate with trusted professionals, but I’ll remain your main point of contact.",
        },
    ];


    const SvgIcon = () => (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M4.101 17.813c.056-.206-.067-.491-.185-.697a2.108 2.108 0 0 0-.12-.178 9.366 9.366 0 0 1-1.546-5.156C2.234 6.52 6.597 2.25 11.992 2.25c4.705 0 8.633 3.26 9.55 7.587a9.32 9.32 0 0 1 .208 1.952c0 5.269-4.195 9.606-9.59 9.606-.858 0-2.016-.216-2.647-.393a17.713 17.713 0 0 1-1.425-.474A1.458 1.458 0 0 0 7 20.545l-3.18 1.148a.751.751 0 0 1-.218.057.45.45 0 0 1-.449-.457.744.744 0 0 1 .028-.154l.92-3.326Z"></path>
        </svg>
    );


    return (
        <>
            <div className='mt-[180px]'>
                <div className='flex lg:flex-row flex-col-reverse'>
                    <div className='w-full border-b border-blackColor h-fit'>
                        <div className='w-[80px] h-[80px] border border-blackColor ml-auto border-b-0 lg:flex hidden items-center justify-center'>
                            <div className='w-14'><SvgIcon /></div>
                        </div>
                        {accordionData.map((item, index) => {
                            const formattedPara = item.para.split('\n').map((line, lineIndex) => (
                                <React.Fragment key={lineIndex}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ));

                            return (
                                <div key={index}>
                                    <div className='flex border border-blackColor items-stretch border-b-0'>
                                        <div
                                            className={`flex-shrink-0 w-[80px] border-r border-blackColor flex items-center justify-center pointer-cursor select-none transition-all duration-500 hover:bg-[#EBE9E5] ${isOpen === index ? 'bg-[#EBE9E5]' : 'bg-[#f0f0f0]'}`}
                                            onClick={() => handleToggle(index)}
                                        >
                                            <span className={`transition-all duration-500 inline-block ${isOpen === index ? '-rotate-[135deg]' : ''}`}>
                                                <img src={item.icon} alt="img" className='lg:w-8 w-6' />
                                            </span>
                                        </div>
                                        <div className='w-full'>
                                            <div
                                                className={`lg:text-[32px] md:text-[28px] text-[25px] font-medium font-TTCPro text-blackColor px-6 py-4 content-center pointer-cursor select-none`}
                                                onClick={() => handleToggle(index)}
                                            >
                                                {item.title}
                                            </div>
                                            <div className={`transition-[max-height] duration-500 ease-linear overflow-hidden ${isOpen === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                                                <div className='p-6 pt-0 lg:text-[17px] text-[15px] font-TTCPro font-medium text-blackColor'>
                                                    {item.shortPara && <p className='pb-6'>{item.shortPara}</p>}
                                                    <p>{formattedPara}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='w-full lg:sticky top-[80px] h-fit'>
                        <div className='w-full border border-blackColor lg:border-l-0 border-b-0 h-fit pb-6 backdrop-blur-[2px] relative -z-10 lg:border-b'>
                            <div className='lg:text-[60px] sm:text-[45px] text-[10vw] uppercase font-TTCPro font-[900] text-center leading-[.9] my-6 md:block flex items-start flex-wrap justify-center text-blackColor'>
                                <span>
                                    <span>C</span>
                                    <span>O</span>
                                    <span>M</span>
                                    <span>M</span>
                                    <span>O</span>
                                    <span>N</span>
                                </span>
                                &nbsp;
                                <br />
                                <span>
                                    <span>Q</span>
                                    <span>U</span>
                                    <span>E</span>
                                    <span>S</span>
                                    <span>T</span>
                                    <span>i</span>
                                    <span>O</span>
                                    <span>N</span>
                                    <span>E</span>
                                    <span>s</span>
                                </span>
                            </div>
                            <p className='max-w-[350px] mx-auto text-[21px] font-TTCPro font-medium text-center'>
                                We're Always Happy to talk about our process in more detail so feel free to reach out
                            </p>
                        </div>
                        <div className='group pointer-cursor h-[80px] xl:w-[22.5vw] lg:w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor hidden lg:flex justify-start items-center border-t-0 ml-auto'>
                            <div className='magnetic-btn relative w-full h-full'>
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor font-TTCPro lg:text-[17px] md:text-[16px] tracking-[2px] inline-block font-bold content-center'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='text-center w-full block uppercase font-TTCPro'>get in touch</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ServicesBrandindFAQ;
