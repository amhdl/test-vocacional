import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; // Asegúrate de importar el ícono


interface QuestionCardProps {
  question: Question;
  selectedValue?: number;
  onSelect: (score: number) => void;
  onNext: () => void;
}

export function QuestionCard({
  question,
  selectedValue,
  onSelect,
  onNext,
}: QuestionCardProps) {
  const [isProcessing, setIsProcessing] = useState(false); // Estado para manejar el retraso

  const handleOptionClick = (index: number) => {
    if (isProcessing) return; // Evitar múltiples selecciones
    setIsProcessing(true);
    onSelect(index); // Registra la respuesta
    setTimeout(() => {
      onNext(); // Avanza después del retraso
      setIsProcessing(false); // Restablece el estado
    }, 400); // Retraso de 1 segundo
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md question-card relative">
    {/* Fondo semi-transparente con el ícono de carga */}
    {isProcessing && (
      <div className="absolute inset-0 flex justify-center items-center bg-black/40 rounded-lg pointer-events-none">
        <FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-white" />
      </div>
    )}

    <CardHeader>
      <div className="bg-white/75 p-2 rounded-md inline-block flex flex-col justify-between min-h-[150px]">
        <CardTitle className="text-2xl font-bold text-oeste mb-4">
          {question.text}
        </CardTitle>
      </div>
    </CardHeader>

    {/* Espacio flexible para mantener el contenido abajo */}
    <div className="flex-grow"></div>

      <CardContent className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={cn(
              "w-full py-1 px-6 text-lg font-semibold rounded-lg transition-transform duration-300",
              selectedValue === index
                ? "bg-oeste text-white scale-105"
                : "bg-este text-oeste lg:hover:bg-sur lg:hover:text-white",
              isProcessing ? "cursor-not-allowed opacity-50" : "",
              "focus:outline-none focus:ring-2 focus:ring-oeste focus:ring-offset-2"
            )}
            disabled={isProcessing} // Deshabilitar mientras se procesa, pero visible
          >
            {option.label}
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
