import { PartyPopper } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AnswerPopup({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 pointer-events-none p-4',
        isOpen ? 'opacity-100' : 'opacity-0'
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-4 rounded-2xl border-2 border-primary/50 bg-background p-6 shadow-2xl transition-transform duration-300 w-full max-w-xs',
          isOpen ? 'scale-100' : 'scale-90'
        )}
      >
        <PartyPopper className="w-14 h-14 text-primary animate-pulse" />
        <h2 className="text-2xl font-bold text-primary font-headline">
          Muito Bem!
        </h2>
      </div>
    </div>
  );
}
