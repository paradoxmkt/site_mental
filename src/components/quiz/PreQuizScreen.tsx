import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type PreQuizScreenProps = {
  onContinue: () => void;
};

export default function PreQuizScreen({ onContinue }: PreQuizScreenProps) {
  return (
    <Card className="text-center shadow-2xl shadow-primary/10 border-primary/20 bg-card-background/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="p-0">
        <div className="w-full aspect-[9/16] relative mb-4">
          <Image
            src="https://i.imgur.com/nfiegF2.png"
            alt="Roblox Anniversary"
            fill
            className="object-contain"
          />
        </div>
        <div className="p-6 pt-0">
          <CardTitle className="text-xl md:text-2xl font-bold text-primary font-headline">
            Comemore Conosco o 21º Aniversário do Roblox!
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-6">
        <div className="text-left space-y-3 text-sm md:text-base text-muted-foreground mb-6">
          <p>
            A Roblox Corporation quebra recordes e supera concorrentes com
            <span className="font-semibold text-foreground/90"> Roube um Brainrot</span>,
            <span className="font-semibold text-foreground/90"> Grow a Garden</span> e
            <span className="font-semibold text-foreground/90"> Brookhaven</span>,
            que marca um cenário de sucesso nesses últimos anos.
          </p>
          <p>
            E para você celebrar essa semana especial conosco, o Roblox está
            liberando um <span className="font-semibold text-primary">presente exclusivo</span> para nossa comunidade!
          </p>
          <p>
            Responda o quiz e desbloqueie um{' '}
            <span className="font-bold text-primary">
              CUPOM ESPECIAL 21º ANIVERSÁRIO
            </span>{' '}
            de 90% de desconto para comprar Robux!
          </p>
        </div>
        <Button onClick={onContinue} size="lg" className="w-full font-bold text-base md:text-lg">
          Desbloquear Cupom!
        </Button>
      </CardContent>
    </Card>
  );
}
