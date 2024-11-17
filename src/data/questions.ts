import { Question, VocationalCategory } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you feel about solving complex mathematical problems?",
    category: VocationalCategory.INVESTIGATIVE,
    options: [
      "Strongly dislike",
      "Somewhat dislike",
      "Neutral",
      "Somewhat enjoy",
      "Strongly enjoy"
    ]
  },
  {
    id: 2,
    text: "How comfortable are you with helping others solve personal problems?",
    category: VocationalCategory.SOCIAL,
    options: [
      "Very uncomfortable",
      "Somewhat uncomfortable",
      "Neutral",
      "Somewhat comfortable",
      "Very comfortable"
    ]
  },
  {
    id: 3,
    text: "How interested are you in creating artistic works?",
    category: VocationalCategory.ARTISTIC,
    options: [
      "Not at all interested",
      "Slightly interested",
      "Moderately interested",
      "Very interested",
      "Extremely interested"
    ]
  },
  // Add more questions following the same pattern...
  {
    id: 20,
    text: "How do you feel about organizing and maintaining detailed records?",
    category: VocationalCategory.CONVENTIONAL,
    options: [
      "Strongly dislike",
      "Somewhat dislike",
      "Neutral",
      "Somewhat enjoy",
      "Strongly enjoy"
    ]
  }
];

export const categoryDescriptions: Record<VocationalCategory, string> = {
  [VocationalCategory.ARTISTIC]: "You have a strong creative drive and excel in self-expression through various art forms. Careers in design, music, writing, or performing arts might suit you well.",
  [VocationalCategory.CONVENTIONAL]: "You thrive in structured environments and have excellent organizational skills. Careers in administration, finance, or data analysis could be perfect for you.",
  [VocationalCategory.ENTERPRISING]: "You have natural leadership abilities and enjoy persuading others. Business management, sales, or entrepreneurship might be your calling.",
  [VocationalCategory.INVESTIGATIVE]: "You have a scientific mindset and enjoy solving complex problems. Research, technology, or scientific careers could be ideal for you.",
  [VocationalCategory.REALISTIC]: "You excel at practical, hands-on work and enjoy tangible results. Technical, mechanical, or outdoor careers might suit you best.",
  [VocationalCategory.SOCIAL]: "You have strong interpersonal skills and enjoy helping others. Teaching, counseling, or healthcare careers could be excellent choices for you."
};