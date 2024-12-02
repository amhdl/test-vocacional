/*import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { QuizStepper } from '@/components/QuizStepper';
import { QuestionCard } from '@/components/QuestionCard';
import  ResultForm  from '@/components/ResultForm';
import { questions, categoryDescriptions } from '@/data/questions';
import { Answer, CategoryResult, VocationalCategory } from '@/types/quiz';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions.find(q => q.id === currentStep);

  const handleAnswer = (score: number) => {
    if (!currentQuestion) return;

    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === currentQuestion.id);
      if (existing) {
        return prev.map(a =>
          a.questionId === currentQuestion.id
            ? { ...a, score }
            : a
        );
      }
      return [...prev, {
        questionId: currentQuestion.id,
        category: currentQuestion.category,
        score
      }];
    });
  };

  
  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const currentAnswer = currentQuestion
    ? answers.find(a => a.questionId === currentQuestion.id)
    : undefined;

    if (showResults) {
        return (
          <div className="min-h-screen bg-background p-8">
            <ResultForm
              respuestasUsuario={answers.map(a => a.score)}
              onBack={() => {
                setShowResults(false); // Vuelve al test desde los resultados
                setCurrentStep(questions.length); // Regresa al último paso del test
              }}
            />
          </div>
        );
      }
      

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <QuizStepper
          currentStep={currentStep}
          totalSteps={questions.length}
        />
        
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedValue={currentAnswer?.score}
            onSelect={handleAnswer}
          />
        )}

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Atrás
          </Button>

          <Button
            onClick={handleNext}
            disabled={!currentAnswer}
          >
            {currentStep === questions.length ? 'Finalizar' : 'Siguiente'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}*/

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizStepper } from "@/components/QuizStepper";
import { QuestionCard } from "@/components/QuestionCard";
import ResultForm from "@/components/ResultForm";
import { StartPage } from "@/components/StartPage";
import { FinalPage } from "@/components/FinalPage";
import { questions } from "@/data/questions";
import { Answer } from "@/types/quiz";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = página inicial
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false); // Estado para FinalPage

  const currentQuestion = questions.find((q) => q.id === currentStep);

  const handleAnswer = (score: number) => {
    if (!currentQuestion) return;

    setAnswers((prev) => {
      const existing = prev.find((a) => a.questionId === currentQuestion.id);
      if (existing) {
        return prev.map((a) =>
          a.questionId === currentQuestion.id ? { ...a, score } : a
        );
      }
      return [
        ...prev,
        {
          questionId: currentQuestion.id,
          category: currentQuestion.category,
          score,
        },
      ];
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const startTest = () => {
    setCurrentStep(1); // Cambia al primer paso del test
  };

  const handleFinish = () => {
    setShowResults(false);
    setShowFinalPage(true); // Muestra la página final
  };

  const restartTest = () => {
    setAnswers([]);
    setCurrentStep(0); // Regresa a la página inicial
    setShowResults(false);
    setShowFinalPage(false);
  };

  const currentAnswer = currentQuestion
    ? answers.find((a) => a.questionId === currentQuestion.id)
    : undefined;

  // Página de Resultados
  if (showResults) {
    return (
      <div className="min-h-screen bg-background p-8">
        <ResultForm
          respuestasUsuario={answers.map((a) => a.score)}
          onBack={() => {
            setShowResults(false);
            setCurrentStep(questions.length); // Regresa al último paso del test
          }}
          onFinish={handleFinish} // Al finalizar, muestra FinalPage
        />
      </div>
    );
  }

  // Página Final
  if (showFinalPage) {
    return (
      <div className="min-h-screen bg-background p-8">
        <FinalPage onRestart={restartTest} />
      </div>
    );
  }

  // Página Inicial
  if (currentStep === 0) {
    return <StartPage onStart={startTest} />;
  }

  // Test
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <QuizStepper currentStep={currentStep} totalSteps={questions.length} />

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedValue={currentAnswer?.score}
            onSelect={handleAnswer}
          />
        )}

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Atrás
          </Button>

          <Button onClick={handleNext} disabled={!currentAnswer}>
            {currentStep === questions.length ? "Finalizar" : "Siguiente"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}