export interface SkillGroup {
  id: number
  title: string
  description: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 1,
    title: "Frontend",
    description: "Construcción de interfaces modernas, escalables y responsivas.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SASS",
      "Less",
      "Styled Components",
    ],
  },

  {
    id: 2,
    title: "Testing",
    description: "Validación de interfaces y prevención de regresiones.",
    skills: ["Jest", "React Testing Library", "Cypress"],
  },

  {
    id: 3,
    title: "Integración",
    description:
      "Comunicación entre frontend, servicios y diferentes capas de aplicación.",
    skills: ["REST APIs", "Axios", "Fetch", "BFF", "Node.js", "Express"],
  },
]
