import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck } from 'lucide-react';
import RecentPurchasePopup from './RecentPurchasePopup';
import Testimonials from './Testimonials';
import OfferHeader from './OfferHeader';

export default function FinalScreen() {
  const videoId = 'ki6dzN0KRxI';
  const checkoutUrl = 'https://www.ggcheckout.com/checkout/v2/bQwn8114oBPemsOuim9m';

  return (
    <div className="w-full flex flex-col items-center gap-6 pt-16 pb-0 animate-in fade-in-0 duration-1000">
      <OfferHeader />
      <RecentPurchasePopup />

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground animate-pulse">
          Aproveite a promoção antes que acabe!
        </h2>
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Card className="w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/20 border-accent/20">
          <div className="aspect-[9/16] w-full bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </Card>
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

      <Testimonials />

      <Card className="w-full max-w-sm bg-background/80 backdrop-blur-sm">
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
