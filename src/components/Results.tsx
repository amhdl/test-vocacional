import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryResult, VocationalCategory } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { calcularPuntajes } from "@/data/quizUtils"; // Importa la función
import { questions, categoryDescriptions } from '@/data/questions';

interface ResultsProps {
  respuestasUsuario: number[]; // Asume que el componente recibe las respuestas del usuario
}

export function Results({ respuestasUsuario }: ResultsProps) {
  // Calcular los puntajes por categoría utilizando la función
  const puntajes = calcularPuntajes(respuestasUsuario, questions);

  // Convertir los puntajes en un array ordenado de resultados
  const resultadosOrdenados: CategoryResult[] = Object.entries(puntajes)
    .sort(([, a], [, b]) => b - a)
    .map(([categoria, score]) => ({
      category: categoria as VocationalCategory,
      score,
      description: categoryDescriptions[categoria as VocationalCategory] // Obtener la descripción correspondiente
    }));

  return (
    <div className="space-y-6 w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Áreas de Interés Sugeridas</h2>
      {resultadosOrdenados.map((result, index) => (
        <Card
          key={index}
          className={cn(
            "transition-all duration-300",
            index === 0 ? "border-primary" : ""
          )}
        >
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{result.category}</span>
              <span className="text-muted-foreground">Puntaje: {result.score}</span>
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
