import { useEffect, useRef } from "react";

const SIZE = 100;
const CENTER = [51, 50];
const STAR = { radius: 10.02, concavity: 1.77, stroke: 2 };
const PLUS = [
  [-9.4, -8.3],
  [-9.4, 8.3],
];
const PLUS_LENGTH = 6.2;
const HOVER_STAR = 1.09;
const SPARK_PEAK = 1.06;
const SPARKS = [
  [-21.3, -19.3, 0],
  [28.2, -28.1, 0.4],
  [-18.5, 7.6, 0.76],
  [13.3, 9.4, 1.26],
  [-31.2, -5.8, 2.03],
  [23.2, -7.3, 2.2],
  [-4.3, 22.8, 2.5],
  [-28.2, -29.8, 2.83],
  [13.8, -18.8, 3.23],
];
const LOOP = 4;
const FIRST = 0.667;
const LIFE = 0.6;

function curve(points) {
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  const slopes = [];
  const tangents = new Array(points.length);

  for (let i = 0; i < points.length - 1; i += 1) {
    slopes[i] = (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]);
  }
  tangents[0] = slopes[0];
  tangents[points.length - 1] = slopes[slopes.length - 1];

  for (let i = 1; i < points.length - 1; i += 1) {
    tangents[i] =
      slopes[i - 1] * slopes[i] <= 0
        ? 0
        : (slopes[i - 1] + slopes[i]) / 2;
  }

  for (let i = 0; i < slopes.length; i += 1) {
    if (slopes[i] === 0) {
      tangents[i] = 0;
      tangents[i + 1] = 0;
      continue;
    }

    const a = tangents[i] / slopes[i];
    const b = tangents[i + 1] / slopes[i];
    const sum = a * a + b * b;
    if (sum > 9) {
      const factor = 3 / Math.sqrt(sum);
      tangents[i] = factor * a * slopes[i];
      tangents[i + 1] = factor * b * slopes[i];
    }
  }

  return (value) => {
    if (value <= xs[0]) return ys[0];
    if (value >= xs[xs.length - 1]) return ys[ys.length - 1];

    let low = 0;
    let high = xs.length - 1;
    while (high - low > 1) {
      const middle = (low + high) >> 1;
      if (xs[middle] <= value) low = middle;
      else high = middle;
    }

    const h = xs[high] - xs[low];
    const t = (value - xs[low]) / h;
    const t2 = t * t;
    const t3 = t2 * t;
    return (
      (2 * t3 - 3 * t2 + 1) * ys[low] +
      (t3 - 2 * t2 + t) * h * tangents[low] +
      (-2 * t3 + 3 * t2) * ys[high] +
      (t3 - t2) * h * tangents[high]
    );
  };
}

const clamp = (value) => Math.min(1, Math.max(0, value));
const outCubic = (value) => 1 - Math.pow(1 - clamp(value), 3);
const inCubic = (value) => Math.pow(clamp(value), 3);
const inOutCubic = (value) => {
  const t = clamp(value);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};
const lifeCurve = curve([
  [0, 0.08],
  [0.033, 0.4],
  [0.1, 0.8],
  [0.167, 0.92],
  [0.233, 0.96],
  [0.3, 1],
  [0.367, 1],
  [0.433, 0.92],
  [0.5, 0.7],
  [0.567, 0.17],
  [0.6, 0],
]);

function activeSparks(clock) {
  const active = [];
  const loopTime = ((clock % LOOP) + LOOP) % LOOP;
  if (clock < 0) return active;

  for (const [dx, dy, start] of SPARKS) {
    const age = loopTime - start;
    if (age >= 0 && age < LIFE) {
      active.push({
        x: CENTER[0] + dx,
        y: CENTER[1] + dy,
        scale: lifeCurve(age) * SPARK_PEAK,
      });
    }
  }
  return active;
}

function drawStar(ctx, x, y, scale) {
  if (scale <= 0.003) return;

  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.lineWidth = STAR.stroke;
  ctx.lineJoin = "miter";
  ctx.miterLimit = 6;
  ctx.beginPath();
  ctx.moveTo(STAR.radius, 0);
  ctx.quadraticCurveTo(STAR.concavity, STAR.concavity, 0, STAR.radius);
  ctx.quadraticCurveTo(-STAR.concavity, STAR.concavity, -STAR.radius, 0);
  ctx.quadraticCurveTo(-STAR.concavity, -STAR.concavity, 0, -STAR.radius);
  ctx.quadraticCurveTo(STAR.concavity, -STAR.concavity, STAR.radius, 0);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

function drawPlus(ctx, x, y, scale) {
  if (scale <= 0.003) return;

  const half = (PLUS_LENGTH / 2) * scale;
  ctx.save();
  ctx.lineWidth = STAR.stroke * Math.max(0.6, scale);
  ctx.lineCap = "butt";
  ctx.beginPath();
  ctx.moveTo(x - half, y);
  ctx.lineTo(x + half, y);
  ctx.moveTo(x, y - half);
  ctx.lineTo(x, y + half);
  ctx.stroke();
  ctx.restore();
}

function SparklesCanvas({ hovered, className }) {
  const canvasRef = useRef(null);
  const hoveredRef = useRef(hovered);
  hoveredRef.current = hovered;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) {
      console.error("Canvas 2D context is unavailable for the sparkle animation.");
      return undefined;
    }

    let scale = 1;
    let state = "idle";
    let time = 0;
    let lastFrame = null;
    let wantHover = false;
    let animationFrame;
    let starScale = 1;
    let plusScale = 1;
    let plusDrift = 0;
    let leaveSparks = [];
    let leaveStar = 1;
    let leavePlus = 0;
    let hoverClock = 0;

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(bounds.width * dpr);
      canvas.height = Math.round(bounds.height * dpr);
      scale = canvas.width / SIZE;
    }

    function setHover(on) {
      wantHover = on;
      if (on && state === "idle") {
        state = "hover";
        time = 0;
      } else if (!on && state === "hover") {
        state = "leaving";
        time = 0;
        leaveSparks = activeSparks(hoverClock - FIRST);
        leaveStar = starScale;
        leavePlus = plusScale;
      }
    }

    function frame(ms) {
      const delta = lastFrame === null ? 0 : Math.min((ms - lastFrame) / 1000, 0.05);
      lastFrame = ms;

      if (hoveredRef.current !== wantHover) setHover(hoveredRef.current);

      let sparks = [];
      if (state === "hover") {
        time += delta;
        hoverClock = time;
        starScale = 1 + (HOVER_STAR - 1) * outCubic(time / 0.25);
        const plusProgress = inCubic((time - 0.1) / 0.13);
        plusScale = 1 - plusProgress;
        plusDrift = 0.2 * plusProgress;
        sparks = activeSparks(time - FIRST);
      } else if (state === "leaving") {
        time += delta;
        starScale = leaveStar + (1 - leaveStar) * inOutCubic(time / 0.3);
        plusScale = leavePlus + (1 - leavePlus) * outCubic((time - 0.2) / 0.38);
        plusDrift = 0.2 * (1 - plusScale);
        const fade = 1 - inCubic(time / 0.18);
        sparks = leaveSparks.map((spark) => ({
          ...spark,
          scale: spark.scale * fade,
        }));
        if (time >= 0.6) {
          state = "idle";
          if (wantHover) setHover(true);
        }
      } else {
        starScale = 1;
        plusScale = 1;
        plusDrift = 0;
      }

      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      ctx.clearRect(0, 0, SIZE, SIZE);
      ctx.strokeStyle = "#111111";
      drawStar(ctx, CENTER[0], CENTER[1], starScale);
      for (const [dx, dy] of PLUS) {
        drawPlus(
          ctx,
          CENTER[0] + dx * (1 - plusDrift),
          CENTER[1] + dy * (1 - plusDrift),
          plusScale,
        );
      }
      for (const spark of sparks) {
        drawStar(ctx, spark.x, spark.y, spark.scale);
      }

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

export default SparklesCanvas;
