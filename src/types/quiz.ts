export interface Question {
  id: number;
  text: string;
  category: VocationalCategory;
  options: string[];
}

export interface Answer {
  questionId: number;
  score: number;
  category: VocationalCategory;
}

/*
export enum VocationalCategory {
  ARTISTIC = "Artistic",
  CONVENTIONAL = "Conventional",
  ENTERPRISING = "Enterprising",
  INVESTIGATIVE = "Investigative",
  REALISTIC = "Realistic",
  SOCIAL = "Social"
}
*/

export enum VocationalCategory {
  CIENCIAS_MATEMATICAS = "Ciencias y Matemáticas",
  HUMANIDADES_SOCIALES = "Humanidades y Ciencias Sociales",
  ARTES_DISENO = "Artes y Diseño",
  TECNOLOGIA_INFORMATICA = "Tecnología e Informática",
  SALUD_BIOLOGIA = "Salud y Biología",
  NEGOCIOS_FINANZAS = "Negocios y Finanzas",
  EDUCACION_SOCIAL = "Educación y Trabajo Social"
}

export interface CategoryResult {
  category: VocationalCategory;
  score: number;
  description: string;
}