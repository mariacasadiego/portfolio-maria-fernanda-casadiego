import { ArrowDown, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

import { Container } from "../../layout/Container/Container"

import "./Hero.css"

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <Container>
        <div className="hero__grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="hero__eyebrow">
              <span className="hero__eyebrow-dot" />

              <p>Frontend Engineer · Buenos Aires</p>
            </div>

            <h1 className="hero__title">
              Creo experiencias{" "}
              <span className="hero__highlight">
                digitales
                <span className="hero__highlight-line" />
              </span>
              <span className="hero__title-secondary">que se sienten simples.</span>
            </h1>
          </motion.div>

          <motion.div
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <p className="hero__description">
              Desarrolladora Frontend con más de 5 años de experiencia construyendo
              interfaces escalables con React y JavaScript, enfocada en performance,
              experiencia de usuario y calidad de código.
            </p>

            <div className="hero__actions">
              <a href="#trabajo" className="hero__button hero__button--primary">
                Ver mi trabajo
                <span className="hero__button-icon">
                  <ArrowDown size={13} />
                </span>
              </a>

              <a
                href="/cv-maria-fernanda-casadiego.pdf"
                download="CV-Maria-Fernanda-Casadiego.pdf"
                className="hero__button hero__button--secondary"
              >
                Descargar CV
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
