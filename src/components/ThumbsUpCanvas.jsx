import { useEffect, useRef } from "react";

const CHAINS = [
  [
    152.38, 122.62, 153.05, 121.83, 153.39, 121.31, 153.98, 119.81, 154.8,
    117.94, 155.4, 116.81, 155.87, 115.56, 156.23, 114.81, 156.64, 113.81,
    157.58, 111.94, 157.99, 110.81, 158.8, 108.94, 159.48, 107.69, 159.78,
    107.21, 159.98, 107.0, 160.2, 106.84, 160.44, 106.71, 160.81, 106.58,
    161.31, 106.53, 161.94, 106.6, 162.31, 106.7, 162.81, 106.91, 163.31,
    107.23, 163.81, 107.69, 164.25, 108.19, 164.76, 108.94, 165.0, 109.44,
    165.22, 110.06, 165.3, 110.56, 165.33, 116.44, 165.48, 117.44, 165.55,
    117.69, 165.66, 117.94, 165.95, 118.3, 166.31, 118.58, 166.69, 118.75,
    168.19, 119.03, 168.69, 119.06, 173.31, 119.07, 174.81, 119.24, 175.31,
    119.38, 175.94, 119.63, 176.44, 119.96, 177.31, 120.81, 177.74, 121.31,
    178.06, 121.81, 178.3, 122.31, 178.45, 122.81, 178.63, 123.69, 178.68,
    124.31, 178.67, 125.31, 178.47, 126.69, 178.42, 127.56, 178.28, 128.69,
    177.74, 131.44, 177.47, 133.06, 177.42, 133.94, 177.28, 135.06, 177.01,
    136.56, 176.46, 138.69, 176.25, 139.19, 176.05, 139.56, 175.72, 140.06,
    175.42, 140.44, 174.81, 141.04, 174.44, 141.34, 173.81, 141.71, 173.19,
    141.99, 171.94, 142.26, 171.44, 142.31, 153.81, 142.31, 153.25, 142.26,
    152.69, 142.14,
  ],
  [
    152.69, 142.14, 152.13, 142.26, 151.7, 142.31, 147.44, 142.3, 147.06,
    142.26, 146.69, 142.16, 145.81, 141.8, 145.31, 141.5, 144.94, 141.18,
    144.61, 140.81, 144.36, 140.44, 144.16, 139.94, 144.02, 139.44, 143.85,
    138.31, 143.81, 137.81, 143.82, 127.06, 144.04, 125.44, 144.17, 124.94,
    144.4, 124.44, 144.85, 123.82, 145.31, 123.4, 145.94, 122.99, 146.44,
    122.82, 147.44, 122.62, 147.94, 122.57, 151.45, 122.56, 152.38, 122.62,
  ],
  [152.38, 122.62, 152.53, 123.28, 152.68, 125.06, 152.69, 142.14],
];

function ThumbsUpCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const PS = 88;
    const YC = 119.0;
    const YA = 106.7;
    const XC = 160.5;
    const DM = 8.3;
    const WIDEN = 0.35;
    const LEAN = 2.5;
    const POP = 0.22;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const chain of CHAINS) {
      for (let i = 0; i < chain.length; i += 2) {
        minX = Math.min(minX, chain[i]);
        maxX = Math.max(maxX, chain[i]);
        minY = Math.min(minY, chain[i + 1]);
        maxY = Math.max(maxY, chain[i + 1]);
      }
    }
    const CX = (minX + maxX) / 2;
    const CY = (minY + maxY) / 2;
    const clamp = (x) => Math.min(1, Math.max(0, x));
    const inOutSine = (x) => -(Math.cos(Math.PI * clamp(x)) - 1) / 2;
    const inOutCubic = (x) => {
      x = clamp(x);
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };
    const ZETA = 0.7;
    const WN = 16.5;
    const WD = WN * Math.sqrt(1 - ZETA * ZETA);
    const CURL_START = 0.1;
    const CURL_END = 0.52;
    const POP_START = 0.54;
    const ENTER_END = 0.95;
    const LEAVE_DUR = 0.3;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let k = 1;
    let state = "idle";
    let t = 0;
    let wantHover = false;
    let last = null;
    let curl = 0;
    let size = 1;
    let from = [0, 1];
    let frameId;

    function spring(tau) {
      if (tau <= 0) return 0;
      return (
        1 -
        Math.exp(-ZETA * WN * tau) *
          (Math.cos(WD * tau) +
            (ZETA / Math.sqrt(1 - ZETA * ZETA)) * Math.sin(WD * tau))
      );
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      k = canvas.width / PS;
    }

    function setHover(on) {
      wantHover = on;
      if (on && state === "idle") {
        state = "entering";
        t = 0;
      } else if (!on && (state === "entering" || state === "hover")) {
        state = "leaving";
        t = 0;
        from = [curl, size];
      }
    }

    function drawIcon(amount) {
      ctx.strokeStyle = "#111111";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      for (const chain of CHAINS) {
        ctx.beginPath();
        for (let i = 0; i < chain.length; i += 2) {
          let x = chain[i];
          let y = chain[i + 1];
          const weight = clamp((YC - y) / (YC - YA));
          y += DM * amount * weight;
          x += (x - XC) * WIDEN * amount * weight + LEAN * amount * weight;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    }

    function frame(ms) {
      const dt = last === null ? 0 : Math.min((ms - last) / 1000, 0.05);
      last = ms;
      if (state === "entering") {
        t += dt;
        const pop = spring(t - POP_START);
        const dCurl = inOutSine((t - CURL_START) / (CURL_END - CURL_START));
        curl = t < POP_START ? dCurl : dCurl * (1 - clamp(pop));
        size = 1 + POP * (t < POP_START ? 0 : pop);
        if (t >= ENTER_END) {
          state = "hover";
          curl = 0;
          size = 1 + POP;
          if (!wantHover) setHover(false);
        }
      } else if (state === "leaving") {
        t += dt;
        const easing = inOutCubic(t / LEAVE_DUR);
        curl = from[0] * (1 - easing);
        size = from[1] + (1 - from[1]) * easing;
        if (t >= LEAVE_DUR) {
          state = "idle";
          curl = 0;
          size = 1;
          if (wantHover) setHover(true);
        }
      }

      ctx.setTransform(k, 0, 0, k, 0, 0);
      ctx.clearRect(0, 0, PS, PS);
      ctx.translate(PS / 2, PS / 2);
      ctx.scale(size, size);
      ctx.translate(-CX, -CY);
      drawIcon(curl);
      frameId = requestAnimationFrame(frame);
    }

    const handlePointerEnter = () => setHover(true);
    const handlePointerLeave = () => setHover(false);
    const handlePointerCancel = () => setHover(false);
    canvas.addEventListener("pointerenter", handlePointerEnter);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("pointercancel", handlePointerCancel);
    window.addEventListener("resize", resize);
    resize();
    frameId = requestAnimationFrame(frame);

    return () => {
      canvas.removeEventListener("pointerenter", handlePointerEnter);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("pointercancel", handlePointerCancel);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="88"
      height="88"
      aria-label="Thumbs-up icon: curls down, then pops up bigger on hover"
      className="block w-full h-full touch-manipulation"
    />
  );
}

export default ThumbsUpCanvas;
