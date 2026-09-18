import { useEffect, type ReactNode } from "react"

import { X, ArrowUpRight } from "lucide-react"

import { AnimatePresence, motion } from "motion/react"

import type { Project } from "../../../data/projects"

import { useLockBodyScroll } from "../../../hooks/useLockBodyScroll"

import "./CaseStudy.css"

interface CaseStudyProps {
  project: Project | null
  onClose: () => void
}

export function CaseStudy({ project, onClose }: CaseStudyProps) {
  const isOpen = Boolean(project)

  useLockBodyScroll(isOpen)

  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {project && project.caseStudy && (
        <>
          <motion.div
            className="case-study__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="case-study"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
          >
            <div className="case-study__header">
              <div>
                <span className="case-study__eyebrow">Caso de estudio</span>
                <h2 id="case-study-title">{project.company}</h2>
                <p>{project.period}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar caso de estudio"
                className="case-study__close"
              >
                <X size={19} />
              </button>
            </div>

            <div className="case-study__project">
              <p>Proyecto</p>
              <h3>{project.title}</h3>
              <div className="case-study__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <CaseSection number="01" title="Contexto">
              <p>{project.caseStudy.context}</p>
            </CaseSection>

            <CaseSection number="02" title="El desafío">
              <p>{project.caseStudy.challenge}</p>
            </CaseSection>

            <CaseSection number="03" title="Mi trabajo">
              <ul className="case-study__list">
                {project.caseStudy.work.map((item) => (
                  <li key={item}>
                    <ArrowUpRight size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CaseSection>

            <CaseSection number="04" title="Impacto">
              <div className="case-study__impact">
                {project.caseStudy.impact.map((item) => (
                  <div key={item} className="case-study__impact-card">
                    <span>✦</span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </CaseSection>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

interface CaseSectionProps {
  number: string
  title: string
  children: ReactNode
}

function CaseSection({ number, title, children }: CaseSectionProps) {
  return (
    <section className="case-study__section">
      <div className="case-study__section-title">
        <span>{number}</span>
        <h4>{title}</h4>
      </div>

      <div className="case-study__section-content">{children}</div>
    </section>
  )
}
