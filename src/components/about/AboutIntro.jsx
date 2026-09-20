import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/priyjeet-manjhi.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function AboutIntro() {
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const startDate = new Date("dec 1, 2022");
    const today = new Date();

    const years = today.getFullYear() - startDate.getFullYear();
    let months = today.getMonth() - startDate.getMonth();

    if (months < 0) {
      months += 12;
    }

    setExperience(`${years} years and ${months} months`);
  }, []);

  const wrapperRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    const loop = horizontalLoop(boxes, {
      paused: false,
      repeat: -1,
      speed: 0.5,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      loop.kill();
    };
  }, []);

  function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () =>
          tl.totalTime(tl.rawTime() + tl.duration() * 100),
      }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      pixelsPerSecond = (config.speed || 1) * 100,
      snap =
        config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
      totalWidth,
      curX,
      distanceToStart,
      distanceToLoop,
      item,
      i;
    gsap.set(items, {
      xPercent: (i, el) => {
        let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
            gsap.getProperty(el, "xPercent"),
        );
        return xPercents[i];
      },
    });
    gsap.set(items, { x: 0 });
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
      (parseFloat(config.paddingRight) || 0);
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop =
        distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0,
      )
        .fromTo(
          item,
          {
            xPercent: snap(
              ((curX - distanceToLoop + totalWidth) / widths[i]) * 100,
            ),
          },
          {
            xPercent: xPercents[i],
            duration:
              (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
    }
    return tl;
  }

  const skills = [
    { name: "FRONTEND DEVELOPER" },
    { name: "FRONTEND DEVELOPER" },
    { name: "FRONTEND DEVELOPER" },
  ];

  const alertSvg = (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z"></path>
      <path d="M12 8v4"></path>
      <path d="M12 16h.01"></path>
    </svg>
  );

  // ---------------- Halftone reveal effect ----------------
  const photoContainerRef = useRef(null);
  const canvasRef = useRef(null);
  const imgRef = useRef(null);
  const borderRingRef = useRef(null);

  // reveal circle radius as % of container (matches clip-path circle(16% ...))
  const REVEAL_RADIUS_PERCENT = 16;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = photoContainerRef.current;
    const ctx = canvas.getContext("2d");

    const drawHalftone = () => {
      const cssWidth = container.clientWidth;
      const cssHeight = container.clientHeight;

      const dpr = window.devicePixelRatio || 1;

      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      canvas.style.width = cssWidth + "px";
      canvas.style.height = cssHeight + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const width = cssWidth;
      const height = cssHeight;

      // Step 1: image ko offscreen canvas par draw karke pixel data nikalo
      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d");

      const image = imgRef.current;

      const imgRatio = image.naturalWidth / image.naturalHeight;
      const boxRatio = width / height;
      let drawWidth, drawHeight, offsetX, offsetY;

      if (imgRatio > boxRatio) {
        drawHeight = height;
        drawWidth = height * imgRatio;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      } else {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      }

      offCtx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
      let imageData = offCtx.getImageData(0, 0, width, height);

      // ---- STEP 0: SHARPEN — image ko halftone banane se pehle sharpen karo ----
      // Ye edges (eyes, nose, lips, jawline) ko boost karta hai taaki dots unhe
      // accurately trace kar sakein, warna soft/blurry photo mein features kho jaate hain
      imageData = sharpenImageData(imageData, width, height, 0.6);
      const pixels = imageData.data;

      // Step 2: main canvas par halftone dots draw karo
      const cellSize = 3; // pehle 4 tha, aur bhi fine karne ke liye 3
      const maxRadius = cellSize / 2;

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);
      const brightnessGrid = new Float32Array(cols * rows);

      let minB = 1;
      let maxB = 0;

      // har cell ke saare pixels ka average brightness (noise-resistant)
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const startX = col * cellSize;
          const startY = row * cellSize;
          const endX = Math.min(startX + cellSize, width);
          const endY = Math.min(startY + cellSize, height);

          let sum = 0;
          let count = 0;

          for (let y = startY; y < endY; y++) {
            for (let x = startX; x < endX; x++) {
              const i = (y * width + x) * 4;
              const r = pixels[i];
              const g = pixels[i + 1];
              const b = pixels[i + 2];
              sum += (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              count++;
            }
          }

          const avgBrightness = count > 0 ? sum / count : 1;
          brightnessGrid[row * cols + col] = avgBrightness;

          if (avgBrightness < minB) minB = avgBrightness;
          if (avgBrightness > maxB) maxB = avgBrightness;
        }
      }

      const range = Math.max(maxB - minB, 0.05);
      const gamma = 0.7; // aur sharp result ke liye 0.6 tak kar sakte ho

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#000000";
      ctx.imageSmoothingEnabled = false; // crisp circular dots, koi blur nahi

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          let normalized = (brightnessGrid[row * cols + col] - minB) / range;
          normalized = Math.min(1, Math.max(0, normalized));
          normalized = Math.pow(normalized, gamma);

          const radius = (1 - normalized) * maxRadius;

          if (radius > 0.2) {
            const x = col * cellSize;
            const y = row * cellSize;
            ctx.beginPath();
            ctx.arc(x + cellSize / 2, y + cellSize / 2, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    };

    // Simple 3x3 sharpen (unsharp mask) — amount 0 (no effect) - 1 (strong)
    function sharpenImageData(imageData, width, height, amount) {
      const src = imageData.data;
      const out = new Uint8ClampedArray(src.length);

      const kernel = [0, -1, 0, -1, 5, -1, 0, -1, 0];

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (y * width + x) * 4;

          for (let c = 0; c < 3; c++) {
            // R, G, B — alpha skip
            let sum = 0;
            let k = 0;
            for (let ky = -1; ky <= 1; ky++) {
              for (let kx = -1; kx <= 1; kx++) {
                const ny = Math.min(height - 1, Math.max(0, y + ky));
                const nx = Math.min(width - 1, Math.max(0, x + kx));
                const nIdx = (ny * width + nx) * 4 + c;
                sum += src[nIdx] * kernel[k];
                k++;
              }
            }
            // original aur sharpened value ke beech blend karo (amount se control)
            const original = src[idx + c];
            out[idx + c] = original * (1 - amount) + sum * amount;
          }
          out[idx + 3] = src[idx + 3];
        }
      }

      return new ImageData(out, width, height);
    }

    if (imgRef.current.complete) {
      drawHalftone();
    } else {
      imgRef.current.onload = drawHalftone;
    }

    window.addEventListener("resize", drawHalftone);
    return () => window.removeEventListener("resize", drawHalftone);
  }, []);

  // border ring ko center-anchored bana do taaki x/y sirf position control kare
  useEffect(() => {
    gsap.set(borderRingRef.current, { xPercent: -50, yPercent: -50 });
  }, []);

  const handleMouseMove = (e) => {
    const rect = photoContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(canvasRef.current, {
      clipPath: `circle(${REVEAL_RADIUS_PERCENT}% at ${x}px ${y}px)`,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(borderRingRef.current, {
      x,
      y,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(canvasRef.current, {
      clipPath: `circle(0% at 50% 50%)`,
      duration: 0.4,
      ease: "power2.inOut",
    });

    gsap.to(borderRingRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
    });
  };
  // ---------------------------------------------------------

  return (
    <div className="my-20">
      <div className="md:h-[80px] md:w-[80px] h-[70px] w-[70px] flex items-center justify-center border border-blackColor border-b-0 ml-auto">
        <span className="w-8 block rotate-180">{alertSvg}</span>
      </div>

      <div className="flex items-center backdrop-blur-sm border border-blackColor relative lg:flex-row flex-col">
        <div className="absolute top-0 h-full lg:w-[500px] sm:w-[300px] sm:right-0 lg:left-0 hidden sm:block pointer-events-none">
          <div
            ref={wrapperRef}
            className="wrapper w-full flex items-center overflow-hidden justify-center sticky top-0 py-5 border border-blackColor bg-[#ffffff79] z-20"
          >
            {skills.map((skill, index) => (
              <div
                key={`skill-${index}`}
                ref={(el) => (boxesRef.current[index] = el)}
                className="box flex gap-7 items-center justify-center px-5 flex-shrink-0 relative font-bold flex-nowrap"
              >
                <p className="text-[40px]">{skill.name}</p>
                <span className="animate-spiner">
                  <svg
                    role="img"
                    width="40px"
                    height="40px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    preserveAspectRatio="xMidYMin meet"
                    className="--icon --icon-spark-1"
                  >
                    <path
                      d="M3.4 6.5 9 10.8l-7-1v4.4l7-1-5.7 4.3 3.1 3.1 4.3-5.7-1 7.1h4.4l-1-7.1 4.3 5.7 3.1-3-5.8-4.4 7.2 1V9.8l-7.1 1 5.7-4.3-3-3.1-4.4 5.8 1-7.2H9.8l1 7.2-4.3-5.8Z"
                      fill="#0f0f0f"
                    ></path>
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[50%] w-full flex-shrink-0 h-full flex items-center justify-center p-6">
          <div
            ref={photoContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="md:w-[30vw] w-[60vw] border border-blackColor overflow-hidden aspect-square relative"
          >
            <img
              ref={imgRef}
              src={img}
              alt="Priyjeet Manjhi"
              className="mix-blend-multiply relative z-0 w-full h-full object-cover"
            />
            <canvas
              ref={canvasRef}
              className="absolute top-0 left-0 z-10 pointer-events-none"
              style={{ clipPath: "circle(0% at 50% 50%)" }}
            />
            <div
              ref={borderRingRef}
              className="absolute top-0 left-0 aspect-square rounded-full border-[1.5px] border-blackColor pointer-events-none z-20 opacity-0"
              style={{ width: `${REVEAL_RADIUS_PERCENT * 2}%` }}
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex-shrink-0 lg:border-l border-blackColor border-t-0 p-4 border-l-0">
          <h3 className="md:text-[40px] text-[25px] font-semibold uppercase">
            Priyjeet Manjhi
          </h3>
          <p className="md:text-[20px] text-[16px] text-blackColor">
            Front-end Developer with <strong>{experience}</strong> of front-end
            web development expertise, uniting tech passion & UI/UX mindset for
            effortless & attractive digital experiences I have experience in
            developing well-optimized web apps and user-friendly interfaces to
            make the end-user experience smooth as possible.
          </p>
          <br />
          <p className="md:text-[20px] text-[16px] text-blackColor">
            I am a fast learner, willing to learn new technology stack with
            enthusiasm and depth of knowledge, and I always want to be thorough
            with details. From high-performance websites to novel design
            solutions and drive more user engagement, I strive to combine
            technical knowledge with creativity in all the projects where I am
            involved.
          </p>
          <br />
          <p className="md:text-[20px] text-[16px] text-blackColor">
            I find I work best in high-pressure environments (everything city),
            where there is a need quick thinking and on-your-foot adaptability,
            sectors of operational/project management, and marketing/sales
            roles. So... how can we work together to make your next project come
            alive?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
