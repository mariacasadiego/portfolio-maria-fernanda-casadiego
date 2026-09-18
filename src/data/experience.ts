export interface Experience {
  id: number
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Mercado Libre / Mercado Pago",
    role: "Frontend Developer",
    period: "2021 — 2025",
    description:
      "Desarrollo y mantenimiento de aplicaciones web dentro del ecosistema de Mercado Libre y Mercado Pago, participando en múltiples productos y herramientas internas.",
    highlights: [
      "Desarrollé interfaces y nuevas funcionalidades utilizando React, JavaScript y el ecosistema frontend de Mercado Libre.",
      "Participé en la migración de experiencias nativas hacia WebView, implementando modales, CTAs, tracking y deeplinks.",
      "Desarrollé soluciones para carga y validación de imágenes, contemplando formato, peso, resolución y diferentes densidades.",
      "Integré componentes y experiencias de video para MPLAY, trabajando con renderizado SSR y client-side.",
      "Integré aplicaciones frontend con APIs REST y servicios internos mediante Node.js y BFFs.",
      "Implementé y mantuve tests automatizados con Jest y React Testing Library.",
      "Participé en migraciones y mantenimiento de aplicaciones utilizando TypeScript.",
      "Trabajé junto a equipos de Producto, UX/UI, Backend y otros equipos técnicos bajo metodologías ágiles.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Jest",
      "React Testing Library",
      "HTML",
      "CSS",
      "SASS",
    ],
  },

  {
    id: 2,
    company: "EULAS",
    role: "Frontend Developer",
    period: "2020 — 2021",
    description:
      "Participación en el desarrollo y mantenimiento de aplicaciones web, trabajando principalmente sobre interfaces y funcionalidades frontend.",
    highlights: [
      "Desarrollé y mantuve componentes e interfaces web.",
      "Trabajé con React y AngularJS en diferentes funcionalidades del producto.",
      "Implementé interfaces responsive utilizando HTML, CSS y JavaScript.",
      "Colaboré en la resolución de bugs y mejoras sobre funcionalidades existentes.",
    ],
    technologies: ["React", "AngularJS", "JavaScript", "HTML", "CSS"],
  },

  {
    id: 3,
    company: "Imprimoya",
    role: "Frontend Developer · Freelance",
    period: "Freelance",
    description:
      "Desarrollo frontend de soluciones web para el negocio, trabajando en la implementación visual y funcional de diferentes interfaces.",
    highlights: [
      "Desarrollé interfaces web adaptadas a las necesidades del proyecto.",
      "Implementé diseños responsive para distintos tamaños de pantalla.",
      "Trabajé en la construcción y mantenimiento de componentes frontend.",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
  },
]
