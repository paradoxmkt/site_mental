import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Award } from 'lucide-react';

type SuccessPopupProps = {
  onContinue: () => void;
  nickname: string;
};

export default function SuccessPopup({ onContinue, nickname }: SuccessPopupProps) {
  return (
    <Dialog open={true}>
      <DialogContent className="text-center p-6 w-[calc(100%-2rem)] max-w-sm">
        <DialogHeader>
          <div className="mx-auto bg-primary/10 p-3 rounded-full mb-2 w-min">
            <Award className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-primary font-headline">
            Sucesso!
          </DialogTitle>
          <DialogDescription className="text-base text-foreground/80 pt-1">
            Parabéns,{' '}
            <span className="font-bold text-primary">{nickname}</span>! Você
            conseguiu o super desconto de{' '}
            <span className="font-bold text-primary">90%</span>!
          </DialogDescription>
        </DialogHeader>
        <Button onClick={onContinue} size="lg" className="w-full mt-3 text-base">
          Continuar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
