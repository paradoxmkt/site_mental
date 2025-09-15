
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Intro from '@/components/quiz/Intro';
import QuestionCard from '@/components/quiz/QuestionCard';
import LoadingScreen from '@/components/quiz/LoadingScreen';
import FinalScreen from '@/components/quiz/FinalScreen';
import Footer from '@/components/common/Footer';
import { quizQuestions } from '@/lib/questions';
import { cn } from '@/lib/utils';
import PreQuizScreen from '@/components/quiz/PreQuizScreen';
import NicknamePopup from '@/components/quiz/NicknamePopup';
import DidYouKnowScreen from '@/components/quiz/DidYouKnowScreen';

type QuizState = 'intro' | 'pre-quiz' | 'did-you-know' | 'quiz' | 'loading' | 'final';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNicknamePopup, setShowNicknamePopup] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [nickname, setNickname] = useState('');

  const handleStartIntro = () => {
    setAnimationKey((k) => k + 1);
    setQuizState('pre-quiz');
  };

  const handlePreQuizContinue = () => {
    setShowNicknamePopup(true);
  };
  
  const handleNicknameContinue = (nickname: string) => {
    setNickname(nickname);
    setShowNicknamePopup(false);
    setAnimationKey((k) => k + 1);
    setQuizState('did-you-know');
  };

  const handleDidYouKnowContinue = () => {
    startQuiz();
  };

  const startQuiz = () => {
    setAnimationKey((k) => k + 1);
    setQuizState('quiz');
  };

  const handleAnswer = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setAnimationKey((k) => k + 1);
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizState('loading');
    }
  };

  const handleLoadingComplete = () => {
    setAnimationKey((k) => k + 1);
    setQuizState('final');
  };

  const renderContent = () => {
    switch (quizState) {
      case 'intro':
        return <Intro onStartQuiz={handleStartIntro} />;
      case 'pre-quiz':
        return <PreQuizScreen onContinue={handlePreQuizContinue} />;
      case 'did-you-know':
        return <DidYouKnowScreen onContinue={handleDidYouKnowContinue} />;
      case 'quiz':
        const question = quizQuestions[currentQuestionIndex];
        return (
          <QuestionCard
            question={question}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={quizQuestions.length}
          />
        );
      case 'loading':
        return <LoadingScreen onComplete={handleLoadingComplete} />;
      case 'final':
        return <FinalScreen nickname={nickname} />;
      default:
        return <Intro onStartQuiz={handleStartIntro} />;
    }
  };
  
  const isFinalState = quizState === 'final';

  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center p-4 overflow-hidden transition-colors duration-500 bg-transparent',
         isFinalState ? 'justify-start' : 'justify-center'
      )}
    >
       {!isFinalState && (
         <div className="w-full max-w-sm mb-4">
          <Image
            src="https://i.imgur.com/Ox0gz6C.png"
            alt="Roblox Header"
            width={512}
            height={132}
            className="w-full h-auto"
          />
        </div>
      )}
      <div
        key={animationKey}
        className="w-full max-w-2xl animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
      >
        {renderContent()}
      </div>
       <NicknamePopup
        isOpen={showNicknamePopup}
        onContinue={handleNicknameContinue}
        onClose={() => setShowNicknamePopup(false)}
      />
      <Footer variant={quizState === 'final' ? 'inverse' : 'default'} />
    </main>
  );
}
