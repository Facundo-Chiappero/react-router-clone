import { EVENTS } from "@utils/consts"

export function navigate(href) {
  window.history.pushState({}, '', href)

  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}