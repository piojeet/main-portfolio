/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import RightArrow from "../assets/right-arrow.svg";
import { NavLink } from "react-router-dom";
import SendMessageBox from "./SendMessageBox";
import ExternalLinkCanvas from "./ExternalLinkCanvas";
import EyeCanvas from "./EyeCanvas";
import ThumbsUpCanvas from "./ThumbsUpCanvas";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isMagnetic, setIsMagnetic] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll(".magnetic-btn");

    buttons.forEach((button) => {
      const handleMouseEnter = () => {
        setIsMagnetic(true);
      };

      const handleMouseLeave = () => {
        setIsMagnetic(false);
        button.style.transition = "transform .4s linear"; // Smooth return on leave
        button.style.transform = "translate(0, 0)"; // Reset position
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
          button.style.transition = "transform 0.1s ease-out"; // Smoother, shorter transition on hover
          button.style.transform = `translate(${limitedDeltaX}px, ${limitedDeltaY}px)`; // Magnetic effect with limits
        }
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("mousemove", handleMouseMove);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mousemove", handleMouseMove);
      };
    });
  }, [isMagnetic]);

  const smileyCanvas = useRef(null);

  useEffect(() => {
    const canvas = smileyCanvas.current;
    const ctx = canvas.getContext("2d");
    const PW = 112;
    const PH = 128;
    const OX = 24;
    const CX = 80.5;
    const FACE_Y = 63.6;
    const EYE_DX = 8;
    const EYE_Y = 54.25;
    const EYE_RX = 3.3;
    const EYE_RY = 5.35;
    const PIVOT_Y = 57.15;
    const LOOP = 10.1;
    const BLINKS = [0.097, 0.396, 1.884, 2.889, 3.202, 4.665, 5.854, 8.081, 8.419, 9.862];
    const KEYS = [[-0.034, 1], [0, 0.65], [0.034, 0.14], [0.067, 0.2], [0.1, 0.75], [0.134, 1]];
    let k = 1;
    let frameId;
    let rotationAnimation;
    const hoverTarget = canvas.parentElement;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      k = canvas.width / PW;
    }

    function eyeScale(t) {
      const u = t % LOOP;
      for (const blink of BLINKS) {
        const tau = u - blink;
        if (tau <= KEYS[0][0] || tau >= KEYS[KEYS.length - 1][0]) continue;
        for (let i = 0; i < KEYS.length - 1; i++) {
          const [t0, s0] = KEYS[i];
          const [t1, s1] = KEYS[i + 1];
          if (tau >= t0 && tau <= t1) {
            return s0 + (s1 - s0) * (tau - t0) / (t1 - t0);
          }
        }
      }
      return 1;
    }

    function draw(ms) {
      const s = eyeScale(ms / 1000);
      ctx.setTransform(k, 0, 0, k, -OX * k, 0);
      ctx.clearRect(OX, 0, PW, PH);
      ctx.strokeStyle = "#0d0d0d";
      ctx.fillStyle = "#0d0d0d";
      ctx.lineCap = "round";

      ctx.lineWidth = 3.6;
      ctx.beginPath();
      ctx.ellipse(CX, FACE_Y, 32.7, 32.2, 0, 0, Math.PI * 2);
      ctx.stroke();

      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(CX, 58.56, 19.94, Math.PI / 2 - 0.8517, Math.PI / 2 + 0.8517);
      ctx.stroke();

      const cy = PIVOT_Y + (EYE_Y - PIVOT_Y) * s;
      const ry = Math.max(EYE_RY * s, 0.35);
      for (const dx of [-EYE_DX, EYE_DX]) {
        ctx.beginPath();
        ctx.ellipse(CX + dx, cy, EYE_RX, ry, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      frameId = requestAnimationFrame(draw);
    }

    function handleMouseEnter() {
      const currentTransform = getComputedStyle(canvas).transform;
      const startTransform = currentTransform === "none" ? "rotate(0deg)" : currentTransform;
      canvas.style.transition = "none";
      canvas.style.transform = startTransform;
      if (rotationAnimation) rotationAnimation.cancel();
      rotationAnimation = canvas.animate(
        [
          { transform: startTransform },
          { transform: `${startTransform} rotate(360deg)` },
        ],
        { duration: 2000, iterations: Infinity, easing: "linear" }
      );
    }

    function handleMouseLeave() {
      if (!rotationAnimation) return;
      const currentTransform = getComputedStyle(canvas).transform;
      canvas.style.transition = "none";
      canvas.style.transform = currentTransform;
      rotationAnimation.cancel();
      rotationAnimation = null;
      void canvas.offsetWidth;
      canvas.style.transition = "transform 600ms ease-out";
      canvas.style.transform = "rotate(0deg)";
    }

    resize();
    window.addEventListener("resize", resize);
    hoverTarget.addEventListener("mouseenter", handleMouseEnter);
    hoverTarget.addEventListener("mouseleave", handleMouseLeave);
    frameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      hoverTarget.removeEventListener("mouseenter", handleMouseEnter);
      hoverTarget.removeEventListener("mouseleave", handleMouseLeave);
      if (rotationAnimation) rotationAnimation.cancel();
      cancelAnimationFrame(frameId);
    };
  }, []);

  const footer = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ paused: true }); // Timeline create aur pause rakhein
    timeline.from(".flatter", {
      top: 250,
      duration: 0.5,
      stagger: 0.05,
      ease: "elastic.out(2,3.4)",
    });

    ScrollTrigger.create({
      trigger: footer.current,
      start: "0% 90%",
      end: "50% 50%",
      markers: false,
      onEnter: () => timeline.play(), // Jab trigger aaye, animation chale
      onLeaveBack: () => timeline.reverse(), // Jab trigger viewport se upar ki taraf jaye, reverse ho
    });
  });

  return (
    <>
      <div className="flex items-start justify-between lg:flex-row flex-col">
        <div className="w-full">
          <div className="md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor ml-auto border-b-0 flex items-center justify-center">
            <ThumbsUpCanvas />
          </div>

          <div className="border border-blackColor lg:border-r-0 border-r not-select py-[1.51rem]">
            <NavLink
              to="/"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${
                hoveredIndex === 0 || hoveredIndex === null
                  ? "text-black"
                  : "text-gray-500"
              }`}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink">
                    Home
                  </span>

                  <span className="w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center">
                    <img src={RightArrow} alt="" className="w-full" />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${
                      isActive ? "left-0" : "left-[-5px]"
                    } group-hover:left-0 ${hoveredIndex === 0 || hoveredIndex === null ? "bg-blackColor" : "bg-gray-500"}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/projects"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${
                hoveredIndex === 1 || hoveredIndex === null
                  ? "text-black"
                  : "text-gray-500"
              }`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink">
                    Projects
                  </span>

                  <span className="w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center">
                    <img src={RightArrow} alt="" className="w-full" />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${
                      isActive ? "left-0" : "left-[-5px]"
                    } group-hover:left-0 ${hoveredIndex === 1 || hoveredIndex === null ? "bg-blackColor" : "bg-gray-500"}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/about"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${
                hoveredIndex === 2 || hoveredIndex === null
                  ? "text-black"
                  : "text-gray-500"
              }`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink">
                    About
                  </span>

                  <span className="w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center">
                    <img src={RightArrow} alt="" className="w-full" />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${
                      isActive ? "left-0" : "left-[-5px]"
                    } group-hover:left-0 ${hoveredIndex === 2 || hoveredIndex === null ? "bg-blackColor" : "bg-gray-500"}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/services"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${
                hoveredIndex === 3 || hoveredIndex === null
                  ? "text-black"
                  : "text-gray-500"
              }`}
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink">
                    Services
                  </span>

                  <span className="w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center">
                    <img src={RightArrow} alt="" className="w-full" />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${
                      isActive ? "left-0" : "left-[-5px]"
                    } group-hover:left-0 ${hoveredIndex === 3 || hoveredIndex === null ? "bg-blackColor" : "bg-gray-500"}`}
                  ></span>
                </>
              )}
            </NavLink>

            <NavLink
              to="/contact"
              className={`group block text-[17px] font-semibold font-TTCPro tracking-wider uppercase text-blackColor relative px-7 footer-link w-full h-9 pointer-cursor overflow-hidden active-link ${
                hoveredIndex === 4 || hoveredIndex === null
                  ? "text-black"
                  : "text-gray-500"
              }`}
              onMouseEnter={() => setHoveredIndex(4)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {({ isActive }) => (
                <>
                  <span className="absolute left-7 top-1/2 -translate-y-1/2 transition-all duration-[400ms] ease-in-out group-hover:left-[4.5rem] flink">
                    Contact
                  </span>

                  <span className="w-7 inline-block absolute -left-7 group-hover:left-[1.7rem] transition-all duration-[400ms] ease-in-out h-full content-center">
                    <img src={RightArrow} alt="" className="w-full" />
                  </span>

                  <span
                    className={`absolute h-full w-[5px] bg-blackColor transition-all duration-300 ease-in-out thin ${
                      isActive ? "left-0" : "left-[-5px]"
                    } group-hover:left-0 ${hoveredIndex === 4 || hoveredIndex === null ? "bg-blackColor" : "bg-gray-500"}`}
                  ></span>
                </>
              )}
            </NavLink>
          </div>
        </div>
        <SendMessageBox />
      </div>

      <div className="lg:flex grid md:grid-cols-2 grid-cols-1">
        <NavLink
          target="blank"
          to="https://www.linkedin.com/in/priyjeet-manjhi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-40 md:border-r-0 md:border-t-0"
        >
          {/* Magnetic effect on wrapper div */}
          <div className="magnetic-btn relative w-full h-full">
            {/* Hover transition on inner span */}
            <span
              className="relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500"
              style={{
                position: "relative",
                transition: "left 0.3s ease, bottom 0.3s ease",
              }}
            >
              <span className="absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5">
                <img src={RightArrow} alt="" className="w-full" />
              </span>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14">
                Linkedin
              </span>
              <span className="absolute right-[-1.25rem] top-1/2 -translate-y-1/2">
                <ExternalLinkCanvas />
              </span>
            </span>
          </div>
        </NavLink>

        <NavLink
          target="blank"
          to="https://x.com/Priyjeet_Manjhi?t=dsUWTwxojzvOn5nEVSTS_w&s=09"
          className="group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-30 md:border-r-0 border-t-0"
        >
          {/* Magnetic effect on wrapper div */}
          <div className="magnetic-btn relative w-full h-full">
            {/* Hover transition on inner span */}
            <span
              className="relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500"
              style={{
                position: "relative",
                transition: "left 0.3s ease, bottom 0.3s ease",
              }}
            >
              <span className="absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5">
                <img src={RightArrow} alt="" className="w-full" />
              </span>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14">
                x (Twitter)
              </span>
              <span className="absolute right-[-1.25rem] top-1/2 -translate-y-1/2">
                <ExternalLinkCanvas />
              </span>
            </span>
          </div>
        </NavLink>

        <NavLink
          target="blank"
          to="https://www.instagram.com/developer_jeet_?igsh=MTl6YnZ6ZG11ZHJjOQ=="
          className="group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-20 md:border-r-0 border-t-0 md:border-t"
        >
          {/* Magnetic effect on wrapper div */}
          <div className="magnetic-btn relative w-full h-full">
            {/* Hover transition on inner span */}
            <span
              className="relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500"
              style={{
                position: "relative",
                transition: "left 0.3s ease, bottom 0.3s ease",
              }}
            >
              <span className="absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5">
                <img src={RightArrow} alt="" className="w-full" />
              </span>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14">
                Instagram
              </span>
              <span className="absolute right-[-1.25rem] top-1/2 -translate-y-1/2">
                <ExternalLinkCanvas />
              </span>
            </span>
          </div>
        </NavLink>

        <NavLink
          to={"/privacy"}
          className="group pointer-cursor h-[80px] w-[100%] border border-blackColor bg-blackColor flex justify-start items-center relative z-10 border-t-0 md:border-t"
        >
          {/* Magnetic effect on wrapper div */}
          <div className="magnetic-btn relative w-full h-full">
            {/* Hover transition on inner span */}
            <span
              className="relative overflow-hidden w-full h-full left-0 bottom-0 lg:group-hover:left-4 lg:group-hover:bottom-2 lg:group-hover:border lg:group-hover:border-blackColor bg-bodyColor  font-TTCPro uppercase text-[15px] tracking-[2px] inline-block font-bold content-center transition-all duration-500"
              style={{
                position: "relative",
                transition: "left 0.3s ease, bottom 0.3s ease",
              }}
            >
              <span className="absolute left-[-1.5rem] w-6 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-5">
                <img src={RightArrow} alt="" className="w-full" />
              </span>
              <span className="absolute left-5 top-1/2 -translate-y-1/2 transition-all duration-300 group-hover:left-14">
                privacy
              </span>
              <span className="absolute right-1 top-1/2 -translate-y-1/2">
                <EyeCanvas />
              </span>
            </span>
          </div>
        </NavLink>
      </div>

      <div className="flex items-start justify-between relative lg:flex-row flex-col">
        <div className="flex items-start justify-between relative w-full">
          <div className="flex items-start">
            <div className="group md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor border-t-0 bg-blackColor overflow-hidden">
              <div className="animate-spiner text-bodyColor">
                <svg
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMin meet"
                  className="--icon --icon-spark-4 scale-50 group-hover:scale-75 transition-all duration-500" // Changed class to className
                >
                  <path
                    d="M12 2.5c4 0 1.7 6.2 1.7 6.2s3.7-5.4 6-2.5-3.7 5.3-3.7 5.3 6.5-.6 5.6 3c-.8 3.7-6.5.4-6.5.4s4.7 4.7 1.2 6.4c-3.6 1.6-4.3-4.9-4.3-4.9s-.8 6.5-4.3 4.9c-3.4-1.7 1.2-6.4 1.2-6.4s-5.7 3.7-6.5-.4c-1-4 5.6-3 5.6-3s-6-2-3.7-5.3c2.2-3.3 5.9 2.5 5.9 2.5S8 2.5 12 2.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            <div className="group md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor border-t-0 md:block hidden">
              <div className="text-blackColor w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <canvas
                  ref={smileyCanvas}
                  aria-label="Blinking smiley face"
                  className="h-full aspect-[112/128]"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="group w-[80px] h-[80px] border border-blackColor border-t-0 bg-blackColor overflow-hidden md:block hidden">
              <div className="animate-spiner text-bodyColor w-full h-full flex items-center justify-center">
                <svg
                  width="54"
                  height="54"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
                  strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
                  strokeWidth="1" // Changed from stroke-width to strokeWidth
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="scale-75 group-hover:scale-90 transition-all duration-500"
                >
                  <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
                  <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
                  <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
                  <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
                  <path d="M12 2.25v19.5"></path>
                  <path d="M21.75 12H2.25"></path>
                </svg>
              </div>
            </div>

            <div className="group md:w-[80px] md:h-[80px] w-[70px] h-[70px] border border-blackColor border-t-0">
              <div className=" text-blackColor w-full h-full flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round" // Changed from stroke-linecap to strokeLinecap
                  strokeLinejoin="round" // Changed from stroke-linejoin to strokeLinejoin
                  strokeWidth="1" // Changed from stroke-width to strokeWidth
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 12v10H4V12"></path>
                  <path d="M2 7h20v5H2z"></path>
                  <path d="M12 22V7"></path>
                  <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                  <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute xl:top-[40px] lg:top-[10px] md:w-[60%] left-1/2 -translate-x-1/2 flex-shrink-0 block text-[14px] text-center relative lg:p-0 py-14 w-full px-4 md:px-0">
          <p className="pb-1">
            All work © Piojeet Manjhi 2022-{new Date().getFullYear()}. All
            rights reserved
          </p>

          <p>
            UI/UX Developer & Designer · Based in India · Available for
            freelance & full-time opportunities
          </p>
        </div>
      </div>

      <div ref={footer}>
      <div
        
        className="text-[10vw] font-TTCPro uppercase font-black lg:flex items-center leading-3 h-fit hidden overflow-hidden lg:pb-10"
      >
        <span className="inline-flex flatter relative">p</span>
        <span className="inline-block flatter relative">r</span>
        <span className="inline-block flatter relative">i</span>
        <span className="inline-block flatter relative">y</span>
        <span className="inline-block flatter relative">j</span>
        <span className="inline-block flatter relative">e</span>
        <span className="inline-block flatter relative">e</span>
        <span className="inline-block flatter relative">t</span>
        <span className="inline-block flatter relative w-[10vw] h-[10vw] text-blackColor top-8">
          <svg
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMin meet"
            className="--icon --icon-spark-1 inline-block animate-spiner"
          >
            <path d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z"></path>
          </svg>
        </span>
      </div>
      </div>
    </>
  );
}

export default Footer;
