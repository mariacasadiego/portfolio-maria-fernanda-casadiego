import "./TechBar.css"

const technologies = ["React", "JavaScript", "TypeScript", "REST APIs", "Testing", "UX"]

export function TechBar() {
  return (
    <div className="tech-bar">
      <div className="tech-bar__content">
        {technologies.map((technology, index) => (
          <div key={technology} className="tech-bar__item">
            <span>{technology}</span>

            {index !== technologies.length - 1 && (
              <span className="tech-bar__separator">✦</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
