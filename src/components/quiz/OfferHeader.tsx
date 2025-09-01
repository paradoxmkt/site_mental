'use client';

import { useState, useEffect } from 'react';

export default function OfferHeader() {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent text-accent-foreground py-2 px-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center gap-4 text-center">
        <p className="font-semibold text-sm md:text-base">
          Oferta por tempo limitado
        </p>
        <p className="font-bold text-base md:text-lg tabular-nums bg-accent-foreground/20 px-2 py-1 rounded-md">
          {formatTime(timeLeft)}
        </p>
      </div>
    </div>
  );
}
