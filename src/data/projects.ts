export interface Project {
  id: number
  company: string
  period: string
  title: string
  description: string
  technologies: string[]

  caseStudy?: {
    context: string
    challenge: string
    work: string[]
    impact: string[]
  }
}

export const projects: Project[] = [
  {
    id: 1,
    company: "Mercado Libre",
    period: "2021 — 2025",
    title: "Core Experience & API Integration",
    description:
      "Desarrollo de experiencias frontend confiables dentro de un ecosistema de alto tráfico.",

    technologies: ["React", "JavaScript", "REST APIs", "BFF", "Jest", "Cypress"],

    caseStudy: {
      context:
        "Trabajé en el desarrollo de aplicaciones frontend dentro de un ecosistema de alto tráfico, con foco en la integración eficiente de datos, la estabilidad de las funcionalidades y la calidad de código.",

      challenge:
        "Gestionar flujos de datos complejos y asegurar una comunicación fluida entre frontend y backend, incorporando validaciones, manejo de errores y soluciones que permitieran mantener la estabilidad de funcionalidades críticas.",

      work: [
        "Integración de APIs REST.",
        "Gestión de flujos de datos complejos.",
        "Implementación de validaciones y manejo de errores.",
        "Participación en soluciones basadas en arquitectura BFF.",
        "Desarrollo y mantenimiento de tests automatizados.",
      ],

      impact: [
        "Mayor estabilidad en funcionalidades críticas.",
        "Consumo de datos desde APIs más eficiente.",
        "Experiencia de usuario más fluida.",
        "Mayor confiabilidad en los despliegues mediante testing automatizado.",
      ],
    },
  },

  {
    id: 2,
    company: "EULAS",
    period: "2020 — 2021",
    title: "UI Engineering & Responsive Solutions",
    description:
      "Desarrollo de interfaces reutilizables, consistentes y adaptables a distintos dispositivos.",

    technologies: ["React", "AngularJS", "Responsive", "APIs"],
  },

  {
    id: 3,
    company: "Imprimoya",
    period: "2021",
    title: "Client-Facing Frontend Delivery",
    description:
      "Desarrollo frontend end-to-end para una plataforma de impresión online.",

    technologies: ["AngularJS", "APIs", "UX"],
  },
]
