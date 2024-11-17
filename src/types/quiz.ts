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

export enum VocationalCategory {
  ARTISTIC = "Artistic",
  CONVENTIONAL = "Conventional",
  ENTERPRISING = "Enterprising",
  INVESTIGATIVE = "Investigative",
  REALISTIC = "Realistic",
  SOCIAL = "Social"
}

export interface CategoryResult {
  category: VocationalCategory;
  score: number;
  description: string;
}