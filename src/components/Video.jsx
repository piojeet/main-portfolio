import { useEffect, useRef } from 'react'
import Videos from '../assets/download.mp4'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Video() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const PW = 132;
        const PH = 128;
        const OX = 14;
        const PERIOD = 2.0;
        const HALF_AT = 0.635;
        const TAU0 = -0.5;
        const STEP = 0.05;
        const PROG = [
            0, 0, 0.007, 0.02, 0.035, 0.051, 0.076, 0.12, 0.196, 0.33, 0.5, 0.632,
            0.735, 0.803, 0.853, 0.889, 0.917, 0.936, 0.952, 0.961, 0.97, 0.987,
            0.994, 1,
        ];
        let kx = 1;
        let ky = 1;
        let frameId;

        function resize() {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = Math.round(rect.width * dpr);
            canvas.height = Math.round(rect.height * dpr);
            kx = canvas.width / PW;
            ky = canvas.height / PH;
        }

        function progress(tau) {
            if (tau <= TAU0) return 0;
            const f = (tau - TAU0) / STEP;
            const i = Math.floor(f);
            if (i >= PROG.length - 1) return 1;
            return PROG[i] + (PROG[i + 1] - PROG[i]) * (f - i);
        }

        function draw(ms) {
            const t = ms / 1000;
            const tau =
                ((((t - HALF_AT + PERIOD / 2) % PERIOD) + PERIOD) % PERIOD) -
                PERIOD / 2;
            const d = 60 * progress(tau);

            ctx.setTransform(kx, 0, 0, ky, -OX * kx, 0);
            ctx.fillStyle = '#f8f8f8';
            ctx.fillRect(OX, 0, PW, PH);
            ctx.fillStyle = '#0d0d0d';

            ctx.save();
            ctx.beginPath();
            ctx.rect(51, 37, 64, 64);
            ctx.clip();
            for (let i = -2; i <= 9; i++) {
                const c = 52.5 + 15 * i - d;
                ctx.fillRect(c - 1.65, 40, 3.3, 12);
                ctx.fillRect(c - 1.65, 86, 3.3, 12);
            }
            for (let j = -2; j <= 5; j++) {
                const c = 52.5 + 30 * j - d;
                ctx.fillRect(c - 1.65, 55, 3.3, 28);
            }
            ctx.restore();

            ctx.fillRect(51, 37, 64, 3);
            ctx.fillRect(51, 52, 64, 3);
            ctx.fillRect(51, 83, 64, 3);
            ctx.fillRect(51, 98, 64, 2.5);
            ctx.fillRect(51, 37, 3, 63.5);
            ctx.fillRect(112, 37, 3, 63.5);

            frameId = requestAnimationFrame(draw);
        }

        resize();
        window.addEventListener('resize', resize);
        frameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(frameId);
        };
    }, []);

    useGSAP(() => {
        gsap.from(".scale-vide", {
            scale: 0.5,
            duration: 2,
            // ease: 'elastic.inOut(1, 0.3)',
            // repeat: -1,
            // yoyo: true,
            scrollTrigger: {
                trigger: ".scale-vide",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
    })

    return (
        <>
            <div className='scale-vide'>
                <div className='flex items-center justify-end w-fit ml-auto'>
                    <div className='shrink-0 md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor flex items-center justify-center border-b-0 md:border-b'>
                        <canvas ref={canvasRef} aria-label="Animated film strip icon" className='w-full h-full' />
                    </div>
                    <div className='shrink-0 md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor flex items-center justify-center bg-blackColor border-b-0 md:border-b'>
                        <span className='animate-spiner'>
                            <svg role="img" width='40px' height='40px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMin meet" className="--icon --icon-spark-1"><path d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z" fill="#F8F8F8"></path></svg>
                        </span>
                    </div>
                </div>

                <div className='border border-blackColor md:p-7 p-3'>
                    <video
                        autoPlay
                        loop
                        muted
                        onLoadedMetadata={() => requestAnimationFrame(() => ScrollTrigger.refresh())}
                        className='w-full h-full rounded-xl'
                    >
                        <source src={Videos} />
                    </video>
                </div>
            </div>
        </>
    )
}

export default Video;