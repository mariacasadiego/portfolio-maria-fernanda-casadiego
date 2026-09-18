import { ArrowUp } from "lucide-react"

import { Container } from "../Container/Container"

import "./Footer.css"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo" aria-label="Volver al inicio">
              MF<span>.</span>
            </a>
            <p>Frontend Engineer · Buenos Aires</p>
          </div>
          <div className="footer__right">
            <p>© {currentYear} María Fernanda Casadiego</p>
            <a href="#inicio" className="footer__top" aria-label="Volver arriba">
              <span>Volver arriba</span>
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
