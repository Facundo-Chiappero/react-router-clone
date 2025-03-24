import { Link } from "@components/Link"
import { ABOUT, HOME, NAVIGATE, SEARCH } from "@utils/consts"

export default function Search({ routeParams }) {
  return (
    <div>
      <h1>{SEARCH.TITLE}</h1>
      <p>{SEARCH.BODY}</p>
      {
        routeParams.query
          ?
          <p>{SEARCH.SEARCH} {routeParams.query}</p>
          :
          <p>{SEARCH.NO_SEARCH1}<code>{SEARCH.NO_SEARCH2}</code>{SEARCH.NO_SEARCH3}</p>
      }
      <br />
      <div>
        <Link to={HOME.ROUTE}>{NAVIGATE.GOTO_HOME}</Link>
        <Link to={ABOUT.ROUTE}>{NAVIGATE.GOTO_ABOUT}</Link>
      </div>
    </div>
  )
}