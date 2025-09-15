
export type Answer = {
  text: string;
  image?: string;
};

export type Question = {
  id: number;
  question: string;
  answers: Answer[];
};

export const quizQuestions: Question[] = [
  {
    id: 3,
    question: 'Qual Mini Game é mais jogado no Roblox Atualmente?',
    answers: [
      {
        text: 'Brookhaven',
        image: 'https://i.imgur.com/AwSf3Mc.png',
      },
      {
        text: 'Roube um Brainrot',
        image: 'https://i.imgur.com/1tvGoQf.png',
      },
      {
        text: 'Grow a Garden',
        image: 'https://i.imgur.com/ZFQuH4p.png',
      },
      {
        text: 'Blox Fruits',
        image: 'https://i.imgur.com/FxCk0bs.png',
      },
    ],
  },
  {
    id: 1,
    question:
      'Em Blox Fruits, qual destas frutas é famosa por ser uma das mais cobiçadas e poderosas para PvP (combate)?',
    answers: [
      {
        text: 'Fruta do Giro (Spin)',
        image: 'https://i.imgur.com/Z8mMu8d.png',
      },
      {
        text: 'Fruta do Leopardo (Leopard)',
        image: 'https://i.imgur.com/QxIZNiz.png',
      },
      {
        text: 'Fruta da Fumaça (Smoke)',
        image: 'https://i.imgur.com/YIsygbh.png',
      },
      {
        text: 'Fruta da mola (Spring)',
        image: 'https://i.imgur.com/QA8D6Hu.png',
      },
    ],
  },
  {
    id: 7,
    question: 'Já tentou convencer seus pais a comprar Robux para você?',
    answers: [
      { text: 'Sim, e consegui!' },
      { text: 'Tentei, mas não deu certo.' },
      { text: 'Meus pais compram sem eu precisar pedir.' },
      { text: 'Eu mesmo compro meus Robux.' },
    ],
  },
  {
    id: 2,
    question:
      "Já jogou um 'obby' tão difícil que quase quebrou alguma coisa?",
    answers: [
      { text: 'Com certeza, meu teclado sofreu.' },
      { text: 'Fiquei muito irritado, mas me controlei.' },
      { text: 'Não, sou muito bom em obbies.' },
      { text: 'Eu evito jogos que me estressam.' },
    ],
  },
    {
    id: 9,
    question:
      'Em qual destes mundos você mais gosta de entrar para se divertir com seus amigos?',
    answers: [
      {
        text: 'Steal a Brainrot',
        image: 'https://i.imgur.com/5ks7NUS.png',
      },
      {
        text: 'Blox Fruits',
        image: 'https://i.imgur.com/bPYKHb1.png',
      },
      {
        text: 'Tower Of Hell',
        image: 'https://i.imgur.com/iXVvIaL.png',
      },
      {
        text: 'Adopt Me!',
        image: 'https://i.imgur.com/pZn1mei.png',
      },
    ],
  },
  {
    id: 4,
    question: 'Já ficou sem dinheiro para comprar Robux?',
    answers: [
      { text: 'Sim, várias vezes!' },
      { text: 'Aconteceu uma ou duas vezes.' },
      { text: 'Não, sempre tenho Robux de sobra.' },
      { text: 'Estou quase sempre sem dinheiro.' },
    ],
  },
  {
    id: 5,
    question:
      'Já sentiu vontade de comprar algo na loja do Roblox mas não tinha dinheiro?',
    answers: [
      { text: 'Toda hora!' },
      { text: 'Sim, algumas vezes.' },
      { text: 'Raramente, eu compro o que quero.' },
      { text: 'Não, eu me contento com os itens grátis.' },
    ],
  },
  {
    id: 6,
    question: 'Já passou horas construindo um lugar no Roblox Studio?',
    answers: [
      { text: 'Sim, sou um mestre construtor!' },
      { text: 'Tentei uma vez, mas é muito difícil.' },
      { text: 'Prefiro jogar os jogos dos outros.' },
      { text: 'O que é Roblox Studio?' },
    ],
  },
  {
    id: 8,
    question: 'Já sonhou que estava dentro do Roblox?',
    answers: [
      { text: 'Sim, foi uma aventura épica!' },
      { text: 'Acho que sim, foi um sonho estranho.' },
      { text: 'Não, nunca sonhei com isso.' },
      { text: 'Eu vivo no Roblox, não preciso sonhar.' },
    ],
  },
  {
    id: 10,
    question: 'Qual o nome da empresa criadora do Roblox?',
    answers: [
      { text: 'Roblox Corporation', image: 'https://i.imgur.com/guQwzPu.png' },
      { text: 'Tencent', image: 'https://i.imgur.com/943MwKl.png' },
      { text: 'Supercell', image: 'https://i.imgur.com/MiIflvG.png' },
      { text: 'Ubisoft', image: 'https://i.imgur.com/yw96PHK.png' },
    ],
  },
  {
    id: 11,
    question: 'Se você tivesse um cupom de desconto HOJE para comprar robux e não perder mais nenhum evento, você usaria?',
    answers: [
      { text: 'Com certeza! Sempre preciso de robux!' },
      { text: 'Usaria sim!' },
      { text: 'Talvez, dependendo do desconto.' },
      { text: 'Não sei...' },
    ],
  },
];
