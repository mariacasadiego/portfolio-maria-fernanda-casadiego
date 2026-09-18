import { useState } from "react"

import { projects, type Project } from "../../../data/projects"

import { Container } from "../../layout/Container/Container"
import { ProjectCard } from "../../ui/ProjectCard/ProjectCard"
import { CaseStudy } from "../../ui/CaseStudy/CaseStudy"
import { Reveal } from "../../ui/Reveal/Reveal"

import "./Work.css"

export function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  function handleOpenProject(project: Project) {
    setSelectedProject(project)
  }

  function handleCloseProject() {
    setSelectedProject(null)
  }

  return (
    <section id="trabajo" className="work">
      <Container>
        <Reveal>
          <div className="work__header">
            <div>
              <span className="work__eyebrow">02 / Trabajo destacado</span>
              <h2>Experiencias que generaron impacto.</h2>
            </div>
            <p>
              Una selección de experiencias profesionales enfocadas en escalabilidad,
              experiencia de usuario, integración y confiabilidad.
            </p>
          </div>
        </Reveal>

        <div className="work__projects">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} onOpen={handleOpenProject} />
            </Reveal>
          ))}
        </div>
      </Container>
      <CaseStudy project={selectedProject} onClose={handleCloseProject} />
    </section>
  )
}
