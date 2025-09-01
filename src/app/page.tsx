'use client';

import { useState } from 'react';
import Intro from '@/components/quiz/Intro';
import QuestionCard from '@/components/quiz/QuestionCard';
import LoadingScreen from '@/components/quiz/LoadingScreen';
import FinalScreen from '@/components/quiz/FinalScreen';
import SuccessPopup from '@/components/quiz/SuccessPopup';
import AnswerPopup from '@/components/quiz/AnswerPopup';
import Footer from '@/components/common/Footer';
import { quizQuestions } from '@/lib/questions';
import { cn } from '@/lib/utils';

type QuizState = 'intro' | 'quiz' | 'loading' | 'success' | 'final';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswerPopup, setShowAnswerPopup] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const startQuiz = () => {
    setAnimationKey((k) => k + 1);
    setQuizState('quiz');
  };

  const handleAnswer = () => {
    setShowAnswerPopup(true);
    setTimeout(() => {
      setShowAnswerPopup(false);
      setAnimationKey((k) => k + 1);
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setQuizState('loading');
      }
    }, 1500); // Show "Parabéns!" for 1.5s
  };

  const handleLoadingComplete = () => {
    setAnimationKey((k) => k + 1);
    setQuizState('success');
  };

  const handleSuccessContinue = () => {
    setAnimationKey((k) => k + 1);
    setQuizState('final');
  };

  const renderContent = () => {
    switch (quizState) {
      case 'intro':
        return <Intro onStartQuiz={startQuiz} />;
      case 'quiz':
        const question = quizQuestions[currentQuestionIndex];
        if (!question) return null; // Prevent rendering if question is undefined
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
      case 'success':
        return <SuccessPopup onContinue={handleSuccessContinue} />;
      case 'final':
        return <FinalScreen />;
      default:
        return <Intro onStartQuiz={startQuiz} />;
    }
  };

  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center p-4 overflow-hidden transition-colors duration-500',
        quizState === 'final' ? 'bg-primary' : 'bg-background'
      )}
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div
        key={animationKey}
        className="w-full max-w-2xl animate-in fade-in-0 slide-in-from-bottom-5 duration-500"
      >
        {renderContent()}
      </div>
      <AnswerPopup isOpen={showAnswerPopup} />
      <Footer variant={quizState === 'final' ? 'inverse' : 'default'} />
    </main>
  );
}
