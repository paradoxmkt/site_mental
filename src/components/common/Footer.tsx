import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

type FooterProps = {
  variant?: 'default' | 'inverse';
};

export default function Footer({ variant = 'default' }: FooterProps) {
  return (
    <footer className="w-full mt-auto pt-8 pb-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-center">
        <div
          className={cn(
            'flex items-center gap-2',
            variant === 'inverse'
              ? 'text-primary-foreground/70'
              : 'text-muted-foreground'
          )}
        >
          <ShieldCheck className="w-5 h-5" />
          <p className="text-xs">Compra Segura e Verificada</p>
        </div>
        <p
          className={cn(
            'text-xs',
            variant === 'inverse'
              ? 'text-primary-foreground/70'
              : 'text-muted-foreground'
          )}
        >
          &copy; 2025 Roblox. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
