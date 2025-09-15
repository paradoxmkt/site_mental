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
          Quiz Roblox
        </CardTitle>
        <CardDescription className="text-base md:text-lg text-foreground/80">
          Você é um verdadeiro fã?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-muted-foreground text-sm md:text-base">
          Teste seus conhecimentos e experiências no universo Roblox com 6
          perguntas divertidas!
        </p>
        <Button onClick={onStartQuiz} size="lg" className="w-full font-bold text-base md:text-lg">
          Começar o Quiz!
        </Button>
      </CardContent>
    </Card>
  );
}
