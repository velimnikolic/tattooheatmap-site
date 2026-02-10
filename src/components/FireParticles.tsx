'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  hue: number;
}

export default function FireParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 400;
    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    function spawnParticle(): Particle {
      const maxLife = 60 + Math.random() * 100;
      return {
        x: Math.random() * w(),
        y: h() + Math.random() * 20,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(1.5 + Math.random() * 2.5),
        size: 2 + Math.random() * 4,
        life: 0,
        maxLife,
        hue: 15 + Math.random() * 30, // orange to red
      };
    }

    // Initialize particles spread across viewport
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const p = spawnParticle();
      p.y = Math.random() * h();
      p.life = Math.random() * p.maxLife;
      return p;
    });

    function animate() {
      if (!visibleRef.current) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const width = w();
      const height = h();
      ctx!.clearRect(0, 0, width, height);

      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i];
        p.life++;

        if (p.life >= p.maxLife) {
          particlesRef.current[i] = spawnParticle();
          continue;
        }

        const progress = p.life / p.maxLife;
        p.x += p.vx + Math.sin(p.life * 0.05) * 0.3;
        p.y += p.vy * (1 - progress * 0.3);

        const alpha = progress < 0.1
          ? progress / 0.1
          : 1 - ((progress - 0.1) / 0.9);
        const size = p.size * (1 - progress * 0.6);

        const lightness = 50 + progress * 15;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx!.fillStyle = `hsla(${p.hue - progress * 10}, 100%, ${lightness}%, ${alpha * 0.6})`;
        ctx!.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    // Pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
