"use client";
import { useEffect, useRef } from "react";

const NUM_STARS = 1800;

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  dx: number;
  dy: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  active: boolean;
  age: number;
  maxAge: number;
  nextSpawn: number;
}

const STAR_COLORS = [
  "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF",
  "#E8F0FF", "#FFE8E8", "#FFFDE8", "#C8D8FF",
  "#C0C0C0", "#E0E8FF",
];

function createStar(w: number, h: number): Star {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    size: Math.pow(Math.random(), 2.5) * 1.8 + 0.3,
    baseOpacity: Math.random() * 0.65 + 0.2,
    opacity: 0,
    twinkleSpeed: Math.random() * 0.018 + 0.004,
    twinklePhase: Math.random() * Math.PI * 2,
    color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)],
    dx: (Math.random() - 0.5) * 0.015,
    dy: (Math.random() - 0.5) * 0.015,
  };
}

function spawnShootingStar(ss: ShootingStar, w: number, h: number) {
  const angleDeg = Math.random() * 25 + 20;
  const angle = (angleDeg * Math.PI) / 180;
  const fromTop = Math.random() > 0.4;

  if (fromTop) {
    ss.x = Math.random() * w * 0.7;
    ss.y = -10;
  } else {
    ss.x = -10;
    ss.y = Math.random() * h * 0.5;
  }

  const speed = Math.random() * 10 + 8;
  ss.vx = Math.cos(angle) * speed;
  ss.vy = Math.sin(angle) * speed;
  ss.length = Math.random() * 140 + 80;
  ss.opacity = 1;
  ss.active = true;
  ss.age = 0;
  ss.maxAge = Math.random() * 600 + 500;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let lastTime = 0;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const stars: Star[] = Array.from({ length: NUM_STARS }, () =>
      createStar(canvas.width, canvas.height)
    );

    const shootingStars: ShootingStar[] = Array.from({ length: 6 }, (_, i) => ({
      x: 0, y: 0, vx: 0, vy: 0, length: 0,
      opacity: 0, active: false, age: 0, maxAge: 0,
      nextSpawn: Math.random() * 5000 + i * 1200,
    }));

    const drawNebula = (
      x: number, y: number, radius: number,
      r: number, g: number, b: number, alpha: number
    ) => {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, radius);
      grad.addColorStop(0, `rgba(${r},${g},${b},${alpha})`);
      grad.addColorStop(0.4, `rgba(${r},${g},${b},${alpha * 0.4})`);
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const animate = (time: number) => {
      const delta = Math.min(time - lastTime, 50);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space background
      ctx.fillStyle = "#00000E";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebulae
      const w = canvas.width;
      const h = canvas.height;
      const mx = (mouseX / w - 0.5) * 20;
      const my = (mouseY / h - 0.5) * 20;

      drawNebula(w * 0.12 + mx * 0.3, h * 0.18 + my * 0.3, w * 0.35, 110, 40, 210, 0.09);
      drawNebula(w * 0.85 + mx * 0.2, h * 0.35 + my * 0.2, w * 0.30, 25, 70, 210, 0.07);
      drawNebula(w * 0.5  + mx * 0.1, h * 0.82 + my * 0.1, w * 0.22, 15, 110, 150, 0.06);
      drawNebula(w * 0.7  + mx * 0.4, h * 0.08 + my * 0.4, w * 0.20, 160, 30, 120, 0.05);

      // Stars
      for (const s of stars) {
        s.twinklePhase += s.twinkleSpeed;
        s.opacity = s.baseOpacity * (0.55 + 0.45 * Math.sin(s.twinklePhase));

        s.x += s.dx + mx * 0.0008 * s.size;
        s.y += s.dy + my * 0.0008 * s.size;

        if (s.x < -2) s.x = canvas.width + 2;
        if (s.x > canvas.width + 2) s.x = -2;
        if (s.y < -2) s.y = canvas.height + 2;
        if (s.y > canvas.height + 2) s.y = -2;

        ctx.save();
        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = s.color;
        if (s.size > 1.0) {
          ctx.shadowColor = s.color;
          ctx.shadowBlur = s.size * 3;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Shooting stars
      for (const ss of shootingStars) {
        if (!ss.active) {
          ss.nextSpawn -= delta;
          if (ss.nextSpawn <= 0) {
            spawnShootingStar(ss, canvas.width, canvas.height);
            ss.nextSpawn = Math.random() * 7000 + 4000;
          }
          continue;
        }

        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.age += delta;

        const t = ss.age / ss.maxAge;
        ss.opacity = t < 0.2 ? t / 0.2 : t > 0.7 ? 1 - (t - 0.7) / 0.3 : 1;

        if (
          ss.age >= ss.maxAge ||
          ss.x > canvas.width + 200 ||
          ss.y > canvas.height + 200
        ) {
          ss.active = false;
          continue;
        }

        const speed = Math.sqrt(ss.vx * ss.vx + ss.vy * ss.vy);
        const tailX = ss.x - (ss.vx / speed) * ss.length;
        const tailY = ss.y - (ss.vy / speed) * ss.length;

        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${ss.opacity})`);
        grad.addColorStop(0.15, `rgba(200,220,255,${ss.opacity * 0.7})`);
        grad.addColorStop(0.5, `rgba(180,200,255,${ss.opacity * 0.3})`);
        grad.addColorStop(1, `rgba(180,200,255,0)`);

        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.8;
        ctx.shadowColor = "rgba(200,220,255,0.8)";
        ctx.shadowBlur = 8;
        ctx.globalAlpha = ss.opacity;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Bright head
        ctx.shadowBlur = 16;
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = ss.opacity;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    const onResize = () => resize();
    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
