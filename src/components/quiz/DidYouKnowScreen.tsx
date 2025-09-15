import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BarChart, CheckSquare, Gem } from 'lucide-react';

type DidYouKnowScreenProps = {
  onContinue: () => void;
};

export default function DidYouKnowScreen({ onContinue }: DidYouKnowScreenProps) {
  return (
    <Card className="text-center shadow-2xl shadow-primary/10 border-primary/20 bg-card-background/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary font-headline">
          Você sabia?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-left space-y-4 text-sm md:text-base text-muted-foreground mb-8">
          <div className="flex items-start gap-3">
            <BarChart className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <p>
              <span className="font-semibold text-foreground/90">
                87% dos jogadores
              </span>{' '}
              já perderam itens lendários por não terem robux suficientes na
              hora certa!
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Gem className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <p>
              Mas hoje você tem a chance de mudar isso e garantir seus itens na{' '}
              <span className="font-bold text-foreground/90">
                SEMANA DO NOSSO 21º ANIVERSÁRIO!
              </span>
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckSquare className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <p>
              Responda corretamente as perguntas a seguir para{' '}
              <span className="font-bold text-foreground/90">
                acumular cada vez mais desconto!
              </span>
            </p>
          </div>
        </div>
        <Button
          onClick={onContinue}
          size="lg"
          className="w-full font-bold text-base md:text-lg"
        >
          Desbloquear CUPOM
        </Button>
      </CardContent>
    </Card>
  );
}
