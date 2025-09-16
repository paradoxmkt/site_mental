import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

type IntroProps = {
  onStartQuiz: () => void;
};

export default function Intro({ onStartQuiz }: IntroProps) {
  return (
    <Card className="text-center shadow-2xl shadow-primary/10 border-primary/20 bg-card-background/80 backdrop-blur-sm">
      <CardHeader>
        <div className="mx-auto mb-4 w-20 h-20">
          <Image
            src="https://i.imgur.com/eRPjBXr.png"
            alt="Troféu Roblox"
            width={80}
            height={80}
            className="w-full h-auto"
          />
        </div>
        <CardTitle className="text-2xl md:text-3xl font-bold text-primary font-headline">
          🎉 O DESAFIO DE 21 ANOS DO ROBLOX JÁ ESTÁ NO AR!
        </CardTitle>
        <CardDescription className="text-base md:text-lg text-foreground/80">
          Participe agora e celebre junto com a gente!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 text-muted-foreground text-sm md:text-base text-left space-y-4">
          <p>
            O Roblox Corporation está comemorando 21 anos de história,
            celebrando o sucesso de jogos icônicos como{' '}
            <b>Roube um Brainrot, Grow a Garden e Brookhaven</b>, que marcaram
            gerações de jogadores. 🚀
          </p>
          <p>E nessa semana especial, você também faz parte da festa:</p>
          <p>
            💎 Responda ao quiz, mostre seu conhecimento e desbloqueie um{' '}
            <b>CUPOM ESPECIAL DE 90% DE DESCONTO</b> para comprar Robux no{' '}
            <b>21º Aniversário</b>!
          </p>
          <p>
            👉 Não fique de fora — participe agora e comemore junto com milhões
            de jogadores ao redor do mundo!
          </p>
        </div>
        <Button onClick={onStartQuiz} size="lg" className="w-full font-bold text-base md:text-lg">
          Começar o Quiz!
        </Button>
      </CardContent>
    </Card>
  );
}
