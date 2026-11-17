import { useEffect, useRef } from "react";

const DATA = {
  body: [
    [
      40.79, 48.88, 40.62, 48.76, 40.44, 48.54, 40.28, 48.21, 40.2, 47.88,
      40.17, 47.46, 40.18, 43.46, 40.11, 43.04, 39.89, 42.62, 39.21, 41.76,
      38.12, 40.68, 37.29, 39.96, 36.88, 39.71, 36.38, 39.63, 34.12, 39.68,
      32.96, 39.64, 32.04, 39.65, 31.46, 39.56, 31.1, 39.38, 30.95, 39.21,
      30.88, 39.04, 30.84, 38.88, 30.86, 38.62, 31.19, 37.71, 31.46, 36.54,
      31.65, 36.04, 32.07, 35.38, 32.52, 34.46, 32.74, 34.12, 33.15, 33.71,
      33.71, 33.32, 34.21, 33.07, 35.1, 32.71, 35.54, 32.58, 36.04, 32.49,
      36.62, 32.45, 37.21, 32.48, 38.88, 32.71, 39.29, 32.69, 39.71, 32.56,
      40.09, 32.29, 40.71, 31.55, 42.71, 29.58, 43.4, 29.12, 44.04, 28.64,
      44.88, 28.21, 45.88, 27.59, 46.21, 27.47, 47.46, 27.14, 48.54, 26.66,
      49.12, 26.49, 50.12, 26.39, 51.71, 26.33, 52.54, 26.23, 52.88, 26.24,
      53.12, 26.33, 53.38, 26.53, 53.49, 26.71, 53.59, 26.96, 53.62, 27.21,
      53.49, 28.54, 53.41, 30.12, 53.29, 30.79, 53.12, 31.41, 52.62, 32.62,
      52.34, 33.71, 52.2, 34.12, 51.16, 35.88, 50.29, 37.12, 49.71, 37.68,
      49.12, 38.34, 48.38, 39.08, 47.64, 39.71, 47.43, 39.96, 47.29, 40.21,
      47.15, 40.62, 47.11, 41.04, 47.33, 42.38, 47.36, 42.88, 47.34, 43.46,
      47.18, 44.71, 47.04, 45.12, 46.79, 45.62, 46.38, 46.29, 45.79, 46.92,
      45.45, 47.21, 44.79, 47.63, 44.01, 48.21, 43.62, 48.35, 42.46, 48.6,
      41.38, 48.95, 41.04, 48.96,
    ],
    [
      39.68, 39.12, 40.21, 39.61, 40.7, 40.12, 41.04, 40.37, 41.38, 40.48,
      41.71, 40.52, 42.04, 40.52, 42.46, 40.45, 43.04, 40.23, 43.96, 39.57,
      44.62, 39.3, 44.95, 39.12, 47.21, 37.32, 48.11, 36.38, 48.66, 35.62,
      49.18, 35.04, 49.7, 34.21, 50.12, 33.65, 50.28, 33.38, 50.46, 32.88,
      50.72, 31.87, 51.19, 30.62, 51.35, 29.96, 51.42, 29.46, 51.41, 29.12,
      51.35, 28.88, 51.21, 28.66, 50.96, 28.49, 50.71, 28.42, 50.38, 28.41,
      49.96, 28.48, 49.46, 28.61, 48.54, 28.96, 46.46, 29.65, 44.81, 30.62,
      44.19, 31.21, 43.54, 31.71, 42.88, 32.29, 42.54, 32.64, 42.11, 33.21,
      41.52, 33.88, 39.88, 36.29, 39.6, 36.79, 39.35, 37.54, 39.28, 38.12,
      39.33, 38.46, 39.41, 38.71,
    ],
    [
      33.69, 37.21, 33.83, 37.38, 33.96, 37.47, 34.12, 37.53, 34.38, 37.57,
      36.21, 37.52, 36.54, 37.48, 36.83, 37.38, 37.12, 37.13, 37.38, 36.7,
      37.9, 35.46, 37.95, 35.21, 37.9, 34.96, 37.76, 34.79, 37.54, 34.68,
      37.21, 34.62, 36.62, 34.57, 36.21, 34.58, 35.88, 34.63, 35.29, 34.85,
      34.96, 35.06, 34.62, 35.34, 33.83, 36.29, 33.69, 36.54, 33.62, 36.79,
      33.63, 37.04,
    ],
    [
      42.62, 46.18, 42.88, 46.26, 43.12, 46.26, 43.38, 46.19, 43.62, 46.04,
      44.46, 45.24, 44.68, 44.96, 44.88, 44.65, 45.03, 44.29, 45.18, 43.79,
      45.27, 43.04, 45.25, 42.62, 45.18, 42.29, 45.04, 42.04, 44.88, 41.9,
      44.71, 41.83, 44.46, 41.82, 44.04, 41.94, 42.83, 42.54, 42.61, 42.71,
      42.42, 42.96, 42.33, 43.21, 42.29, 43.51, 42.24, 45.46, 42.34, 45.88,
      42.46, 46.05,
    ],
  ],
  flame: {
    idle: [
      [
        29.51, 50.46, 29.24, 49.94, 29.28, 49.35, 29.38, 48.76, 29.43, 48.16,
        29.51, 47.57, 29.67, 47.0, 29.89, 46.44, 30.13, 45.9, 30.32, 45.34,
        30.54, 44.78, 30.89, 44.3, 31.28, 43.85, 31.68, 43.41, 32.15, 43.04,
        32.65, 42.71, 33.19, 42.47, 33.77, 42.33, 34.37, 42.32, 34.96, 42.41,
        35.52, 42.6, 36.0, 42.95, 36.43, 43.36, 36.86, 43.77, 37.23, 44.24,
        37.44, 44.79, 37.52, 45.38, 37.51, 45.98, 37.43, 46.57, 37.25, 47.14,
        36.94, 47.64, 36.56, 48.1, 36.11, 48.5, 35.65, 48.87, 35.17, 49.23,
        34.62, 49.45, 34.05, 49.61, 33.5, 49.85, 32.97, 50.12, 32.41, 50.33,
        31.82, 50.44, 31.23, 50.5, 30.64, 50.6, 30.05, 50.68,
      ],
      [
        31.87, 47.96, 31.75, 47.73, 31.74, 47.48, 31.8, 47.23, 31.9, 46.99,
        32.02, 46.76, 32.12, 46.52, 32.22, 46.28, 32.32, 46.04, 32.42, 45.8,
        32.52, 45.57, 32.64, 45.34, 32.79, 45.13, 32.96, 44.94, 33.16, 44.77,
        33.37, 44.62, 33.6, 44.51, 33.85, 44.44, 34.11, 44.42, 34.37, 44.43,
        34.62, 44.48, 34.85, 44.59, 35.06, 44.74, 35.22, 44.94, 35.33, 45.18,
        35.38, 45.43, 35.4, 45.69, 35.37, 45.95, 35.31, 46.2, 35.2, 46.43,
        35.06, 46.65, 34.89, 46.84, 34.7, 47.02, 34.49, 47.17, 34.27, 47.29,
        34.03, 47.4, 33.79, 47.49, 33.55, 47.58, 33.31, 47.68, 33.07, 47.78,
        32.84, 47.89, 32.6, 48.0, 32.35, 48.07, 32.1, 48.07,
      ],
    ],
    short: [
      [
        24.21, 54.75, 23.94, 53.93, 24.28, 53.1, 24.57, 52.25, 24.93, 51.43,
        25.35, 50.64, 25.67, 49.8, 25.96, 48.96, 26.35, 48.15, 26.89, 47.44,
        27.5, 46.77, 27.99, 46.03, 28.56, 45.34, 29.23, 44.74, 29.84, 44.09,
        30.47, 43.45, 31.21, 42.94, 32.05, 42.63, 32.92, 42.44, 33.81, 42.34,
        34.69, 42.48, 35.46, 42.93, 36.11, 43.55, 36.7, 44.22, 37.07, 45.04,
        37.05, 45.92, 36.75, 46.76, 36.5, 47.62, 36.24, 48.48, 35.71, 49.2,
        35.08, 49.84, 34.52, 50.53, 33.82, 51.1, 33.1, 51.63, 32.45, 52.25,
        31.78, 52.84, 31.0, 53.28, 30.15, 53.57, 29.28, 53.75, 28.4, 53.96,
        27.58, 54.31, 26.77, 54.69, 25.91, 54.95, 25.03, 55.06,
      ],
      [
        27.82, 51.46, 27.68, 51.0, 27.7, 50.52, 27.82, 50.04, 28.04, 49.61,
        28.31, 49.2, 28.58, 48.79, 28.83, 48.37, 29.09, 47.96, 29.39, 47.58,
        29.68, 47.19, 29.97, 46.79, 30.23, 46.38, 30.49, 45.96, 30.79, 45.58,
        31.16, 45.27, 31.6, 45.05, 32.06, 44.88, 32.53, 44.77, 33.02, 44.71,
        33.5, 44.7, 33.98, 44.81, 34.4, 45.05, 34.72, 45.41, 34.88, 45.87,
        34.85, 46.35, 34.66, 46.8, 34.44, 47.23, 34.22, 47.67, 33.96, 48.08,
        33.65, 48.46, 33.3, 48.8, 32.92, 49.1, 32.54, 49.41, 32.18, 49.75,
        31.84, 50.09, 31.46, 50.4, 31.05, 50.66, 30.62, 50.9, 30.18, 51.1,
        29.71, 51.25, 29.23, 51.33, 28.75, 51.42, 28.28, 51.55,
      ],
    ],
    long: [
      [
        15.65, 64.29, 15.96, 63.01, 16.61, 61.7, 17.4, 60.48, 18.25, 59.29,
        19.17, 58.15, 19.9, 56.89, 20.73, 55.69, 21.56, 54.48, 22.25, 53.19,
        23.0, 51.93, 23.89, 50.78, 24.77, 49.62, 25.67, 48.47, 26.76, 47.5,
        27.67, 46.35, 28.75, 45.37, 29.92, 44.5, 30.97, 43.48, 32.3, 42.88,
        33.74, 42.61, 35.16, 42.88, 36.29, 43.79, 37.17, 44.96, 37.25, 46.4,
        36.87, 47.82, 36.27, 49.12, 35.3, 50.2, 34.54, 51.45, 33.48, 52.46,
        32.45, 53.5, 31.29, 54.39, 30.12, 55.28, 28.99, 56.21, 27.88, 57.16,
        26.81, 58.16, 25.7, 59.1, 24.48, 59.89, 23.29, 60.73, 22.04, 61.5,
        20.8, 62.27, 19.43, 62.77, 18.2, 63.57, 17.03, 64.43,
      ],
      [
        21.04, 59.29, 21.34, 58.45, 21.88, 57.67, 22.31, 56.83, 22.79, 56.01,
        23.38, 55.27, 23.93, 54.5, 24.59, 53.82, 25.2, 53.1, 25.62, 52.25,
        26.13, 51.46, 26.78, 50.77, 27.44, 50.08, 28.06, 49.37, 28.66, 48.63,
        29.23, 47.88, 29.93, 47.24, 30.52, 46.5, 31.09, 45.74, 31.89, 45.24,
        32.77, 44.89, 33.71, 44.86, 34.59, 45.19, 35.03, 45.99, 34.84, 46.91,
        34.52, 47.81, 34.03, 48.61, 33.36, 49.29, 32.71, 49.97, 32.14, 50.73,
        31.52, 51.45, 30.83, 52.09, 29.99, 52.54, 29.24, 53.11, 28.6, 53.81,
        27.9, 54.45, 27.27, 55.16, 26.57, 55.79, 25.79, 56.32, 25.02, 56.87,
        24.19, 57.34, 23.43, 57.9, 22.67, 58.47, 21.89, 59.0,
      ],
    ],
  },
};

function RocketCanvas({ light = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const PW = 76;
    const PH = 68;
    const G_IDLE = [-3.4, -4.45];
    const G_HOVER = [-20.4, 1.0];
    const H_SHIFT = [22, -10];
    const IGNITE = 0.14;
    const A_DUR = 0.5;
    const A_DIST = [100, -75];
    const B_START = 0.5;
    const B_DUR = 0.7;
    const B_FROM = [-56, 62];
    const ENTER_END = B_START + B_DUR;
    const LEAVE_END = 0.5;
    const PULSE = 0.6;
    const INK = light ? "#F8F8F8" : "#121212";
    const BG = light ? "#0F0F0F" : "#F8F8F8";
    const TIPS = {
      idle: [29.5, 50.5],
      short: [24.2, 54.7],
      long: [15.6, 64.3],
    };
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const clamp = (x) => Math.min(1, Math.max(0, x));
    const clampE = (x) => Math.min(1, Math.max(0, x));
    const smooth = (t) => {
      t = clamp(t);
      return t * t * (3 - 2 * t);
    };
    const inCubic = (x) => x * x * x;
    const outCubic = (x) => 1 - Math.pow(1 - x, 3);
    const inOutCubic = (x) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    const pulse = (tau) => 1.5 + 0.5 * Math.sin((2 * Math.PI * tau) / PULSE + Math.PI / 2);
    let k = 1;
    let state = "idle";
    let t = 0;
    let wantHover = false;
    let last = null;
    let hoverClock = 0;
    let leaveF = 1;
    let leaveBob = [0, 0];
    let frameId;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      k = canvas.width / PW;
    }

    function addLoop(flat) {
      ctx.moveTo(flat[0], flat[1]);
      for (let i = 2; i < flat.length; i += 2) {
        ctx.lineTo(flat[i], flat[i + 1]);
      }
      ctx.closePath();
    }

    function flameLoop(a, b, amount) {
      return a.map((value, i) => value + (b[i] - value) * amount);
    }

    function drawRocket(dx, dy, flameAmount) {
      ctx.save();
      ctx.translate(dx, dy);
      ctx.fillStyle = INK;
      ctx.beginPath();
      for (const loop of DATA.body) addLoop(loop);
      ctx.fill("evenodd");
      const flame = DATA.flame;
      const from = flameAmount <= 1 ? flame.idle : flame.short;
      const to = flameAmount <= 1 ? flame.short : flame.long;
      const amount = clamp(flameAmount <= 1 ? flameAmount : flameAmount - 1);
      ctx.beginPath();
      addLoop(flameLoop(from[0], to[0], amount));
      addLoop(flameLoop(from[1], to[1], amount));
      ctx.fill("evenodd");
      ctx.restore();
    }

    function tipAt(flameAmount) {
      const a = flameAmount <= 1 ? TIPS.idle : TIPS.short;
      const b = flameAmount <= 1 ? TIPS.short : TIPS.long;
      const amount = clamp(flameAmount <= 1 ? flameAmount : flameAmount - 1);
      return [a[0] + (b[0] - a[0]) * amount, a[1] + (b[1] - a[1]) * amount];
    }

    function puff(x, y, age, life, r0, r1, alpha) {
      if (age <= 0 || age >= life) return;
      const amount = age / life;
      ctx.save();
      ctx.globalAlpha = alpha * (1 - amount) * (1 - amount * 0.3);
      ctx.strokeStyle = INK;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.arc(x, y, r0 + (r1 - r0) * (1 - Math.pow(1 - amount, 2)), 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    function posA(time) {
      const amount = inCubic(clampE((time - IGNITE) / A_DUR));
      return [G_IDLE[0] + A_DIST[0] * amount, G_IDLE[1] + A_DIST[1] * amount];
    }

    function fA(time) {
      return 2 * smooth(time / IGNITE);
    }

    function posB(time) {
      const progress = clampE((time - B_START) / B_DUR);
      const eased = outCubic(progress);
      const remaining = 1 - eased;
      const gx = G_IDLE[0] + (G_HOVER[0] - G_IDLE[0]) * eased;
      const gy = G_IDLE[1] + (G_HOVER[1] - G_IDLE[1]) * eased;
      return [
        gx + H_SHIFT[0] + B_FROM[0] * remaining,
        gy + H_SHIFT[1] + B_FROM[1] * remaining,
      ];
    }

    function bob(time) {
      const s = 0.9 * Math.sin((2 * Math.PI * time) / 1.3);
      return [s, -0.7 * s];
    }

    function setHover(on) {
      wantHover = on;
      if (on && state === "idle") {
        state = "entering";
        t = 0;
      } else if (!on && state === "hover") {
        state = "leaving";
        t = 0;
        leaveF = pulse(hoverClock);
        leaveBob = bob(hoverClock);
      }
    }

    function frame(ms) {
      const dt = last === null ? 0 : Math.min((ms - last) / 1000, 0.05);
      last = ms;
      if (state === "entering") {
        t += dt;
        if (t >= ENTER_END) {
          state = "hover";
          hoverClock = 0;
          if (!wantHover) setHover(false);
        }
      } else if (state === "hover") {
        hoverClock += dt;
      } else if (state === "leaving") {
        t += dt;
        if (t >= LEAVE_END) {
          state = "idle";
          t = 0;
          if (wantHover) setHover(true);
        }
      }

      ctx.setTransform(k, 0, 0, k, 0, 0);
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, PW, PH);

      if (state === "idle") {
        drawRocket(G_IDLE[0], G_IDLE[1], 0);
      } else if (state === "entering") {
        for (let ts = 0.06; ts < 0.62; ts += 0.03) {
          const position = posA(ts);
          const tip = tipAt(fA(ts));
          puff(
            position[0] + tip[0] + Math.sin(ts * 91) * 1.2,
            position[1] + tip[1] + 1 + Math.cos(ts * 57),
            t - ts,
            0.5,
            1.4,
            5.2,
            0.55
          );
        }
        for (let ts = B_START; ts < ENTER_END; ts += 0.045) {
          const position = posB(ts);
          const tip = tipAt(2);
          puff(position[0] + tip[0], position[1] + tip[1], t - ts, 0.4, 1, 3.4, 0.4);
        }
        if (t < IGNITE + A_DUR) {
          const position = posA(t);
          const amp = t < IGNITE + 0.12 ? 1 * (1 - t / (IGNITE + 0.12)) : 0;
          drawRocket(
            position[0] + Math.sin(t * 210) * amp,
            position[1] + Math.cos(t * 260) * amp * 0.8,
            fA(t)
          );
        }
        if (t >= B_START) {
          const position = posB(t);
          drawRocket(position[0], position[1], 2);
        }
      } else if (state === "hover") {
        for (let i = 0; i < 6; i++) {
          const ts = (Math.floor(hoverClock / 0.1) - i) * 0.1;
          const age = hoverClock - ts;
          if (ts < 0 || age >= 0.55) continue;
          const tip = tipAt(pulse(ts));
          const bx = G_HOVER[0] + H_SHIFT[0] + tip[0];
          const by = G_HOVER[1] + H_SHIFT[1] + tip[1];
          puff(
            bx - age * 13 + Math.sin(ts * 77) * 0.8,
            by + age * 13 + Math.cos(ts * 61) * 0.8,
            age,
            0.55,
            0.8,
            2.4,
            0.5
          );
        }
        const offset = bob(hoverClock);
        drawRocket(
          G_HOVER[0] + H_SHIFT[0] + offset[0],
          G_HOVER[1] + H_SHIFT[1] + offset[1],
          pulse(hoverClock)
        );
      } else {
        const q = 1 - inOutCubic(clampE(t / LEAVE_END));
        const gx = G_IDLE[0] + (G_HOVER[0] - G_IDLE[0]) * q;
        const gy = G_IDLE[1] + (G_HOVER[1] - G_IDLE[1]) * q;
        drawRocket(
          gx + (H_SHIFT[0] + leaveBob[0]) * q,
          gy + (H_SHIFT[1] + leaveBob[1]) * q,
          leaveF * q
        );
      }
      frameId = requestAnimationFrame(frame);
    }

    const hoverTarget = canvas.closest(".magnetic-btn");
    const handlePointerEnter = () => setHover(true);
    const handlePointerLeave = () => setHover(false);
    const handlePointerCancel = () => setHover(false);
    hoverTarget.addEventListener("pointerenter", handlePointerEnter);
    hoverTarget.addEventListener("pointerleave", handlePointerLeave);
    hoverTarget.addEventListener("pointercancel", handlePointerCancel);
    window.addEventListener("resize", resize);
    resize();
    frameId = requestAnimationFrame(frame);

    return () => {
      hoverTarget.removeEventListener("pointerenter", handlePointerEnter);
      hoverTarget.removeEventListener("pointerleave", handlePointerLeave);
      hoverTarget.removeEventListener("pointercancel", handlePointerCancel);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frameId);
    };
  }, [light]);

  return (
    <canvas
      ref={canvasRef}
      width="76"
      height="68"
      aria-label="Rocket icon: launches and re-enters on hover, flame keeps pulsing"
      className="block h-full aspect-[76/68] touch-manipulation cursor-pointer"
    />
  );
}

export default RocketCanvas;
