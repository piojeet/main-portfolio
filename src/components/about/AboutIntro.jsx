import React, { useEffect, useRef, useState } from 'react'
import img from '../../assets/priyajeet.webp'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AboutIntro() {
    const [experience, setExperience] = useState("");

    useEffect(() => {
        const startDate = new Date("dec 1, 2022"); // Jab aapne kaam shuru kiya
        const today = new Date();

        const years = today.getFullYear() - startDate.getFullYear();
        let months = today.getMonth() - startDate.getMonth();

        if (months < 0) {
            months += 12;
        }

        setExperience(`${years} years and ${months} months`);
    }, []); // Empty dependency array so that it runs once when the component mounts



    const wrapperRef = useRef(null);
    const boxesRef = useRef([]);

    useEffect(() => {
        const boxes = boxesRef.current;

        const loop = horizontalLoop(boxes, {
            paused: false,
            repeat: -1,
            speed: 0.5 // कम स्पीड सेट करें
        });

        // ScrollTrigger.create({
        //     trigger: '.container',
        //     start: 'top top',
        //     end: 'bottom bottom',
        //     pin: true,
        //     onUpdate: function (self) {
        //         self.direction === -1 ? loop.timeScale(-1) : loop.timeScale(1);
        //     }
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            loop.kill();
        };
    }, []);

    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, {
            xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
            }
        });
        gsap.set(items, { x: 0 });
        totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
        return tl;
    }

    const skills = [
        { name: "FRONEND DEVELOPER" },
        { name: "FRONTEND DEVELOPER" },
        { name: "FRONTEND DEVELOPER" },
    ];


    const alertSvg = (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
        </svg>
    )

    return (
        <div className='my-20'>
            <div className='md:h-[80px] md:w-[80px] h-[70px] w-[70px] flex items-center justify-center border border-blackColor border-b-0 ml-auto'><span className='w-8 block rotate-180'>{alertSvg}</span></div>

            <div className='flex items-center backdrop-blur-sm border border-blackColor relative lg:flex-row flex-col'>

            <div className='absolute top-0 h-full lg:w-[500px] sm:w-[300px] sm:right-0 lg:left-0 hidden sm:block'>
            <div ref={wrapperRef} className="wrapper w-full flex items-center overflow-hidden justify-center sticky top-0 py-5 border border-blackColor bg-[#ffffff79] z-20">
                {skills.map((skill, index) => (
                    <div key={skill.name} ref={el => boxesRef.current[index] = el} className="box flex gap-7 items-center justify-center px-5 flex-shrink-0 relative font-bold flex-nowrap">
                        <p className='text-[40px]'>{skill.name}</p>
                        <span className='animate-spiner'>
                    <svg role="img" width='40px' height='40px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMin meet" className="--icon --icon-spark-1"><path d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z" fill="#0f0f0f"></path></svg>
                    </span>
                    </div>
                ))}
            </div>
            </div>

                <div className='lg:w-[50%] w-full flex-shrink-0 h-full flex items-center justify-center p-6'>
                    <div className='md:w-[30vw] w-[60vw] border border-blackColor overflow-hidden aspect-square'>
                        <img src={img} alt="Priyajeet Majhi" className='mix-blend-multiply' />
                    </div>
                </div>
                <div className='lg:w-[50%] w-full flex-shrink-0 lg:border-l border-blackColor p-4 border-l-0 border-t'>
                    <h3 className='md:text-[40px] text-[25px] font-semibold uppercase'>Priyajeet Majhi</h3>
                    <p className='md:text-[20px] text-[16px] text-blackColor'>Front-end Developer with <strong>{experience}</strong> of front-end web development expertise, uniting tech passion & UI/UX mindset for effortless & attractive digital experiences I have experience in developing well-optimized web apps and user-friendly interfaces to make the end-user experience smooth as possible.</p><br />
                    <p className='md:text-[20px] text-[16px] text-blackColor'>I am a fast learner, willing to learn new technology stack with enthusiasm and depth of knowledge, and I always want to be thorough with details. From high-performance websites to novel design solutions and drive more user engagement, I strive to combine technical knowledge with creativity in all the projects where I am involved.</p><br />
                    <p className='md:text-[20px] text-[16px] text-blackColor'>I find I work best in high-pressure environments (everything city), where there is a need quick thinking and on-your-foot adaptability, sectors of operational/project management, and marketing/sales roles. So... how can we work together to make your next project come alive?</p>
                </div>
            </div>
        </div>
    )
}

export default AboutIntro