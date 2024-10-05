// eslint-disable-next-line no-unused-vars
import React from 'react'

function Cards() {
    return (
        <>
            <div className='md:flex items-start justify-between md:flex-wrap lg:flex-nowrap grid grid-cols-1 mb-20 md:mb-0'>
                <div className='group lg:w-[100%] border border-blackColor border-b-0 md:border-b lg:h-[32vw] sm:h-[50vw] h-[90vw] md:w-[45vw]'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 left-[-20%] transition-left duration-500 group-hover:left-5 group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMin meet"
                                        className="--icon --icon-arrow-right"  // Changed class to className
                                    >
                                        <path
                                            d="M4.77 11.943h13.321m1.025 0L11.943 4.77m7.173 7.173-7.173 7.173"
                                            stroke="currentColor"
                                            strokeWidth="1"       // Changed from stroke-width to strokeWidth
                                            strokeLinecap="square" // Changed from stroke-linecap to strokeLinecap
                                            strokeLinejoin="square" // Changed from stroke-linejoin to strokeLinejoin
                                        />
                                    </svg>
                                </span>
                                <span className='cards-icon relative left-6 group-hover:left-24 transition-left duration-500  group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        className="svg-service-art part-expertise_item-icon" // Changed `class` to `className`
                                        viewBox="0 0 48 48"
                                        preserveAspectRatio="xMinYMin meet"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-label="Branding"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round" // Changed `stroke-linecap` to `strokeLinecap`
                                            strokeLinejoin="round" // Changed `stroke-linejoin` to `strokeLinejoin`
                                            strokeWidth="2" // Changed `stroke-width` to `strokeWidth`
                                        >
                                            <path d="M4 24a20 20 0 0 0 20 20 6 6 0 0 0 6-6v-1a15 15 0 0 1 0-1.8 6 6 0 0 1 5.2-5.1A15 15 0 0 1 37 30h1a6 6 0 0 0 6-6 20 20 0 0 0-40 0Z"></path>
                                            <path d="M14 26a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"></path>
                                            <path d="M32 18a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"></path>
                                            <path d="M20 16a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"></path>
                                        </g>
                                    </svg>

                                </span>

                            </div>
                            <div className='absolute bottom-[0] md:translate-y-[63%] left-0 w-full px-6 py-3 transition-all duration-500 group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro sm:text-[32px] text-[27px] font-[500] mb-2 group-hover:text-bodyColor'>Branding</h3>
                                <p className='font-TTCPro text-[21px] font[450] group-hover:text-bodyColor'>Create or refine a visual identity to celebrate your unique personality and proposition.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='group lg:w-[100%] border border-blackColor border-b-0 md:border-b lg:h-[32vw] sm:h-[50vw] h-[90vw] relative md:top-12 lg:mt-16 md:w-[45vw]'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 left-[-20%] transition-left duration-500 group-hover:left-5 group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMin meet"
                                        className="--icon --icon-arrow-right"  // Changed class to className
                                    >
                                        <path
                                            d="M4.77 11.943h13.321m1.025 0L11.943 4.77m7.173 7.173-7.173 7.173"
                                            stroke="currentColor"
                                            strokeWidth="1"       // Changed from stroke-width to strokeWidth
                                            strokeLinecap="square" // Changed from stroke-linecap to strokeLinecap
                                            strokeLinejoin="square" // Changed from stroke-linejoin to strokeLinejoin
                                        />
                                    </svg>
                                </span>
                                <span className='cards-icon relative left-6 group-hover:left-24 transition-left duration-500  group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        className="svg-service-layout part-expertise_item-icon"  // Changed class to className
                                        viewBox="0 0 48 48"
                                        preserveAspectRatio="xMinYMin meet"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-label="Product Design"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"    // Changed from stroke-linecap to strokeLinecap
                                            strokeLinejoin="round"   // Changed from stroke-linejoin to strokeLinejoin
                                            strokeWidth="2"          // Changed from stroke-width to strokeWidth
                                        >
                                            <path d="M6 18h36m-24 0v24M42 6v31.2a7.5 7.5 0 0 1-.3 3.2 3 3 0 0 1-1.3 1.3 7.5 7.5 0 0 1-3.2.3H10.8a7.5 7.5 0 0 1-3.2-.3 3 3 0 0 1-1.3-1.3 7.5 7.5 0 0 1-.3-3.2V6Z"></path>
                                        </g>
                                    </svg>
                                </span>

                            </div>
                            <div className='absolute bottom-[0] md:translate-y-[65%] left-0 w-full px-6 py-3 transition-all duration-500 group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro sm:text-[32px] text-[27px] font-[500] mb-2 group-hover:text-bodyColor'>Website Design</h3>
                                <p className='font-TTCPro text-[21px] font[450] group-hover:text-bodyColor'>Amplify your brands presence and engage your audience with an impactful and interactive website.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='group lg:w-[100%] border border-blackColor border-b-0 md:border-b lg:h-[32vw] sm:h-[50vw] h-[90vw] lg:mt-7 md:w-[45vw]'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 left-[-20%] transition-left duration-500 group-hover:left-5 group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMin meet"
                                        className="--icon --icon-arrow-right"  // Changed class to className
                                    >
                                        <path
                                            d="M4.77 11.943h13.321m1.025 0L11.943 4.77m7.173 7.173-7.173 7.173"
                                            stroke="currentColor"
                                            strokeWidth="1"       // Changed from stroke-width to strokeWidth
                                            strokeLinecap="square" // Changed from stroke-linecap to strokeLinecap
                                            strokeLinejoin="square" // Changed from stroke-linejoin to strokeLinejoin
                                        />
                                    </svg>

                                </span>
                                <span className='cards-icon relative left-6 group-hover:left-24 transition-left duration-500  group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        className="svg-service-monitor part-expertise_item-icon" // Changed `class` to `className`
                                        viewBox="0 0 48 48"
                                        preserveAspectRatio="xMinYMin meet"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-label="Website Design"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="square" // Changed `stroke-linecap` to `strokeLinecap`
                                            strokeLinejoin="round" // Changed `stroke-linejoin` to `strokeLinejoin`
                                            strokeWidth="2" // Changed `stroke-width` to `strokeWidth`
                                        >
                                            <path d="M16 42h16m-8-8v8M44 6v23.2a7.5 7.5 0 0 1-.3 3.2 3 3 0 0 1-1.3 1.3 7.5 7.5 0 0 1-3.2.3H8.8a7.5 7.5 0 0 1-3.2-.3 3 3 0 0 1-1.3-1.3 7.5 7.5 0 0 1-.3-3.2V6h40Z"></path>
                                        </g>
                                    </svg>

                                </span>

                            </div>
                            <div className='absolute bottom-[0] lg:translate-y-[65%] md:translate-y-[70%] left-0 w-full px-6 py-3 transition-all duration-500 md:group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro sm:text-[32px] text-[27px] font-[500] mb-2 group-hover:text-bodyColor'>Front-End</h3>
                                <p className='font-TTCPro text-[21px] font[450] group-hover:text-bodyColor'>I build efficient, responsive websites using modern web technologies and best design principles.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='group lg:w-[100%] border border-blackColor relative md:top-12 lg:h-[32vw] sm:h-[50vw] h-[90vw] md:w-[45vw]'>
                    <div className='transition-all duration-300 group-hover:p-2 h-full'>
                        <div className='relative h-full group-hover:bg-blackColor group-hover:rounded-lg overflow-hidden pt-7'>
                            <div className='relative'>
                                <span className='cards-icon absolute top-0 left-[-20%] transition-left duration-500 group-hover:left-5 group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMin meet"
                                        className="--icon --icon-arrow-right"  // Changed class to className
                                    >
                                        <path
                                            d="M4.77 11.943h13.321m1.025 0L11.943 4.77m7.173 7.173-7.173 7.173"
                                            stroke="currentColor"
                                            strokeWidth="1"       // Changed from stroke-width to strokeWidth
                                            strokeLinecap="square" // Changed from stroke-linecap to strokeLinecap
                                            strokeLinejoin="square" // Changed from stroke-linejoin to strokeLinejoin
                                        />
                                    </svg>
                                </span>
                                <span className='cards-icon relative left-6 group-hover:left-24 transition-left duration-500  group-hover:text-bodyColor'>
                                    <svg
                                        role="img"
                                        className="svg-service-tools part-expertise_item-icon" // Changed `class` to `className`
                                        viewBox="0 0 48 48"
                                        preserveAspectRatio="xMinYMin meet"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-label="Design Support"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round" // Changed `stroke-linecap` to `strokeLinecap`
                                            strokeLinejoin="round" // Changed `stroke-linejoin` to `strokeLinejoin`
                                            strokeWidth="2" // Changed `stroke-width` to `strokeWidth`
                                        >
                                            <path d="m12.4 13.3 8.3 8.4m-8.3-8.4H7L5 7.8l2-1.9 5.5 1.9Zm24.5-6-4.8 4.9a4.6 4.6 0 0 0-1.3 1.5 1.8 1.8 0 0 0 0 1.1 4.6 4.6 0 0 0 1.3 1.6l.4.4A4.6 4.6 0 0 0 34 18a1.8 1.8 0 0 0 1.2 0 4.6 4.6 0 0 0 1.5-1.2l4.5-4.5A10.2 10.2 0 0 1 29.8 26a7.4 7.4 0 0 0-1.6-.2 1.5 1.5 0 0 0-.7.2 5 5 0 0 0-1 .8L13.4 40.2a4 4 0 0 1-5.5-5.6L21 21.4a5 5 0 0 0 .9-1 1.5 1.5 0 0 0 .2-.7 7.4 7.4 0 0 0-.3-1.6A10.2 10.2 0 0 1 37 7.3ZM23.5 30l10.2 10.2a4 4 0 1 0 5.5-5.6l-8.4-8.4a10.1 10.1 0 0 1-1.7-.3 2 2 0 0 0-2 .5Z"></path>
                                        </g>
                                    </svg>

                                </span>

                            </div>
                            <div className='absolute bottom-[0] md:translate-y-[65%] left-0 w-full px-6 py-3 transition-all duration-500 group-hover:translate-y-[0]'>
                                <h3 className='font-TTCPro sm:text-[32px] text-[27px] font-[500] mb-2 group-hover:text-bodyColor'>Design Support</h3>
                                <p className='font-TTCPro text-[21px] font[450] group-hover:text-bodyColor'>An ongoing engagement to help with your regular or ad-hoc creative requirements and output.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards