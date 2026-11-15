import { useEffect, useRef } from "react";

function curve(xs, ys) {
  const n = xs.length;
  const d = [];
  const m = new Array(n);
  for (let i = 0; i < n - 1; i++) {
    d[i] = (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]);
  }
  m[0] = d[0];
  m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) {
    m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  }
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) {
      m[i] = 0;
      m[i + 1] = 0;
      continue;
    }
    const a = m[i] / d[i];
    const b = m[i + 1] / d[i];
    const s = a * a + b * b;
    if (s > 9) {
      const t = 3 / Math.sqrt(s);
      m[i] = t * a * d[i];
      m[i + 1] = t * b * d[i];
    }
  }

  return (x) => {
    if (x <= xs[0]) return ys[0];
    if (x >= xs[n - 1]) return ys[n - 1];
    let lo = 0;
    let hi = n - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (xs[mid] <= x) lo = mid;
      else hi = mid;
    }
    const h = xs[hi] - xs[lo];
    const t = (x - xs[lo]) / h;
    const t2 = t * t;
    const t3 = t2 * t;
    return (
      (2 * t3 - 3 * t2 + 1) * ys[lo] +
      (t3 - 2 * t2 + t) * h * m[lo] +
      (-2 * t3 + 3 * t2) * ys[hi] +
      (t3 - t2) * h * m[hi]
    );
  };
}

function invert(fn, times, value, increasing) {
  let lo = 0;
  let hi = times[times.length - 1];
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if ((fn(mid) < value) === increasing) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

function EyeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const OX = 16;
    const PS = 128;
    const SC = [80.5, 63.0];
    const HOVER_SCALE = 1.36;
    const L = 55.75;
    const R = 106.86;
    const CY = 64.75;
    const A1 = 17.35;
    const B_UP = 25.69;
    const B_LO = 21.06;
    const STROKE = 4.26;
    const PUPIL_C = [80.8, 63.1];
    const PUPIL_R = 7.4;
    const PUPIL_W = 4.2;
    const blinkU = curve(
      [-0.04, -0.007, 0.027, 0.06, 0.093, 0.126, 0.16, 0.193, 0.226, 0.26, 0.293],
      [0, 0.11, 0.54, 0.93, 1, 1, 0.89, 0.4, 0.09, 0.01, 0]
    );
    const BLINK_START = -0.04;
    const BLINK_END = 0.293;
    const BLINKS = [
      1.607, 3.406, 4.01, 6.654, 8.405, 9.013, 11.629, 13.406, 14.046, 16.15,
      16.77,
    ];
    const IDLE_LOOP = 18.87;
    const GROW_T = [0, 0.018, 0.062, 0.097, 0.17, 0.2, 0.3, 0.4];
    const GROW_V = [0.45, 0.75, 0.8, 0.9, 0.92, 0.95, 1, 1];
    const SHRINK_T = [0, 0.019, 0.063, 0.13, 0.184, 0.275, 0.31, 0.4];
    const SHRINK_V = [1, 0.5, 0.3, 0.2, 0.1, 0.04, 0, 0];
    const grow = curve(GROW_T, GROW_V);
    const shrink = curve(SHRINK_T, SHRINK_V);
    const PATH = [
      0.0, 80.8, 63.1, 0.018, 80.48, 63.03, 0.062, 80.04, 62.76, 0.097, 78.96,
      62.18, 0.12, 78.05, 61.72, 0.168, 76.45, 60.92, 0.193, 76.32, 60.88,
      0.229, 75.99, 60.71, 0.258, 75.79, 60.78, 0.297, 75.57, 60.39, 0.319,
      75.31, 60.27, 0.47, 75.15, 60.24, 0.502, 74.97, 60.28, 0.622, 74.67,
      60.51, 0.66, 74.5, 60.58, 0.688, 74.44, 60.79, 1.013, 74.2, 60.97,
      1.044, 73.98, 61.14, 1.094, 73.33, 61.82, 1.117, 71.5, 63.7, 1.144,
      70.58, 64.67, 1.183, 70.15, 64.96, 1.216, 69.98, 65.17, 1.613, 70.01,
      65.29, 1.654, 70.91, 64.97, 1.671, 71.45, 64.88, 1.7, 76.08, 63.71,
      1.746, 80.88, 62.49, 1.781, 83.75, 61.79, 1.816, 85.28, 61.38, 1.855,
      86.22, 61.17, 1.883, 86.76, 61.05, 1.918, 87.03, 60.96, 1.957, 87.18,
      60.9, 2.139, 87.03, 61.09, 2.167, 86.92, 61.22, 2.219, 86.44, 61.68,
      2.246, 85.98, 62.12, 2.283, 85.61, 62.53, 2.302, 85.44, 62.7, 2.346,
      85.26, 62.83, 2.559, 85.05, 62.99, 2.599, 84.9, 63.13, 2.645, 84.08,
      63.13, 2.665, 83.32, 63.14, 2.696, 81.76, 63.09, 2.734, 81.14, 63.13,
      2.764, 80.86, 63.02, 2.796, 80.71, 63.08, 3.096, 80.53, 63.23, 3.137,
      80.29, 63.35, 3.163, 79.75, 63.59, 3.196, 78.58, 64.13, 3.247, 77.26,
      64.84, 3.258, 77.0, 64.94, 3.313, 76.73, 65.09, 3.338, 76.57, 65.23,
      3.597, 76.41, 65.63, 3.629, 76.41, 65.97, 3.666, 76.41, 66.46, 3.683,
      76.41, 66.76, 3.732, 76.41, 67.11, 3.981, 76.54, 67.33, 4.028, 76.91,
      67.23, 4.056, 77.45, 67.07, 4.078, 77.86, 66.97, 4.113, 79.1, 66.51,
      4.15, 81.38, 65.72, 4.189, 84.58, 64.69, 4.209, 86.54, 64.06, 4.241,
      87.68, 63.66, 4.28, 88.39, 63.43, 4.32, 88.79, 63.3, 4.357, 89.13,
      63.22, 4.38, 89.27, 63.13, 4.793, 89.32, 63.07, 4.813, 89.15, 62.95,
      4.859, 88.67, 62.72, 4.89, 87.75, 62.25, 4.919, 85.51, 61.11, 4.954,
      82.93, 59.79, 4.979, 81.81, 59.28, 5.015, 81.27, 58.94, 5.049, 80.89,
      58.82, 5.092, 80.75, 58.76, 5.43, 80.73, 58.86, 5.466, 80.7, 59.02,
      5.511, 80.69, 59.47, 5.535, 80.68, 60.25, 5.565, 80.7, 61.23, 5.596,
      80.69, 61.98, 5.63, 80.73, 62.45, 5.67, 80.7, 62.75, 5.705, 80.68,
      62.92, 5.969, 80.66, 63.03, 5.998, 80.5, 62.98, 6.035, 80.09, 62.72,
      6.065, 79.37, 62.43, 6.104, 77.73, 61.6, 6.135, 76.36, 60.93, 6.172,
      75.77, 60.59, 6.201, 75.42, 60.4, 6.231, 75.23, 60.3, 6.571, 74.93,
      60.39, 6.602, 74.77, 60.46, 6.632, 74.63, 60.56, 6.661, 74.53, 60.66,
      6.7, 74.43, 60.8, 7.03, 74.22, 60.99, 7.047, 74.08, 61.07, 7.081, 73.76,
      61.39, 7.135, 71.39, 63.89, 7.145, 70.76, 64.45, 7.202, 70.07, 65.06,
      7.212, 69.98, 65.21, 7.579, 70.03, 65.28, 7.61, 70.36, 65.16, 7.645,
      70.98, 64.96, 7.684, 72.21, 64.7, 7.715, 74.49, 64.13, 7.749, 78.98,
      62.99, 7.788, 82.77, 62.0, 7.811, 84.77, 61.53, 7.854, 85.85, 61.22,
      7.884, 86.49, 61.11, 7.912, 86.95, 60.99, 7.945, 87.15, 60.92, 8.15,
      87.02, 61.09, 8.187, 86.9, 61.23, 8.215, 86.56, 61.52, 8.248, 86.18,
      61.96, 8.279, 85.71, 62.4, 8.32, 85.51, 62.63, 8.345, 85.31, 62.77,
      8.576, 85.02, 63.04, 8.614, 84.88, 63.13, 8.644, 84.39, 63.09, 8.68,
      83.23, 63.05, 8.719, 81.21, 63.1, 8.74, 81.12, 63.14, 8.86, 80.8, 63.1,
    ];
    const PN = PATH.length / 3;
    const PT = [];
    const PX = [];
    const PY = [];
    for (let i = 0; i < PN; i++) {
      PT.push(PATH[3 * i]);
      PX.push(PATH[3 * i + 1]);
      PY.push(PATH[3 * i + 2]);
    }
    const pathX = curve(PT, PX);
    const pathY = curve(PT, PY);
    const PATH_LEN = PT[PN - 1];
    let k = 1;
    let hovering = false;
    let f = 0;
    let fT = 0;
    let fMode = "none";
    let idleClock = 0;
    let pathClock = 0;
    let pupilBlend = 0;
    let last = null;
    let frameId;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      k = canvas.width / PS;
    }

    function setHover(on) {
      if (on === hovering) return;
      hovering = on;
      if (on) {
        fMode = "grow";
        fT = invert(grow, GROW_T, f, true);
        pathClock = 0;
      } else {
        fMode = "shrink";
        fT = invert(shrink, SHRINK_T, f, false);
      }
    }

    function blinkAmount() {
      const T = idleClock % IDLE_LOOP;
      for (const b of BLINKS) {
        for (const offset of [0, IDLE_LOOP]) {
          const tau = T - b - offset;
          if (tau > BLINK_START && tau < BLINK_END) return blinkU(tau);
        }
      }
      return 0;
    }

    function frame(ms) {
      const dt = last === null ? 0 : Math.min((ms - last) / 1000, 0.1);
      last = ms;

      if (fMode === "grow") {
        fT += dt;
        f = grow(fT);
        if (fT >= GROW_T[GROW_T.length - 1]) fMode = "none";
      } else if (fMode === "shrink") {
        fT += dt;
        f = shrink(fT);
        if (fT >= SHRINK_T[SHRINK_T.length - 1]) {
          fMode = "none";
          f = 0;
        }
      }
      const s = 1 + (HOVER_SCALE - 1) * f;

      let u = blinkAmount();
      if (!hovering || u > 0) idleClock += dt;
      u = blinkAmount();

      if (hovering) pathClock += dt;
      pupilBlend += ((hovering ? 1 : 0) - pupilBlend) * Math.min(1, dt * 14);
      const pt = pathClock % PATH_LEN;
      const px = PUPIL_C[0] + (pathX(pt) - PUPIL_C[0]) * pupilBlend;
      const py = PUPIL_C[1] + (pathY(pt) - PUPIL_C[1]) * pupilBlend;

      ctx.setTransform(k, 0, 0, k, -OX * k, 0);
      ctx.fillStyle = "#f8f8f8";
      ctx.fillRect(OX, 0, PS, PS);
      ctx.translate(SC[0], SC[1]);
      ctx.scale(s, s);
      ctx.translate(-SC[0], -SC[1]);

      const P0 = [L, CY];
      const P3 = [R, CY];
      const upY = (CY - B_UP) * (1 - u) + (CY + B_LO) * u;
      const up1 = [L + A1, upY];
      const up2 = [R - A1, upY];
      const lo1 = [L + A1, CY + B_LO];
      const lo2 = [R - A1, CY + B_LO];
      const lid = (c1, c2) => {
        ctx.bezierCurveTo(c1[0], c1[1], c2[0], c2[1], P3[0], P3[1]);
      };

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(P0[0], P0[1]);
      lid(up1, up2);
      ctx.bezierCurveTo(lo2[0], lo2[1], lo1[0], lo1[1], P0[0], P0[1]);
      ctx.closePath();
      ctx.clip();
      ctx.strokeStyle = "#0d0d0d";
      ctx.lineWidth = PUPIL_W;
      ctx.beginPath();
      ctx.arc(px, py, PUPIL_R, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = "#0d0d0d";
      ctx.lineWidth = STROKE;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(P0[0], P0[1]);
      lid(up1, up2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(P0[0], P0[1]);
      lid(lo1, lo2);
      ctx.stroke();

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
      width="128"
      height="128"
      aria-label="Animated eye icon: blinks and looks around on hover"
      className="w-14 h-14 touch-manipulation cursor-default"
    />
  );
}

export default EyeCanvas;
