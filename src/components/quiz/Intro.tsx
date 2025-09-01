import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Gamepad2 } from 'lucide-react';

type IntroProps = {
  onStartQuiz: () => void;
};

export default function Intro({ onStartQuiz }: IntroProps) {
  return (
    <Card className="text-center shadow-2xl shadow-primary/10 border-primary/20">
      <CardHeader>
        <div className="mx-auto bg-primary/10 p-3 md:p-4 rounded-full mb-4 w-min">
          <Gamepad2 className="w-10 h-10 md:w-12 md:h-12 text-primary" />
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
