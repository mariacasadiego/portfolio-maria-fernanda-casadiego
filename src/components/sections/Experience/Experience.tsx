import { experience } from "../../../data/experience"

import { Container } from "../../layout/Container/Container"
import { Reveal } from "../../ui/Reveal/Reveal"

import "./Experience.css"

export function Experience() {
  return (
    <section id="experiencia" className="experience">
      <Container>
        <Reveal>
          <div className="experience__header">
            <div className="experience__heading">
              <span className="experience__eyebrow">03 / Experiencia</span>
              <h2 className="experience__title">Mi recorrido profesional.</h2>
            </div>
            <p className="experience__intro">
              Más de cinco años desarrollando productos digitales, principalmente con
              React y JavaScript, trabajando en aplicaciones de alto impacto y colaborando
              con equipos multidisciplinarios.
            </p>
          </div>
        </Reveal>

        <div className="experience__list">
          {experience.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.08}>
              <article className="experience__item">
                <div className="experience__period">{item.period}</div>

                <div className="experience__position">
                  <h3 className="experience__company">{item.company}</h3>
                  <p className="experience__role">{item.role}</p>
                </div>

                <div className="experience__content">
                  <p className="experience__description">{item.description}</p>
                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="experience__highlights">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <li key={`${item.id}-${highlightIndex}`}>
                          <span className="experience__dash">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="experience__technologies">
                      {item.technologies.map((technology) => (
                        <span key={technology} className="experience__technology">
                          {technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
