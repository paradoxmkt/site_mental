'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const NUM_PARTICLES = 100;

interface Particle {
  id: number;
  style: React.CSSProperties;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < NUM_PARTICLES; i++) {
      newParticles.push({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 20 + 10}s`, // 10s to 30s
          animationDelay: `${Math.random() * 10}s`, // 0s to 10s
        },
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a102a]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0d163f] via-[#1a2e7c] to-[#0a102a] opacity-80"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradient-animation 15s ease infinite',
        }}
      />
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white/30"
            style={{
              width: '2px',
              height: '2px',
              ...p.style,
              animationName: 'particle-animation',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </div>
    </div>
  );
}
