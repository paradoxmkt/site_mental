
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type NicknamePopupProps = {
  isOpen: boolean;
  onContinue: (nickname: string) => void;
  onClose: () => void;
};

export default function NicknamePopup({
  isOpen,
  onContinue,
  onClose,
}: NicknamePopupProps) {
  const [nickname, setNickname] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleContinue = () => {
    if (!nickname.trim()) {
      setError('Por favor, insira seu nickname.');
      return;
    }
    if (!termsAccepted) {
      setError('Você precisa aceitar os termos de serviço.');
      return;
    }
    setError('');
    onContinue(nickname);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-card text-card-foreground top-[40%] sm:top-[50%] translate-y-[-50%]">
        <DialogHeader>
          <DialogTitle className="text-primary font-headline">
            Insira seu Nickname
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Digite seu nome de usuário do Roblox para continuar.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="relative">
            <Input
              id="nickname"
              placeholder="Seu Nickname no Roblox"
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
                if (error) setError('');
              }}
              className="pr-10"
            />
            <CheckCircle
              className={cn(
                'absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500 transition-opacity',
                nickname.trim().length > 2 ? 'opacity-100' : 'opacity-0'
              )}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => {
                setTermsAccepted(!!checked);
                if (error) setError('');
              }}
            />
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Eu aceito os termos de serviço
            </Label>
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
        <DialogFooter>
          <Button onClick={handleContinue} className="w-full">
            Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
