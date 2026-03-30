"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = 500;
    canvas.height = 500;

    let t = 0;

    const draw = () => {
      t += 0.02;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Draw 12 rotating + pulsing AI nodes
      for (let i = 0; i < 12; i++) {
        const angle = t + i * ((Math.PI * 2) / 12);
        const x = cx + 120 * Math.cos(angle);
        const y = cy + 120 * Math.sin(angle);

        const pulse = 4 + 2 * Math.sin(t + i);

        ctx.beginPath();
        ctx.arc(x, y, pulse, 0, Math.PI * 2);
        ctx.fillStyle = "#0EA5E9";
        ctx.shadowColor = "#6366F1";
        ctx.shadowBlur = 15;
        ctx.fill();
      }

      // Central node
      ctx.beginPath();
      ctx.arc(cx, cy, 10 + 3 * Math.sin(t), 0, Math.PI * 2);
      ctx.fillStyle = "#8B5CF6";
      ctx.shadowColor = "#0EA5E9";
      ctx.shadowBlur = 25;
      ctx.fill();

      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <section
      id="hero"
      className="w-full h-screen flex flex-col items-center justify-center text-center relative"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-1/2 opacity-40 pointer-events-none"
      />

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Bharat Santani
      </h1>

      <p className="text-lg md:text-xl opacity-80 max-w-xl">
        Lead Software Engineer • Engineering Architect<br />
        AI-Accelerated Engineering • Cloud-Native • DevSecOps
      </p>
    </section>
  );
}