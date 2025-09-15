import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { Answer, Question } from '@/lib/questions';
import { cn } from '@/lib/utils';

type QuestionCardProps = {
  question: Question;
  onAnswer: (answer: Answer) => void;
  questionNumber: number;
  totalQuestions: number;
};

export default function QuestionCard({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  const progressPercentage = (questionNumber / totalQuestions) * 100;
  const discountPercentage = Math.round(
    ((questionNumber - 1) / totalQuestions) * 90
  );

  const hasImages = question.answers.some((answer) => answer.image);

  return (
    <Card className="shadow-2xl shadow-primary/10 border-primary/20 bg-card-background/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-primary">
            Pergunta {questionNumber} de {totalQuestions}
          </p>
        </div>
        <Progress value={progressPercentage} className="w-full h-2" />
        <div className="mt-4">
          <div className="flex justify-between items-end mb-1">
            <div>
              <p className="text-sm font-bold text-foreground">DESCONTO</p>
              <p className="text-xs text-muted-foreground">Acumulado</p>
            </div>
            <p className="text-sm font-semibold text-primary">
              {discountPercentage}%
            </p>
          </div>
          <Progress value={discountPercentage} className="w-full h-2" />
        </div>
        <CardTitle className="text-xl md:text-2xl pt-4 font-headline text-center text-foreground">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={
          hasImages
            ? 'grid grid-cols-2 gap-3 md:gap-4'
            : 'grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4'
        }
      >
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            variant={hasImages ? 'ghost' : 'outline'}
            size="lg"
            className={cn(
              'h-auto py-3 md:py-4 text-sm md:text-base whitespace-normal justify-center text-center flex-col',
              hasImages
                ? 'text-white p-0 hover:bg-transparent'
                : 'hover:bg-primary/10 hover:border-primary transition-colors duration-200'
            )}
            onClick={() => onAnswer(answer)}
          >
            {answer.image && (
              <div className="w-full aspect-square relative mb-2 overflow-hidden transition-transform duration-300 hover:scale-105">
                <Image
                  src={answer.image}
                  alt={answer.text}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span className="text-center">{answer.text}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
