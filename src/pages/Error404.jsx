import { Link } from "@components/Link"
import { ERROR404, HOME, NAVIGATE } from "@utils/consts"

export default function Error404() {
  return (
    <div>
      <h1>{ERROR404}</h1>
      <Link to={HOME.ROUTE}>{NAVIGATE.GOTO_HOME}</Link>
    </div>
  )
}