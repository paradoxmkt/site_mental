'use client';

import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);

    const interval = setInterval(() => {
      setScore((prev) => {
        const nextScore = prev + Math.floor(Math.random() * 500) + 100;
        return nextScore > 9999 ? 9999 : nextScore;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6 md:p-8 rounded-2xl bg-card shadow-lg">
      <Loader2 className="w-14 h-14 md:w-16 md:h-16 text-primary animate-spin" />
      <h2 className="text-xl md:text-2xl font-semibold text-foreground text-center">
        Calculando sua pontuação...
      </h2>
      <p className="text-5xl md:text-6xl font-bold font-mono text-primary tabular-nums">
        {score.toString().padStart(4, '0')}
      </p>
      <p className="text-muted-foreground">Aguarde um momento!</p>
    </div>
  );
}
