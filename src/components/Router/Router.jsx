import { Children, useEffect, useState } from "react"
import { match } from 'path-to-regexp'
import { CHILDREN_TO_SEARCH, ERROR404, EVENTS } from "@utils/consts"
import { getCurrentPath } from "@utils/getCurrentPath"

function isRouteComponent(child) {
  // In production, component names will be minified (kind of shortened)
  // So we need a more reliable way to check, in this chase componentType
  return child.props.path && child.props.Component && child.type.componentType === CHILDREN_TO_SEARCH
}

export function Router({ children, routes = [], defaultComponent: DefaultComponent = () => (<h1>{ERROR404}</h1>) }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  let routeParams = {}

  const routesFromChildren = Children.toArray(children)
    .filter(isRouteComponent)
    .map((child) => child.props)

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {

    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}