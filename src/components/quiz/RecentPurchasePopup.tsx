'use client';

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

const nicknames = [
  'ProPlayer123',
  'LendarioGamer',
  'MestreDosJogos',
  'NinjaBR',
  'ShadowHunter',
  'MegaPlayer_7',
  'AnjoCaido',
  'RainhaDoCaos',
  'DragonSlayerBR',
  'ZumbiAssassino',
];

const items = [
  '5.200 Robux',
  '10.000 Robux',
  '22.500 Robux',
  '1.700 Robux',
  '4.500 Robux',
];

export default function RecentPurchasePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [purchase, setPurchase] = useState({ name: '', item: '' });

  const showRandomPopup = () => {
    const randomName = nicknames[Math.floor(Math.random() * nicknames.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setPurchase({ name: randomName, item: randomItem });
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Popup visible for 4 seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showRandomPopup();
    }, 7000); // Show a popup every 7 seconds

    // Show the first popup almost immediately
    const firstPopupTimer = setTimeout(showRandomPopup, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstPopupTimer);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed top-20 md:top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500',
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-10 pointer-events-none'
      )}
    >
      <div className="flex items-center gap-3 bg-primary/10 backdrop-blur-md p-3 rounded-lg shadow-lg border border-border">
        <div className="bg-primary/10 text-primary p-2 rounded-full">
          <ShoppingCart className="w-5 h-5" />
        </div>
        <p className="text-xs sm:text-sm text-foreground">
          <span className="font-bold">{purchase.name}</span> acabou de comprar{' '}
          <span className="font-semibold text-primary">{purchase.item}</span>!
        </p>
      </div>
    </div>
  );
}
