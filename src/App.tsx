import { Navbar } from "./components/layout/Navbar/Navbar"
import { Footer } from "./components/layout/Footer/Footer"

import { AnimatedBackground } from "./components/ui/AnimatedBackground/AnimatedBackground"

import { Hero } from "./components/sections/Hero/Hero"
import { TechBar } from "./components/sections/TechBar/TechBar"
import { About } from "./components/sections/About/About"
import { Work } from "./components/sections/Work/Work"
import { Experience } from "./components/sections/Experience/Experience"
import { Stack } from "./components/sections/Stack/Stack"
import { Contact } from "./components/sections/Contact/Contact"

function App() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />

      <main>
        <Hero />
        <TechBar />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
