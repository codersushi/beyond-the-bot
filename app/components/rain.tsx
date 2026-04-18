'use client';
import { useEffect, useRef } from 'react';

export default function Rain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const DROPS = 120;
    const drops = Array.from({ length: DROPS }, () => ({
      x: Math.random() * canvas.width * 2.5 - canvas.width * 0.8,
      y: Math.random() * canvas.height,
      len: 14 + Math.random() * 18,
      speed: 2 + Math.random() * 4,
      opacity: 0.55 + Math.random() * 0.35,
    }));

    const ANGLE = Math.PI / 5;
    const dx = Math.sin(ANGLE);
    const dy = Math.cos(ANGLE);
    let animId: number;
    ctx.lineCap = 'butt';

    function drawRain() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of drops) {
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - d.len * dx, d.y - d.len * dy);
        ctx.strokeStyle = `rgba(200,200,200,${d.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        d.x += d.speed * dx;
        d.y += d.speed * dy;
        if (d.y > canvas.height + 20 || d.x > canvas.width + 20) {
          d.x = Math.random() * canvas.width * 2.5 - canvas.width * 0.8;
          d.y = -20;
        }
      }
      animId = requestAnimationFrame(drawRain);
    }

    drawRain();

function handleVisibility() {
  if (document.visibilityState === 'visible') {
    cancelAnimationFrame(animId);
    animId = requestAnimationFrame(drawRain);
  }
}

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []); // ← useEffect closes here

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -2,
      }}
    />
  );
}