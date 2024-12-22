import React from 'react'
import VideoIcon from '../assets/video-icon.svg'
import Videos from '../assets/download.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Video() {

    useGSAP(() => {
        gsap.from(".scale-vide", {
            scale: 0.5,
            duration: 2,
            // ease: 'elastic.inOut(1, 0.3)',
            // repeat: -1,
            // yoyo: true,
            scrollTrigger: {
                start: "0% 90%",
                end: "50% 50%",
                trigger: ".scale-vide",
                scrub: true,
            }
        })
    })

    return (
        <>
            <div className='scale-vide'>
                <div className='flex items-center justify-end w-fit ml-auto'>
                    <div className='shrink-0 md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor flex items-center justify-center border-b-0 md:border-b'>
                        <img src={VideoIcon} alt="" className='w-10' />
                    </div>
                    <div className='shrink-0 md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor flex items-center justify-center bg-blackColor border-b-0 md:border-b'>
                        <span className='animate-spiner'>
                            <svg role="img" width='40px' height='40px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMin meet" className="--icon --icon-spark-1"><path d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z" fill="#F8F8F8"></path></svg>
                        </span>
                    </div>
                </div>

                <div className='border border-blackColor md:p-7 p-3'>
                    <video autoPlay loop muted className='w-full h-full rounded-xl'>
                        <source src={Videos} />
                    </video>
                </div>
            </div>
        </>
    )
}

export default Video;