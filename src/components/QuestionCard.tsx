import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selectedValue?: number;
  onSelect: (score: number) => void;
}

export function QuestionCard({ question, selectedValue, onSelect }: QuestionCardProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md question-card">
      <CardHeader>
        <div className="bg-white/75 p-2 rounded-md inline-block">
          <CardTitle className="text-2xl font-bold text-oeste mb-4">
            {question.text}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "w-full py-4 px-6 text-lg font-semibold rounded-lg transition-colors duration-200",
              selectedValue === index
                ? "bg-oeste text-white"
                : "bg-este text-oeste hover:bg-sur hover:text-white",
              "focus:outline-none focus:ring-2 focus:ring-oeste focus:ring-offset-2"
            )}
          >
            {option.label}
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
