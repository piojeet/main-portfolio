import React, { useEffect, useState } from 'react'

function ContactHome() {

    // Set the initial state to true so that the checkbox is initially checked
    const [checkboxes, setCheckboxes] = useState({
        hquility1: true,  // Initially checked
        hquility2: true,  // Initially checked
        hquility3: false, // Initially unchecked
    });

    // Handler to toggle checkbox state
    const handleCheckboxChange = (id) => {
        if (id === 'hquility1') {
            // New functionality: When hquility1 becomes true, hquility2 should become true and hquility3 should become false
            // When hquility1 becomes false, hquility2 becomes false and hquility3 becomes true
            setCheckboxes({
                hquility1: !checkboxes.hquility1,
                hquility2: !checkboxes.hquility1, // hquility2 follows hquility1
                hquility3: checkboxes.hquility1 ? true : false, // hquility3 is opposite of hquility1
            });
        } else if (id === 'hquility3') {
            // When hquility3 becomes true, set hquility1 and hquility2 to false
            // When hquility3 becomes false, set hquility1 and hquility2 to true
            setCheckboxes({
                hquility1: !checkboxes.hquility3 ? false : true,
                hquility2: !checkboxes.hquility3 ? false : true,
                hquility3: !checkboxes.hquility3,
            });
        } else if (id === 'hquility2') {
            // Old functionality: Toggle hquility2 and set hquility1 to true, hquility3 to false
            setCheckboxes({
                hquility1: true,
                hquility2: !checkboxes.hquility2,
                hquility3: false,
            });
        }
    };



    const [isMagnetic, setIsMagnetic] = useState(false);

    useEffect(() => {
        const buttons = document.querySelectorAll('.magnetic-btn');

        buttons.forEach((button) => {
            const handleMouseEnter = () => {
                setIsMagnetic(true);
            };

            const handleMouseLeave = () => {
                setIsMagnetic(false);
                button.style.transition = 'transform .4s linear'; // Smooth return on leave
                button.style.transform = 'translate(0, 0)'; // Reset position
            };

            const handleMouseMove = (e) => {
                if (!isMagnetic) return;

                const { left, top, width, height } = button.getBoundingClientRect();
                const buttonCenterX = left + width / 2;
                const buttonCenterY = top + height / 2;

                const deltaX = e.clientX - buttonCenterX;
                const deltaY = e.clientY - buttonCenterY;

                // Apply limit of 12px (0.75rem) in any direction and slow down movement
                const limitedDeltaX = Math.max(-12, Math.min(12, deltaX * 0.1)); // Slower, smoother scaling factor (0.1)
                const limitedDeltaY = Math.max(-12, Math.min(12, deltaY * 0.1));

                const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

                if (distance < 150) {
                    button.style.transition = 'transform 0.1s ease-out'; // Smoother, shorter transition on hover
                    button.style.transform = `translate(${limitedDeltaX}px, ${limitedDeltaY}px)`; // Magnetic effect with limits
                }
            };

            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);
            button.addEventListener('mousemove', handleMouseMove);

            return () => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
                button.removeEventListener('mousemove', handleMouseMove);
            };
        });
    }, [isMagnetic]);




    const [placeholders, setPlaceholders] = useState({
        name: true,
        cname: true,
        email: true,
        timeline: true,
        budget: true,
        message: true,
    });

    const handleFocus = (id) => {
        setPlaceholders((prev) => ({ ...prev, [id]: false }));
    };

    const handleBlur = (id) => {
        setPlaceholders((prev) => ({ ...prev, [id]: true }));
    };

    return (
        <>
            <div className='min-h-[100vh] h-auto lg:block hidden'>
                <form action="" className='flex items-start justify-between'>
                    <div className='lg:w-[62vw] md:w-[59vw]'>
                        <div className='border border-blackColor p-16'>
                            <p className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest mb-4'>What are you looking for?</p>
                            <div className='flex items-start justify-between gap-x-10'>
                                <div className='w-full flex flex-col gap-4'>
                                    <label htmlFor="websiteDesign" className='pointer-cursor inline-flex items-center'>
                                        <input type="checkbox" id='websiteDesign' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>Website Design</span>
                                    </label>

                                    <label htmlFor="bdevelop" className='pointer-cursor  inline-flex items-center'>
                                        <input type="checkbox" id='bdevelop' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='capitalize inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>webside development</span>
                                    </label>

                                    <label htmlFor="frontoptmz" className='pointer-cursor  inline-flex items-center'>
                                        <input type="checkbox" id='frontoptmz' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='capitalize inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>Frontend Optimization</span>
                                    </label>
                                </div>

                                <div className='w-full flex flex-col gap-4'>
                                    <label htmlFor="respodesign" className='pointer-cursor inline-flex items-center'>
                                        <input type="checkbox" id='respodesign' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='capitalize inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>Responsive Design</span>
                                    </label>

                                    <label htmlFor="uiuximplimetion" className='pointer-cursor inline-flex items-center'>
                                        <input type="checkbox" id='uiuximplimetion' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='capitalize inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>UI/UX Implementation</span>
                                    </label>

                                    <label htmlFor="something" className='pointer-cursor inline-flex items-center'>
                                        <input type="checkbox" id='something' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='inline-block ml-6 font-TTCPro text-[17px] font-medium text-blackColor'>Something else...</span>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <div className='my-10 flex items-start justify-between gap-x-10 md:flex-wrap lg:flex-nowrap md:gap-y-10 lg:gap-y-0'>
                                    <label htmlFor="name" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full pointer-cursor'><span className='mb-3 inline-block w-full'>What’s your name? <span>*</span></span>
                                        <div className='relative group overflow-hidden'>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder={placeholders.name ? 'Your name' : ''}
                                                className="w-full h-[70px] px-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200"
                                                onFocus={() => handleFocus('name')}
                                                onBlur={() => handleBlur('name')}
                                            />
                                            <span
                                                className={`absolute w-full h-full bg-blackColor bottom-[-70px] left-0 transition-all duration-200 ${placeholders.name ? 'group-hover:bottom-[-63px]' : 'bottom-[-70px]'
                                                    }`}
                                            ></span>
                                        </div>
                                    </label>

                                    <label htmlFor="cname" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full pointer-cursor'><span className='mb-3 inline-block w-full'>What’s your company name?</span>
                                        <div className='relative group overflow-hidden'>
                                            <input
                                                type="text"
                                                id="cname"
                                                name="cname"
                                                placeholder={placeholders.cname ? 'Your company' : ''}
                                                className="w-full h-[70px] px-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200"
                                                onFocus={() => handleFocus('cname')}
                                                onBlur={() => handleBlur('cname')}
                                            />
                                            <span
                                                className={`absolute w-full h-full bg-blackColor bottom-[-70px] left-0 transition-all duration-200 ${placeholders.cname ? 'group-hover:bottom-[-63px]' : 'bottom-[-70px]'
                                                    }`}
                                            ></span>
                                        </div>
                                    </label>
                                </div>

                                <div className='my-10'>


                                    <label htmlFor="email" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full pointer-cursor'><span className='mb-3 inline-block w-full'>What’s your email address? <span>*</span></span>
                                        <div className='relative group overflow-hidden'>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder={placeholders.email ? 'Your email address' : ''}
                                                className="w-full h-[70px] px-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200"
                                                onFocus={() => handleFocus('email')}
                                                onBlur={() => handleBlur('email')}
                                            />
                                            <span
                                                className={`absolute w-full h-full bg-blackColor bottom-[-70px] left-0 transition-all duration-200 ${placeholders.email ? 'group-hover:bottom-[-63px]' : 'bottom-[-70px]'
                                                    }`}
                                            ></span>
                                        </div>
                                    </label>
                                </div>

                                <div className='my-10 flex items-start justify-between gap-x-10 md:flex-wrap md:gap-y-10 lg:gap-y-0 lg:flex-nowrap'>
                                    <div className='w-full'>
                                    <label htmlFor="timeline" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full pointer-cursor'><span className='mb-3 inline-block w-full'>What’s your timeline?<span>*</span></span>
                                        <div className='relative group overflow-hidden'>
                                            <input
                                                type="text"
                                                id="timeline"
                                                name="timeline"
                                                required
                                                placeholder={placeholders.timeline ? 'Your ideal launch date' : ''}
                                                className="w-full h-[70px] px-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200"
                                                onFocus={() => handleFocus('timeline')}
                                                onBlur={() => handleBlur('timeline')}
                                            />
                                            <span
                                                className={`absolute w-full h-full bg-blackColor bottom-[-70px] left-0 transition-all duration-200 ${placeholders.timeline ? 'group-hover:bottom-[-63px]' : 'bottom-[-70px]'
                                                    }`}
                                            ></span>
                                        </div>
                                    </label>
                                    <p className='text-[15px] font-TTCPro text-blackColor font-medium mt-2'>Knowing your deadline helps us to organise a realistic timeline</p>
                                    </div>

                                    <div className='w-full'>
                                    <label htmlFor="budget" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full pointer-cursor'><span className='mb-3 inline-block w-full'>What’s your estimated budget?<span>*</span></span>
                                        <div className='relative group overflow-hidden'>
                                            <input
                                                type="text"
                                                id="budget"
                                                name="budget"
                                                required
                                                placeholder={placeholders.budget ? '200$ - 300$' : ''}
                                                className="w-full h-[70px] px-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200"
                                                onFocus={() => handleFocus('budget')}
                                                onBlur={() => handleBlur('budget')}
                                            />
                                            <span
                                                className={`absolute w-full h-full bg-blackColor bottom-[-70px] left-0 transition-all duration-200 ${placeholders.budget ? 'group-hover:bottom-[-63px]' : 'bottom-[-70px]'
                                                    }`}
                                            ></span>
                                        </div>
                                    </label>
                                    <p className='text-[15px] font-TTCPro text-blackColor font-medium mt-2'>Providing a budget estimate helps me create a more tailored and accurate proposal for your project.</p>
                                    </div>
                                </div>

                                <div className='my-10'>


                                    <label htmlFor="message" className='text-[17px] font-TTCPro text-blackColor font-semibold uppercase tracking-widest w-full pointer-cursor'>
                                        {/* Conditionally change background based on placeholder focus */}
                                        <span className={`mb-3 inline-block w-full transition-all`}>
                                        Tell us about your project <span>*</span>
                                        </span>
                                        <div className='relative group overflow-hidden flex'>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={7}
                                                placeholder={placeholders.message ? 'Your email address' : ''}
                                                className="w-full p-6 border border-blackColor outline-none focus:border-green-400 bg-bodyColor text-[21px] font-TTCPro text-blackColor font-medium focus:bg-white transition-hover duration-200 hover:bg-gray-200 group"
                                                onFocus={() => handleFocus('message')}
                                                onBlur={() => handleBlur('message')}
                                            />
                                            <span className={`absolute bottom-[1px] right-[1px] w-7 h-7 bg-bodyColor transition-hover duration-200 pointer-events-none ${!placeholders.message ? 'bg-white' : 'group-hover:bg-gray-200'}`}>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-resize ui-input_textarea-icon --input-icon w-6"
                                                >
                                                    <g
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="square"
                                                        strokeLinejoin="square"
                                                        fill="none"
                                                    >
                                                        <path d="M19 5 4.99 19.01m14.196-6.196-6.372 6.372" />
                                                    </g>
                                                </svg>
                                            </span>
                                            <span
                                                className={`absolute w-full h-full bg-blackColor bottom-[-100%] left-0 transition-all duration-200 ${placeholders.message ? 'group-hover:bottom-[-97.5%]' : ''}`}
                                            ></span>
                                        </div>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="agree" className='pointer-cursor inline-flex items-center w-full'>
                                        <input type="checkbox" id='agree' className='pree-check appearance-none' />
                                        <span className='group border border-blackColor inline-block lg:w-14 lg:h-14 md:w-[50px] md:h-[50px] relative overflow-hidden hover:bg-gray-200 flex-shrink-0'>
                                            <span className='absolute w-full h-full bg-blackColor -bottom-16 group-hover:-bottom-12 transition-all duration-200 pree-bg'></span>
                                            <span className='absolute w-full h-full text-bodyColor flex items-center justify-center opacity-0 transition-all duration-200 pree-icon'>
                                                <svg
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    preserveAspectRatio="xMidYMin meet"
                                                    className="--icon --icon-action-check --input-icon w-10"
                                                >
                                                    <path
                                                        d="m3.686 12.464 5.233 5.233L20.312 6.304"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        fill="none"
                                                    />
                                                </svg>

                                            </span>
                                        </span>
                                        <span className='capitalize inline-block ml-6 font-TTCPro text-[21px] font-medium text-blackColor'>I agree with the processing of my personal data</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='group pointer-cursor h-[80px] w-[22.5vw] flex-shrink-0 border border-blackColor bg-blackColor border-t-0 flex justify-start items-center'>
                            {/* Magnetic effect on wrapper div */}
                            <div className='magnetic-btn relative w-full h-full'>
                                {/* Hover transition on inner span */}
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[20px] tracking-[2px] inline-flex font-semibold content-center items-center justify-around'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >

                                    <span className='uppercase text-[15px] font-TTCPro font-bold'>
                                        suubmit
                                    </span>
                                    <span className='uppercase text-[15px] font-TTCPro font-bold'>
                                        <svg width="30" height="30" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 2 11 13" />
                                            <path d="m22 2-7 20-4-9-9-4 20-7z" />
                                        </svg>

                                    </span>


                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[31vw]'>
                        <div>
                            <div className='p-7 border border-blackColor border-l-0'>
                                <label htmlFor="hquility1" className='pointer-cursor flex items-center'>
                                    <input
                                        type="checkbox"
                                        id="hquility1"
                                        className="appearance-none qcheck"
                                        checked={checkboxes.hquility1}
                                        onChange={() => handleCheckboxChange('hquility1')}
                                    />
                                    <span className={`inline-block flex-shrink-0 w-[9rem] border-2 border-blackColor bg-bodyColor  rounded-full h-[4.5rem] relative ${checkboxes.hquility1 ? 'bgqcheck' : ''}`}>
                                        <span className="w-14 h-14 bg-blackColor inline-flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-2 qcirclecheck transition-all duration-300 -rotate-45 z-20">
                                            <svg
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="--icon --icon-misc-thumb w-8"
                                            >
                                                <path
                                                    d="M7.7 21V11m-4.5 1.8v6.3A1.8 1.8 0 0 0 5 21h12a2.7 2.7 0 0 0 2.8-2.3l1-6.3a2.7 2.7 0 0 0-2.7-3h-3.2a.9.9 0 0 1-.9-1V5.2A2.2 2.2 0 0 0 11.8 3a.7.7 0 0 0-.7.5l-3.1 7a.9.9 0 0 1-.8.6H5a1.8 1.8 0 0 0-1.8 1.8Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>
                                        </span>

                                        <span className="w-14 h-14 inline-flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-10">
                                            <svg
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="--icon --icon-misc-thumb w-8"
                                            >
                                                <path
                                                    d="M7.7 21V11m-4.5 1.8v6.3A1.8 1.8 0 0 0 5 21h12a2.7 2.7 0 0 0 2.8-2.3l1-6.3a2.7 2.7 0 0 0-2.7-3h-3.2a.9.9 0 0 1-.9-1V5.2A2.2 2.2 0 0 0 11.8 3a.7.7 0 0 0-.7.5l-3.1 7a.9.9 0 0 1-.8.6H5a1.8 1.8 0 0 0-1.8 1.8Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>
                                        </span>
                                    </span>

                                    <span className='inline-block ml-4 text-[21px] font-TTCPro text-blackColor font-medium'>Highest Quality</span>
                                </label>
                            </div>

                            <div className='p-7 border border-blackColor border-l-0 border-t-0'>
                                <label htmlFor="hquility2" className='pointer-cursor flex items-center'>
                                    <input
                                        type="checkbox"
                                        id="hquility2"
                                        className="appearance-none qcheck"
                                        checked={checkboxes.hquility2}
                                        onChange={() => handleCheckboxChange('hquility2')}
                                    />
                                    <span className={`inline-block w-[9rem] flex-shrink-0 border-2 border-blackColor bg-bodyColor  rounded-full h-[4.5rem] relative ${checkboxes.hquility2 ? 'bgqcheck' : ''}`}>
                                        <span className="w-14 h-14 bg-blackColor inline-flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-2 qcirclecheck transition-all duration-300 -rotate-45 z-20">
                                            <svg
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="--icon --icon-misc-time w-8"
                                            >
                                                <path
                                                    d="M12 6.7V12l3.5 1.8m5.3-1.8A8.8 8.8 0 1 1 12 3.2a8.8 8.8 0 0 1 8.8 8.8Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>

                                        </span>

                                        <span className="w-14 h-14 inline-flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-10">
                                            <svg
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="--icon --icon-misc-time w-8"
                                            >
                                                <path
                                                    d="M12 6.7V12l3.5 1.8m5.3-1.8A8.8 8.8 0 1 1 12 3.2a8.8 8.8 0 0 1 8.8 8.8Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>

                                        </span>
                                    </span>

                                    <span className='inline-block ml-4 text-[21px] font-TTCPro text-blackColor font-medium'>Tight Deadline</span>
                                </label>
                            </div>

                            <div className='p-7 border border-blackColor border-l-0 border-t-0'>
                                <label htmlFor="hquility3" className='pointer-cursor flex items-center'>
                                    <input
                                        type="checkbox"
                                        id="hquility3"
                                        className="appearance-none qcheck"
                                        checked={checkboxes.hquility3}
                                        onChange={() => handleCheckboxChange('hquility3')}
                                    />
                                    <span className={`inline-block w-[9rem] flex-shrink-0 border-2 border-blackColor bg-bodyColor  rounded-full h-[4.5rem] relative ${checkboxes.hquility3 ? 'bgqcheck' : ''}`}>
                                        <span className="w-14 h-14 bg-blackColor inline-flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 left-2 qcirclecheck transition-all duration-300 -rotate-45 z-20">
                                            <svg
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="--icon --icon-misc-money w-8"
                                            >
                                                <path
                                                    d="M15.6 15.6a6.4 6.4 0 1 0-7.2-7.2m-.5 4.5 1.4-.9v5m-1.4 0h2.7m5-2.3a6.4 6.4 0 1 1-6.3-6.4 6.4 6.4 0 0 1 6.4 6.4Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>

                                        </span>

                                        <span className="w-14 h-14 inline-flex items-center justify-center rounded-full absolute top-1/2 -translate-y-1/2 right-2 z-10">
                                            <svg
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                preserveAspectRatio="xMidYMin meet"
                                                className="--icon --icon-misc-money w-8"
                                            >
                                                <path
                                                    d="M15.6 15.6a6.4 6.4 0 1 0-7.2-7.2m-.5 4.5 1.4-.9v5m-1.4 0h2.7m5-2.3a6.4 6.4 0 1 1-6.3-6.4 6.4 6.4 0 0 1 6.4 6.4Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    fill="none"
                                                />
                                            </svg>

                                        </span>
                                    </span>

                                    <span className='inline-block ml-4 text-[21px] font-TTCPro text-blackColor font-medium'>Low Cost</span>
                                </label>
                            </div>
                        </div>

                        <div className='group pointer-cursor h-[80px] w-[8.5vw] flex-shrink-0 border border-blackColor bg-blackColor border-t-0 flex justify-start items-center border-l-0'>
                            {/* Magnetic effect on wrapper div */}
                            <div className='magnetic-btn relative w-full h-full'>
                                {/* Hover transition on inner span */}
                                <span
                                    className='relative overflow-hidden w-full h-full left-0 bottom-0 group-hover:left-4 group-hover:bottom-2 group-hover:border group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[20px] tracking-[2px] inline-block font-semibold content-center'
                                    style={{ position: 'relative', transition: 'left 0.3s ease, bottom 0.3s ease' }}
                                >
                                    <span className='text-center w-full uppercase inline-flex justify-center'>
                                        <svg
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            preserveAspectRatio="xMidYMin meet"
                                            className="--icon --icon-misc-wink w-8"
                                        >
                                            <path
                                                d="M8.2 13.9a5.1 5.1 0 0 0 3.8 1.9 5.1 5.1 0 0 0 3.8-1.9m5.7-1.9A9.5 9.5 0 1 1 12 2.5a9.5 9.5 0 0 1 9.5 9.5Zm-6.2-2.9c0 .5-.2 1.2-.4 1.2s-.5-.7-.5-1.2.2-1.1.5-1.1.4.6.4 1.1Z"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                fill="none"
                                            />
                                            <path
                                                d="M8 9.1a4 4 0 0 1 3 0"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                fill="none"
                                            />
                                        </svg>

                                    </span>

                                </span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactHome