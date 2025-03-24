import { Router } from "@components/Router/Router"
import { Route } from "@components/Route"
import { lazy, Suspense } from "react"
import { ABOUT, HOME, SEARCH } from "@utils/consts"

const LazyHome = lazy(() => import('@pages/Home'))
const LazyAbout = lazy(() => import('@pages/About'))
const LazySearch = lazy(() => import('@pages/Search'))
const LazyError404 = lazy(() => import('@pages/Error404'))

const routes = [
  {
    path: ABOUT.ROUTE,
    Component: LazyAbout
  }
]

function App() {
  return (
    <>
      <main>
        <Suspense fallback={<div className="loading"></div>}>
          <Router routes={routes} defaultComponent={LazyError404}>
            <Route path={HOME.ROUTE} Component={LazyHome} />
            <Route path={SEARCH.ROUTE} Component={LazySearch} />
            <Route path={SEARCH.ROUTE_PARAMETERS} Component={LazySearch} />
          </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App