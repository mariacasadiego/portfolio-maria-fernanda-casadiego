import { ArrowUpRight } from "lucide-react"

import type { Project } from "../../../data/projects"

import "./ProjectCard.css"

interface ProjectCardProps {
  project: Project
  onOpen?: (project: Project) => void
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasCaseStudy = Boolean(project.caseStudy)

  return (
    <article className="project-card">
      <div>
        <p className="project-card__company">{project.company}</p>
        <p className="project-card__period">{project.period}</p>
      </div>

      <div>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description}</p>
      </div>

      <div className="project-card__technologies">
        {project.technologies.map((technology) => (
          <span key={technology}>{technology}</span>
        ))}
      </div>

      {hasCaseStudy && (
        <button
          type="button"
          onClick={() => onOpen?.(project)}
          aria-label={`Ver caso de estudio de ${project.company}`}
          className="project-card__button"
        >
          <ArrowUpRight size={18} />
        </button>
      )}
    </article>
  )
}
