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
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
          {question.text}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "w-full py-4 px-6 text-lg font-semibold text-white rounded-lg transition-colors duration-200",
              selectedValue === index
                ? "bg-green-600"
                : "bg-blue-500 hover:bg-green-700",
              "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            )}
          >
            {option.label}
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
