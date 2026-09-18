import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    return prefersDark ? "dark" : "light"
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return {
    theme,
    toggleTheme,
  }
}
