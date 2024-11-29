import { Question, VocationalCategory } from '@/types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    text: "Cuando trabajo bajo presión, me pongo nervioso/a",
    category: VocationalCategory.NEGOCIOS_FINANZAS,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 2,
    text: "Me gusta indagar e investigar sobre el por qué de las cosas",
    category: VocationalCategory.CIENCIAS_MATEMATICAS,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  }
  /*
  ,
  {
    id: 3,
    text: "Se me da bien resolver problemas de una manera rápida y eficaz",
    category: VocationalCategory.TECNOLOGIA_INFORMATICA,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 4,
    text: "Me gusta dejarme llevar por mis sentimientos y corazonadas",
    category: VocationalCategory.ARTES_DISENO,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 5,
    text: "Mi pensamiento suele ser muy ordenado",
    category: VocationalCategory.TECNOLOGIA_INFORMATICA,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 6,
    text: "Me gusta la buena literatura y las obras de arte en los museos",
    category: VocationalCategory.ARTES_DISENO,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 7,
    text: "Me considero una persona creativa e innovadora",
    category: VocationalCategory.ARTES_DISENO,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 8,
    text: "Mi objetivo en la vida es escalar puestos y ser reconocido/a",
    category: VocationalCategory.NEGOCIOS_FINANZAS,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 9,
    text: "En el amor, soy una persona detallista y romántica",
    category: VocationalCategory.EDUCACION_SOCIAL,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 10,
    text: "Me gusta cultivar mi mente y llenarla de nuevos conocimientos",
    category: VocationalCategory.HUMANIDADES_SOCIALES,
    options: [
      { label: "Nunca", score: 0 },
      { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  
  
  {
    id: 11,
    text: "Soy una persona bastante despistada",
    category: VocationalCategory.SALUD_BIOLOGIA,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 12,
    text: "Me exijo constantemente efectividad y buenos resultados en mis estudios",
    category: VocationalCategory.NEGOCIOS_FINANZAS,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 13,
    text: "Cuando hago un trabajo en grupo, me encargo de la parte creativa",
    category: VocationalCategory.ARTES_DISENO,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 14,
    text: "Se me dan muy bien los idiomas",
    category: VocationalCategory.HUMANIDADES_SOCIALES,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 15,
    text: "Mis asignaturas favoritas son las matemáticas, física o las ciencias",
    category: VocationalCategory.CIENCIAS_MATEMATICAS,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 16,
    text: "Me gusta escuchar a los demás y comprender sus sentimientos",
    category: VocationalCategory.EDUCACION_SOCIAL,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 17,
    text: "Soy capaz de entender mis emociones y expresarlas correctamente",
    category: VocationalCategory.EDUCACION_SOCIAL,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 18,
    text: "Tengo facilidad para pensar y razonar de forma lógica",
    category: VocationalCategory.TECNOLOGIA_INFORMATICA,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 19,
    text: "Considero que soy bueno/a trabajando en equipo",
    category: VocationalCategory.EDUCACION_SOCIAL,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  },
  {
    id: 20,
    text: "Soy una persona muy curiosa y me gusta estudiar los fenómenos de todo lo que nos rodea",
    category: VocationalCategory.CIENCIAS_MATEMATICAS,
    options: [
         { label: "Nunca", score: 0 },
     { label: "Rara vez", score: 1 },
      { label: "A veces", score: 2 },
      { label: "A menudo", score: 3 },
      { label: "Siempre", score: 4 }
    ]
  }
*/  
];




export const categoryDescriptions: Record<VocationalCategory, string> = {
  "Ciencias y Matemáticas": "Tienes una gran capacidad de razonamiento lógico y disfrutas investigando y resolviendo problemas complejos. Las carreras en ciencias puras, matemáticas o investigación científica podrían ser ideales para ti.",
  "Humanidades y Ciencias Sociales": "Tienes interés en comprender el comportamiento humano y los aspectos sociales de nuestra sociedad. Las carreras en sociología, historia, psicología o derecho pueden ser una buena opción para ti.",
  "Artes y Diseño": "Posees una fuerte inclinación creativa y disfrutas expresarte a través de distintas formas de arte. Las carreras en diseño gráfico, artes visuales, música o escritura pueden ser ideales para ti.",
  "Tecnología e Informática": "Te interesan los avances tecnológicos y disfrutas resolviendo problemas de forma estructurada y lógica. Las carreras en ingeniería de software, desarrollo web o ciencia de datos pueden ser adecuadas para ti.",
  "Salud y Biología": "Te apasiona el cuidado de la salud y el estudio de los seres vivos. Las carreras en medicina, biología o enfermería podrían ser una buena opción para ti.",
  "Negocios y Finanzas": "Tienes habilidades para gestionar proyectos y tomar decisiones estratégicas en ambientes dinámicos. Las carreras en administración de empresas, economía o finanzas pueden ser ideales para ti.",
  "Educación y Trabajo Social": "Tienes una fuerte vocación por ayudar a los demás y disfrutas apoyando el desarrollo de las personas. Las carreras en educación, trabajo social o psicología comunitaria pueden ser una excelente elección para ti."
};
