import { Question, VocationalCategory } from '@/types/quiz';

export function calcularPuntajes(respuestas: number[], preguntas: Question[]) {
  const puntajes: Record<VocationalCategory, number> = {
    [VocationalCategory.CIENCIAS_MATEMATICAS]: 0,
    [VocationalCategory.HUMANIDADES_SOCIALES]: 0,
    [VocationalCategory.ARTES_DISENO]: 0,
    [VocationalCategory.TECNOLOGIA_INFORMATICA]: 0,
    [VocationalCategory.SALUD_BIOLOGIA]: 0,
    [VocationalCategory.NEGOCIOS_FINANZAS]: 0,
    [VocationalCategory.EDUCACION_SOCIAL]: 0
  };

  preguntas.forEach((pregunta, index) => {
    const categoria = pregunta.category;
    const respuesta = respuestas[index];
    puntajes[categoria] += respuesta;
  });

  return puntajes;
}
