import { Link } from "@components/Link"
import { ABOUT, HOME, NAVIGATE, SEARCH } from "@utils/consts"

export default function Home() {
  return (
    <div>
      <h1>{HOME.TITLE}</h1>
      <p>{HOME.BODY}</p>
      <div>
        <Link to={ABOUT.ROUTE}>{NAVIGATE.GOTO_ABOUT}</Link>
        <Link to={SEARCH.ROUTE}>{NAVIGATE.GOTO_SEARCH}</Link>
      </div>
    </div>
  )
}