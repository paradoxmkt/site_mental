
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import RecentPurchasePopup from './RecentPurchasePopup';
import Testimonials from './Testimonials';
import Image from 'next/image';

type FinalScreenProps = {
  nickname: string;
};

export default function FinalScreen({ nickname }: FinalScreenProps) {
  const checkoutUrl = 'https://www.ggcheckout.com/checkout/v2/bQwn8114oBPemsOuim9m';

  return (
    <div className="w-full flex flex-col items-center gap-6 pt-16 pb-0 animate-in fade-in-0 duration-1000">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tight">
          OFERTA DE 21º ANIVERSÁRIO DO ROBLOX
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mt-2">
          Seu cupom de 90% de desconto foi ativado!
        </p>
      </div>
      <RecentPurchasePopup />

      <div className="w-full max-w-sm">
        <Image
          src="https://i.imgur.com/Ox0gz6C.png"
          alt="Roblox Header"
          width={512}
          height={132}
          className="w-full h-auto"
        />
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground animate-pulse">
          Aproveite a promoção antes que acabe!
        </h2>
      </div>

      <a href={checkoutUrl} className="w-full max-w-sm">
        <Button
          variant="default"
          size="lg"
          className="w-full h-16 md:h-20 text-base md:text-xl font-bold animate-pulse bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Aproveitar agora
        </Button>
      </a>

      <div className="text-center text-primary-foreground/90 max-w-sm w-full p-4 bg-primary/10 rounded-lg">
        <p className="font-bold text-lg">
          💎 Parabéns {nickname}, você desbloqueou a oferta secreta!
        </p>
        <p className="mt-2">
          Você acaba de garantir 5.200 Robux por apenas{' '}
          <span className="font-bold text-accent">R$19,90</span>.
        </p>
        <p className="font-semibold">Disponível apenas hoje!</p>
        <p className="mt-4 font-bold text-xl">👉 Não perca !</p>
      </div>

      <a href={checkoutUrl} className="w-full max-w-sm">
        <Button
          variant="default"
          size="lg"
          className="w-full h-16 md:h-20 text-base md:text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Garantir Robux
        </Button>
      </a>

      <Testimonials />

      <Card className="w-full max-w-sm bg-card-background/80 backdrop-blur-sm">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary" />
            <h3 className="text-base md:text-lg font-bold text-primary">
              Segurança e Confiabilidade
            </h3>
          </div>
          <p className="text-3xl md:text-4xl font-black text-foreground mt-2">10/10</p>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            Nota máxima em todas as avaliações de segurança.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
