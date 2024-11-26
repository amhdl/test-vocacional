import { useState } from 'react';
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
/*
  const calculateResults = (): CategoryResult[] => {
    const categoryScores = Object.values(VocationalCategory).map(category => {
      const categoryAnswers = answers.filter(a => a.category === category);
      const totalScore = categoryAnswers.reduce((sum, a) => sum + a.score, 0);
      const maxPossibleScore = categoryAnswers.length * 4; // 4 is max score per question
      const percentageScore = (totalScore / maxPossibleScore) * 100;

      return {
        category,
        score: percentageScore,
        description: categoryDescriptions[category]
      };
    });

    return categoryScores.sort((a, b) => b.score - a.score).slice(0, 3);
  };
*/
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
        <ResultForm respuestasUsuario={answers.map(a => a.score)} />
      {/*  <Results respuestasUsuario={answers.map(a => a.score)} />*/}
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
}