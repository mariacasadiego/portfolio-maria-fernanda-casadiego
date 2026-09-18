import { Moon, Sun } from "lucide-react"
import { motion } from "motion/react"

import { Container } from "../Container/Container"
import { useTheme } from "../../../hooks/usethemes"

import "./Navbar.css"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="navbar">
      <Container>
        <nav className="navbar__content">
          <a href="#inicio" className="navbar__logo" aria-label="Ir al inicio">
            MF<span>.</span>
          </a>

          <div className="navbar__right">
            <div className="navbar__links">
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#trabajo">Trabajo</a>
              <a href="#experiencia">Experiencia</a>
              <a href="#stack">Stack</a>
              <a href="#contacto">Contacto</a>
            </div>

            <motion.button
              type="button"
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="navbar__theme"
              aria-label={
                theme === "light" ? "Activar modo oscuro" : "Activar modo claro"
              }
            >
              {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
            </motion.button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
