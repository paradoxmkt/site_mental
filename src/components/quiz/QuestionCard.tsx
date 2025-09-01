import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import type { Question } from '@/lib/questions';
import { CheckCircle } from 'lucide-react';

type QuestionCardProps = {
  question: Question;
  onAnswer: (answer: string) => void;
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

  return (
    <Card className="shadow-2xl shadow-primary/10 border-primary/20">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-primary">
            Pergunta {questionNumber} de {totalQuestions}
          </p>
        </div>
        <Progress value={progressPercentage} className="w-full h-2" />
        <CardTitle className="text-xl md:text-2xl pt-4 font-headline text-center">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            className="h-auto py-3 md:py-4 text-sm md:text-base whitespace-normal justify-start text-left hover:bg-primary/10 hover:border-primary transition-colors duration-200"
            onClick={() => onAnswer(answer)}
          >
            <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
            {answer}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
