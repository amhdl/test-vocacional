import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface QuizStepperProps {
  currentStep: number;
  totalSteps: number;
}

export function QuizStepper({ currentStep, totalSteps }: QuizStepperProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Question {currentStep} of {totalSteps}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}