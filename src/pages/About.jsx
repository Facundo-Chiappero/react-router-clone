import { Link } from "@components/Link"
import { ABOUT, HOME, NAVIGATE, SEARCH } from "@utils/consts"

export default function About() {
  return (
    <div>
      <h1>{ABOUT.TITLE}</h1>
      <p>{ABOUT.ABOUT_ME}</p>
      <div>
        <Link to={HOME.ROUTE}>{NAVIGATE.GOTO_HOME}</Link>
        <Link to={SEARCH.ROUTE}>{NAVIGATE.GOTO_SEARCH}</Link>
      </div>
      <div>
        <a href="https://github.com/Facundo-Chiappero" target="_blank" className="github-link">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/facundo-andrés-chiappero" target="_blank" className="linkedin-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  )
}