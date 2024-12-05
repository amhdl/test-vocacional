
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';


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
    <div className="min-h-screen bg-background p-8 ">
       <header className="bg-white shadow-sm max-w-[600px]">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="https://brujula.uy">
                <img src="images/logoBrujula.svg" alt="Brújula Logo" className="h-logo w-auto" />
              </a>
              <div className="ml-4">
                <h1 className="hey-gotcha-font text-4xl text-gray-900">Brújula</h1>
                <p className="text-xl text-gray-600">Acompañando tu camino profesional</p>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="max-w-2xl mx-auto space-y-8 max-w-[600px]">


        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            selectedValue={currentAnswer?.score}
            onSelect={handleAnswer}
            onNext={handleNext} // Pasamos handleNext para avanzar automáticamente
          />
        )}

        <footer className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-t z-10 max-w-[600px]">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className="p-2 text-white bg-sur hover:bg-oeste/80 focus:ring-2 focus:ring-offset-2 focus:ring-oeste"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
            <QuizStepper currentStep={currentStep} totalSteps={questions.length} />
          </div>
        </footer>
      </div>
    </div>
  );
}