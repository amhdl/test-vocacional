import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryResult, VocationalCategory } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { calcularPuntajes } from "@/data/quizUtils"; // Importa la función
import { questions, categoryDescriptions } from '@/data/questions';

interface ResultsProps {
  respuestasUsuario: number[]; // Asume que el componente recibe las respuestas del usuario
}



export function generarResultadosHTML( name: string , respuestasUsuario: number[]) {
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

    const topResults = resultadosOrdenados
    .sort((a, b) => b.score - a.score) // Ordenar por puntaje descendente
    .slice(0, 2); // Tomar los 2 primeros elementos
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.5; color: #333;">
      <!-- Saludo inicial -->
      <h1 style="text-align: center; font-size: 28px; font-weight: bold; color: #0056b3;">Hola!</h1>
      <p style="text-align: center; font-size: 16px; margin: 16px 0;">
        Estos son los resultados de tu primer test de orientación vocacional. Este test es una herramienta inicial para identificar características clave que nos ayudarán en el proceso que puedes iniciar con 
        <strong>Brújula Orientación Vocacional</strong>. ¡Estamos aquí para acompañarte en tu camino!
      </p>
  
      <!-- Resultados principales -->
      <h2 style="text-align: center; font-size: 24px; font-weight: bold; margin-top: 32px;">Áreas de Interés Sugeridas</h2>
      ${topResults.map(result => `
        <div style="border: 1px solid #ccc; padding: 16px; margin: 8px 0; border-radius: 8px; background: #f9f9f9;">
          <h3 style="display: flex; justify-content: space-between; font-size: 18px; margin-bottom: 8px;">
            <span>${result.category}</span>
            <span style="color: #777;">Puntaje: ${result.score}</span>
          </h3>
          <p style="color: #555; margin: 0;">${result.description}</p>
        </div>
      `).join('')}
  
      <!-- Invitación a contactarnos -->
      <div style="margin-top: 32px; text-align: center; padding: 16px; border: 1px solid #0056b3; border-radius: 8px; background: #eef6ff;">
        <h3 style="font-size: 20px; color: #0056b3; font-weight: bold;">¡Estamos para ayudarte!</h3>
        <p style="margin: 8px 0;">Si deseas continuar con el proceso, no dudes en contactarnos.</p>
        <div>
          <a href="https://www.instagram.com/brujula" target="_blank" style="color: #0056b3; text-decoration: none; margin-right: 16px;">Instagram</a>
          <a href="https://www.facebook.com/brujula" target="_blank" style="color: #0056b3; text-decoration: none; margin-right: 16px;">Facebook</a>
          <a href="mailto:contacto@brujula.com" target="_blank" style="color: #0056b3; text-decoration: none;">Correo</a>
        </div>
      </div>
    </div>
  `;

  return htmlContent;
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
