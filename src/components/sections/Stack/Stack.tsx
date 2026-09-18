import { skillGroups } from "../../../data/skills"

import { Container } from "../../layout/Container/Container"
import { Reveal } from "../../ui/Reveal/Reveal"

import "./Stack.css"

export function Stack() {
  return (
    <section id="stack" className="stack">
      <Container>
        <Reveal>
          <div className="stack__header">
            <div>
              <span className="stack__eyebrow">04 / Habilidades</span>

              <h2>Tecnología, experiencia y forma de trabajar.</h2>
            </div>

            <p>
              Tecnologías, herramientas y metodologías que forman parte de mi
              experiencia construyendo productos digitales.
            </p>
          </div>
        </Reveal>

        <div className="stack__grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.08}>
              <article className="stack__group">
                <span className="stack__number">
                  {String(group.id).padStart(2, "0")}
                </span>

                <h3>{group.title}</h3>

                <p className="stack__description">{group.description}</p>

                <div className="stack__skills">
                  {group.skills.map((skill) => (
                    <div key={skill} className="stack__skill">
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}