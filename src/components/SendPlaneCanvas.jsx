import { useEffect, useRef } from "react";
import D from "./sendPlaneAnimationData";

const VX = 150;
const VY = 44;
const VW = 160;
const VH = 126;
const REST = [D.cx, D.cy];
const T_F1 = [0.6, 1.66];
const T_F2 = [1.72, 2.7];
const T_END = 2.7;
const OUT_DUR = 0.3;

function sample(path, time) {
  const frame = (time - path.t0) / path.dt;
  const index = Math.floor(frame);
  const fraction = frame - index;
  const count = path.x.length;

  if (index < 0 || index >= count - 1) return null;

  return {
    x: path.x[index] + (path.x[index + 1] - path.x[index]) * fraction,
    y: path.y[index] + (path.y[index + 1] - path.y[index]) * fraction,
    a: path.a[index] + (path.a[index + 1] - path.a[index]) * fraction,
  };
}

function SendPlaneCanvas({ hovered, className }) {
  const canvasRef = useRef(null);
  const hoveredRef = useRef(hovered);
  hoveredRef.current = hovered;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) {
      console.error("Canvas 2D context is unavailable for the send animation.");
      return;
    }

    let scale = 1;
    let state = "idle";
    let time = 0;
    let wantHover = false;
    let lastFrame = null;
    let animationFrame;
    let leave = { off: [0, 0], plane: null };
    let barOff = [0, 0];
    let plane = { x: REST[0], y: REST[1], a: 0, vis: true };

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(bounds.width * dpr);
      canvas.height = Math.round(bounds.height * dpr);
      scale = canvas.width / VW;
    }

    function drawPlane(x, y, angle) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((-angle * Math.PI) / 180);
      ctx.scale(2, 2);
      ctx.strokeStyle = "#111111";
      ctx.lineWidth = D.sw;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      for (const chain of D.chains) {
        ctx.beginPath();
        ctx.moveTo(chain[0], chain[1]);
        for (let i = 2; i < chain.length; i += 2) {
          ctx.lineTo(chain[i], chain[i + 1]);
        }
        ctx.stroke();
      }
      ctx.restore();
    }

    function setHover(on) {
      wantHover = on;
      if (on && state === "idle") {
        state = "entering";
        time = 0;
      } else if (!on && (state === "entering" || state === "hover")) {
        state = "leaving";
        time = 0;
        leave = {
          off: barOff.slice(),
          plane: plane.vis
            ? {
                x: plane.x,
                y: plane.y,
                a: (((plane.a % 360) + 540) % 360) - 180,
              }
            : null,
        };
      }
    }

    function frame(ms) {
      const delta = lastFrame === null ? 0 : Math.min((ms - lastFrame) / 1000, 0.05);
      lastFrame = ms;

      if (hoveredRef.current !== wantHover) setHover(hoveredRef.current);

      if (state === "entering") {
        time += delta;
        if (time >= T_END - 0.6) state = "hover";
      } else if (state === "leaving") {
        time += delta;
        if (time >= OUT_DUR) {
          state = "idle";
          if (wantHover) setHover(true);
        }
      }

      if (state === "idle") {
        barOff = [0, 0];
        plane = { x: REST[0], y: REST[1], a: 0, vis: true };
      } else if (state === "entering" || state === "hover") {
        const videoTime = 0.6 + Math.min(time, 2.1);
        let samplePoint = null;
        if (state === "hover" || videoTime >= T_F2[1]) {
          samplePoint = { x: REST[0], y: REST[1], a: 0 };
        } else if (videoTime >= T_F2[0]) {
          samplePoint = sample(D.F2, videoTime);
        } else if (videoTime <= T_F1[1]) {
          samplePoint = sample(D.F1, videoTime);
        }
        plane = samplePoint
          ? { ...samplePoint, vis: true }
          : { x: 0, y: 0, a: 0, vis: false };
      } else {
        const progress = Math.min(1, time / OUT_DUR);
        const eased = progress * progress * (3 - 2 * progress);
        if (leave.plane) {
          plane = {
            x: leave.plane.x + (REST[0] - leave.plane.x) * eased,
            y: leave.plane.y + (REST[1] - leave.plane.y) * eased,
            a: leave.plane.a * (1 - eased),
            vis: true,
          };
        } else {
          plane = { x: REST[0], y: REST[1], a: 0, vis: time > OUT_DUR * 0.6 };
        }
      }

      ctx.setTransform(scale, 0, 0, scale, -VX * scale, -VY * scale);
      ctx.clearRect(VX, VY, VW, VH);
      if (plane.vis) drawPlane(plane.x, plane.y, plane.a);

      animationFrame = requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}

export default SendPlaneCanvas;