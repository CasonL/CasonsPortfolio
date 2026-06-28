"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground({ paused = false }: { paused?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width / 2);
      canvas.height = Math.floor(height / 2);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resize();
    window.addEventListener("resize", resize);

    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const nodeCount = Math.min(16, Math.floor((width * height) / 60000));

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.25 + 0.1,
      });
    }

    const W = () => canvas.width;
    const H = () => canvas.height;
    const TARGET_FPS = 20;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;
    let lastTime = 0;

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (paused || document.hidden) return;

      if (timestamp - lastTime < FRAME_INTERVAL) return;
      lastTime = timestamp;

      const cw = W();
      const ch = H();

      ctx.clearRect(0, 0, cw, ch);

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const sx = (node.x / width) * cw;
        const sy = (node.y / height) * ch;

        ctx.beginPath();
        ctx.arc(sx, sy, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(193, 122, 75, ${node.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const sx1 = (nodes[i].x / width) * cw;
            const sy1 = (nodes[i].y / height) * ch;
            const sx2 = (nodes[j].x / width) * cw;
            const sy2 = (nodes[j].y / height) * ch;

            ctx.beginPath();
            ctx.moveTo(sx1, sy1);
            ctx.lineTo(sx2, sy2);
            ctx.strokeStyle = `rgba(243, 233, 217, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [paused]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
