import { ArrowUpRight, Download, Link, Mail, MapPin, Phone } from "lucide-react"

import { Container } from "../../layout/Container/Container"
import { Reveal } from "../../ui/Reveal/Reveal"

import "./Contact.css"

export function Contact() {
  return (
    <section id="contacto" className="contact">
      <Container>
        <Reveal>
          <div className="contact__box">
            <span className="contact__spark" aria-hidden="true">
              ✦
            </span>

            <div className="contact__top">
              <div className="contact__heading">
                <span className="contact__eyebrow">05 / Contacto</span>

                <h2 className="contact__title">
                  <span className="contact__title-main">¿Construimos algo</span>

                  <span className="contact__title-accent">juntos?</span>
                </h2>
              </div>

              <p className="contact__description">
                Estoy abierta a nuevas oportunidades donde pueda aportar mi experiencia en
                frontend, seguir aprendiendo y participar en la construcción de productos
                digitales de calidad.
              </p>
            </div>


            <div className="contact__actions">
              <a href="mailto:marifercasadiego@gmail.com" className="contact__main-link">
                <div className="contact__main-icon">
                  <Mail size={20} />
                </div>

                <div className="contact__main-content">
                  <span className="contact__link-label">Escríbeme</span>

                  <span className="contact__email">marifercasadiego@gmail.com</span>
                </div>

                <ArrowUpRight className="contact__arrow" size={24} />
              </a>


              <div className="contact__info">
                <a
                  href="tel:+54TU_NUMERO"
                  className="contact__info-item contact__info-item--clickable"
                >
                  <span className="contact__info-icon">
                    <Phone size={18} />
                  </span>

                  <span className="contact__info-text">
                    <span className="contact__info-label">Teléfono</span>

                    <span className="contact__info-value">+54 9 11-6959-1123</span>
                  </span>

                  <ArrowUpRight className="contact__info-arrow" size={17} />
                </a>

                <div className="contact__info-item">
                  <span className="contact__info-icon">
                    <MapPin size={18} />
                  </span>

                  <span className="contact__info-text">
                    <span className="contact__info-label">Ubicación</span>

                    <span className="contact__info-value">Villa Crespo, CABA</span>
                  </span>
                </div>
              </div>


              <div className="contact__secondary-actions">
                <a
                  href="https://www.linkedin.com/in/maria-fernanda-casadiego-1490591b2/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact__secondary-link"
                >
                  <span>
                    <Link size={18} />
                    LinkedIn
                  </span>

                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="/cv-maria-fernanda-casadiego.pdf"
                  download="CV-Maria-Fernanda-Casadiego.pdf"
                  className="contact__secondary-link"
                >
                  <span>
                    <Download size={18} />
                    Descargar CV
                  </span>

                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
