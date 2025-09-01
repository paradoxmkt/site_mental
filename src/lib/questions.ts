export type Question = {
  id: number;
  question: string;
  answers: string[];
};

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: 'Já ficou sem dinheiro para comprar Robux?',
    answers: [
      'Sim, várias vezes!',
      'Aconteceu uma ou duas vezes.',
      'Não, sempre tenho Robux de sobra.',
      'Estou quase sempre sem dinheiro.',
    ],
  },
  {
    id: 2,
    question:
      'Já sentiu vontade de comprar algo na loja do Roblox mas não tinha dinheiro?',
    answers: [
      'Toda hora!',
      'Sim, algumas vezes.',
      'Raramente, eu compro o que quero.',
      'Não, eu me contento com os itens grátis.',
    ],
  },
  {
    id: 3,
    question: 'Já passou horas construindo um lugar no Roblox Studio?',
    answers: [
      'Sim, sou um mestre construtor!',
      'Tentei uma vez, mas é muito difícil.',
      'Prefiro jogar os jogos dos outros.',
      'O que é Roblox Studio?',
    ],
  },
  {
    id: 4,
    question: 'Já tentou convencer seus pais a comprar Robux para você?',
    answers: [
      'Sim, e consegui!',
      'Tentei, mas não deu certo.',
      'Meus pais compram sem eu precisar pedir.',
      'Eu mesmo compro meus Robux.',
    ],
  },
  {
    id: 5,
    question: 'Já sonhou que estava dentro do Roblox?',
    answers: [
      'Sim, foi uma aventura épica!',
      'Acho que sim, foi um sonho estranho.',
      'Não, nunca sonhei com isso.',
      'Eu vivo no Roblox, não preciso sonhar.',
    ],
  },
  {
    id: 6,
    question:
      "Já jogou um 'obby' tão difícil que quase quebrou alguma coisa?",
    answers: [
      'Com certeza, meu teclado sofreu.',
      'Fiquei muito irritado, mas me controlei.',
      'Não, sou muito bom em obbies.',
      'Eu evito jogos que me estressam.',
    ],
  },
];
