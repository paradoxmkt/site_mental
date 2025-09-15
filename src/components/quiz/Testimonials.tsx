import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'PlayerOficial',
    rating: 5,
    comment: 'Chegou na mesma hora! Muito rápido e confiável, comprei 5.200 Robux e já estou usando. Recomendo demais!',
  },
  {
    name: 'AventureiraX',
    rating: 5,
    comment: 'Incrível! Paguei e os Robux caíram na conta instantaneamente. Finalmente posso comprar os itens que eu queria. Segurança 10/10.',
  },
  {
    name: 'Mestre_Construtor',
    rating: 5,
    comment: 'Funciona mesmo! Fiquei com um pé atrás, mas a entrega foi imediata. Com certeza vou comprar mais vezes por aqui.',
  },
  {
    name: 'GamerGirl_BR',
    rating: 5,
    comment: 'Superou minhas expectativas! Processo fácil, rápido e os Robux chegaram na hora. Site muito confiável.',
  },
  {
    name: 'ReiDosObbys',
    rating: 5,
    comment: 'Excelente! Chegou tudo certinho e na mesma hora. Melhor lugar pra comprar Robux, sem dúvida.',
  },
];

const TestimonialCard = ({ name, rating, comment }: (typeof testimonials)[0]) => (
  <Card className="w-full bg-card-background/80 backdrop-blur-sm">
    <CardContent className="p-4">
      <div className="flex items-center justify-between mb-2">
        <p className="font-bold text-primary text-sm md:text-base">{name}</p>
        <div className="flex items-center gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
      </div>
      <p className="text-xs md:text-sm text-foreground/80">{comment}</p>
    </CardContent>
  </Card>
);

export default function Testimonials() {
  return (
    <div className="w-full max-w-sm space-y-3 md:space-y-4">
      <h2 className="text-lg md:text-xl font-bold text-center text-primary-foreground">
        O que nossos jogadores dizem:
      </h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}
