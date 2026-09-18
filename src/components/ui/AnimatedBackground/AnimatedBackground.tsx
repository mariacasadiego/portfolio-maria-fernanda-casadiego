import "./AnimatedBackground.css"

export function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <div className="animated-bg__blob animated-bg__blob--one" />
      <div className="animated-bg__blob animated-bg__blob--two" />
      <div className="animated-bg__blob animated-bg__blob--three" />

      <div className="animated-bg__orbit animated-bg__orbit--one" />
      <div className="animated-bg__orbit animated-bg__orbit--two" />

      <div className="animated-bg__pill animated-bg__pill--one" />
      <div className="animated-bg__pill animated-bg__pill--two" />

      <div className="animated-bg__square animated-bg__square--one" />
      <div className="animated-bg__square animated-bg__square--two" />

      <span className="animated-bg__code animated-bg__code--one">{"</>"}</span>

      <span className="animated-bg__code animated-bg__code--two">{"{ }"}</span>

      <span className="animated-bg__code animated-bg__code--three">{"()"}</span>

      <span className="animated-bg__spark animated-bg__spark--one">✦</span>

      <span className="animated-bg__spark animated-bg__spark--two">✦</span>

      <span className="animated-bg__spark animated-bg__spark--three">+</span>

      <span className="animated-bg__dot animated-bg__dot--one" />
      <span className="animated-bg__dot animated-bg__dot--two" />
      <span className="animated-bg__dot animated-bg__dot--three" />

      <div className="animated-bg__traveler" />
    </div>
  )
}
