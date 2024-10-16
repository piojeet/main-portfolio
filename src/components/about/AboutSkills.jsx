import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from '../../assets/html.svg'
import img2 from '../../assets/css.svg'
import img3 from '../../assets/js.svg'
import img4 from '../../assets/reactjs.svg'
import img5 from '../../assets/git.svg'
import img6 from '../../assets/tailwind.svg'
import img7 from '../../assets/nextjs.svg'
import img8 from '../../assets/bootstrap.svg'

gsap.registerPlugin(ScrollTrigger);

function AboutSkills() {
    const wrapperRef = useRef(null);
    const boxesRef = useRef([]);

    useEffect(() => {
        const boxes = boxesRef.current;

        const loop = horizontalLoop(boxes, {
            paused: false,
            repeat: -1,
            speed: 0.5 // कम स्पीड सेट करें
        });

        ScrollTrigger.create({
            trigger: '.container',
            start: 'top top',
            end: 'bottom bottom',
            pin: true,
            onUpdate: function (self) {
                self.direction === -1 ? loop.timeScale(-1) : loop.timeScale(1);
            }
        });

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
        { name: "HTML",  image: img1 },
        { name: "CSS", image: img2 },
        { name: "JavaScript", image: img3 },
        { name: "React", image: img4 },
        { name: "Git", image: img5 },
        { name: "Tailwind", image: img6 },
        { name: "Next.js", image: img7 },
        { name: "Bootstrap", image: img8 },
        { name: "HTML",  image: img1 },
        { name: "CSS", image: img2 },
        { name: "JavaScript", image: img3 },
        { name: "React", image: img4 },
        { name: "Git", image: img5 },
        { name: "Tailwind", image: img6 },
        { name: "Next.js", image: img7 },
        { name: "Bootstrap", image: img8 }
    ];

    return (
        <>
        <div>
        <div className="md:h-[60vh] h-[30vh] flex justify-center items-center w-full mx-auto">
            <div ref={wrapperRef} className="wrapper w-full relative flex items-center overflow-hidden justify-center">
                {skills.map((skill, index) => (
                    <div key={skill.name} ref={el => boxesRef.current[index] = el} className="box flex flex-col items-center justify-center md:px-10 px-5 flex-shrink-0 relative font-bold">
                        <img src={skill.image} alt={skill.name} className="2xl:w-52 md:w-28 w-10 mb-2" />
                        <p className='text-blackColor md:text-[20px] text-[16px]'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
    );
}

export default AboutSkills;