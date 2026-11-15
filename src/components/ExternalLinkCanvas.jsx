import { useEffect, useRef } from "react";

function ExternalLinkCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const PW = 104;
    const PH = 82;
    const CX = PW / 2;
    const CY = PH / 2;
    const L = 13.5;
    const IDLE = [CX + L / 2 - 0.5, CY - L / 2 + 0.5];
    const HOVER = [CX + 11, CY - 11.5];
    const BOX0 = [[74, 23], [68, 23], [68, 46], [90, 46], [90, 40]];
    const SHIFT = [HOVER[0] - 90, HOVER[1] - 23];
    const BOX = BOX0.map(([x, y]) => [x + SHIFT[0], y + SHIFT[1]]);
    const BOX_LEN = 57;
    const WIN = [CX - 24, CY - 23, CX + 24, CY + 23];
    const FLY = 38;
    const ENTER = { aOut: [0, 0.42], bIn: [0.22, 0.78], box: [0.5, 1.25], end: 1.3 };
    const LEAVE = { box: [0, 0.5], arrow: [0.08, 0.68], end: 0.72 };
    let k = 1;
    let state = "idle";
    let t = 0;
    let wantHover = false;
    let last = null;
    let frameId;

    const clamp = (x) => Math.min(1, Math.max(0, x));
    const inCubic = (x) => x * x * x;
    const outCubic = (x) => 1 - Math.pow(1 - x, 3);
    const inOutCubic = (x) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    const seg = (x, a, b) => clamp((x - a) / (b - a));

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      k = canvas.width / PW;
    }

    function setHover(on) {
      wantHover = on;
      if (on && state === "idle") {
        state = "entering";
        t = 0;
      } else if (!on && state === "hover") {
        state = "leaving";
        t = 0;
      }
    }

    function drawArrow(tx, ty) {
      ctx.beginPath();
      ctx.moveTo(tx - L, ty);
      ctx.lineTo(tx, ty);
      ctx.lineTo(tx, ty + L);
      ctx.moveTo(tx, ty);
      ctx.lineTo(tx - L, ty + L);
      ctx.stroke();
    }

    function drawBox(a, b) {
      if (b - a < 0.05) return;
      ctx.save();
      ctx.setLineDash([b - a, 400]);
      ctx.lineDashOffset = -a;
      ctx.beginPath();
      ctx.moveTo(BOX[0][0], BOX[0][1]);
      for (let i = 1; i < BOX.length; i++) {
        ctx.lineTo(BOX[i][0], BOX[i][1]);
      }
      ctx.stroke();
      ctx.restore();
    }

    function frame(ms) {
      const dt = last === null ? 0 : Math.min((ms - last) / 1000, 0.05);
      last = ms;
      if (state === "entering") {
        t += dt;
        if (t >= ENTER.end) {
          state = "hover";
          t = 0;
          if (!wantHover) setHover(false);
        }
      } else if (state === "leaving") {
        t += dt;
        if (t >= LEAVE.end) {
          state = "idle";
          t = 0;
          if (wantHover) setHover(true);
        }
      }

      ctx.setTransform(k, 0, 0, k, 0, 0);
      ctx.clearRect(0, 0, PW, PH);
      ctx.strokeStyle = "#0d0d0d";
      ctx.lineWidth = 2;
      ctx.lineJoin = "miter";
      ctx.miterLimit = 10;
      ctx.lineCap = "butt";

      ctx.save();
      ctx.beginPath();
      ctx.rect(WIN[0], WIN[1], WIN[2] - WIN[0], WIN[3] - WIN[1]);
      ctx.clip();
      if (state === "idle") {
        drawArrow(IDLE[0], IDLE[1]);
      } else if (state === "entering") {
        const a = inCubic(seg(t, ...ENTER.aOut)) * FLY;
        if (a < FLY) drawArrow(IDLE[0] + a, IDLE[1] - a);
        const b = (1 - outCubic(seg(t, ...ENTER.bIn))) * FLY;
        if (b < FLY) drawArrow(HOVER[0] - b, HOVER[1] + b);
      } else if (state === "hover") {
        drawArrow(HOVER[0], HOVER[1]);
      } else {
        const p = inOutCubic(seg(t, ...LEAVE.arrow));
        drawArrow(
          HOVER[0] + (IDLE[0] - HOVER[0]) * p,
          HOVER[1] + (IDLE[1] - HOVER[1]) * p
        );
      }
      ctx.restore();

      if (state === "entering") {
        drawBox(0, outCubic(seg(t, ...ENTER.box)) * BOX_LEN);
      } else if (state === "hover") {
        drawBox(0, BOX_LEN);
      } else if (state === "leaving") {
        drawBox(inOutCubic(seg(t, ...LEAVE.box)) * BOX_LEN, BOX_LEN);
      }

      frameId = requestAnimationFrame(frame);
    }

    const handlePointerEnter = () => setHover(true);
    const handlePointerLeave = () => setHover(false);
    const handlePointerCancel = () => setHover(false);
    const hoverTarget = canvas.closest(".magnetic-btn");
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="104"
      height="82"
      aria-label="Arrow icon that turns into an external-link icon on hover"
      className={`w-[104px] h-[82px] touch-manipulation cursor-pointer ${className}`}
    />
  );
}

export default ExternalLinkCanvas;
