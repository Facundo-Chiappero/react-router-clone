import { TARGET } from "@utils/consts"
import { navigate } from "@utils/navigate"

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.buttons == 0
    const isModifiedEvent = e.metaKey || e.altKey || e.shiftKey || e.ctrlKey
    const isManageableEvent = target == undefined || target == TARGET

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      e.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} target={target} href={to} {...props} />
}