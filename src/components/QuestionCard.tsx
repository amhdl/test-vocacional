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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{question.text}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "w-full p-4 text-left rounded-lg transition-all duration-200",
              "border-2 hover:border-primary/50 hover:bg-accent",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              selectedValue === index
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-muted bg-card"
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                selectedValue === index
                  ? "border-primary"
                  : "border-muted-foreground"
              )}>
                {selectedValue === index && (
                  <div className="w-2 h-2 rounded-full bg-primary" />
                )}
              </div>
              <span className={cn(
                "text-sm font-medium",
                selectedValue === index
                  ? "text-primary"
                  : "text-foreground"
              )}>
                {option}
              </span>
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}