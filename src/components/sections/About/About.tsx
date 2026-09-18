import { Container } from "../../layout/Container/Container"
import { Reveal } from "../../ui/Reveal/Reveal"

import "./About.css"

export function About() {
  return (
    <section
      id="sobre-mi"
      className="about"
    >
      <Container>
        <div className="about__wrapper">
          <Reveal>
            <div className="about__header">
              <span className="about__eyebrow">
                01 / Sobre mí
              </span>

              <h2 className="about__title">
                Desarrolladora Frontend con <span className="about__title-accent"> propósito.</span>
              </h2>
            </div>
          </Reveal>

          <div className="about__body">
            <Reveal delay={0.08}>
              <div className="about__intro">
                <p>
                  Soy María Fernanda, desarrolladora frontend y una persona
                  curiosa, detallista y con muchas ganas de seguir
                  aprendiendo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="about__content">
                <p>
                  Llegué al mundo de la tecnología porque siempre me
                  gustó entender cómo funcionan las cosas y encontrar
                  la manera de hacerlas un poquito mejor.
                </p>

                <p>
                  Con los años descubrí que lo que más disfruto de mi
                  trabajo no es solamente escribir código, sino
                  transformar una idea en algo real, útil y sencillo
                  para otra persona.
                </p>

                <p>
                  También aprendí que desarrollar va mucho más allá
                  del código: se trata de escuchar, compartir ideas,
                  adaptarse y construir en equipo, sin olvidarnos de
                  las personas que están del otro lado.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="about__statement">
              <div
                className="about__shape about__shape--circle"
                aria-hidden="true"
              />
              <div
                className="about__shape about__shape--pill"
                aria-hidden="true"
              />
              <span
                className="about__spark about__spark--one"
                aria-hidden="true"
              >
                ✦
              </span>
              <span
                className="about__spark about__spark--two"
                aria-hidden="true"
              >
                ✦
              </span>
              <blockquote>
                <span>No necesito saberlo todo,</span>
                <strong>
                  pero sí tener la curiosidad para encontrar el camino.
                </strong>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}