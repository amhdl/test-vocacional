import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryResult } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface ResultsProps {
  results: CategoryResult[];
}

export function Results({ results }: ResultsProps) {
  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Your Top Career Matches</h2>
      {results.map((result, index) => (
        <Card key={index} className={cn(
          "transition-all duration-300",
          index === 0 ? "border-primary" : ""
        )}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{result.category}</span>
              <span className="text-muted-foreground">
                Score: {Math.round(result.score)}%
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{result.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}