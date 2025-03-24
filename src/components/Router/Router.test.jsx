import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Router } from '@components/Router/Router'
import { Route } from '@components/Route'
import { getCurrentPath } from '@utils/getCurrentPath'
import Error404 from '@pages/Error404'
import Home from '@pages/Home'
import About from '@pages/About'
import Search from '@pages/Search'
import { ERROR404, ABOUT, NAVIGATE, SEARCH, HOME } from '@utils/consts'
import { Link } from '@components/Link'

vi.mock('@utils/getCurrentPath.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {

  beforeEach(() => {
    cleanup()
  })

  it('should render', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(
      <Router routes={[]} defaultComponent={Error404} />
    )
    expect(screen.getByText(ERROR404)).toBeTruthy
  })

  it('should render matching routes', () => {
    getCurrentPath.mockReturnValue(ABOUT.ROUTE)
    const routes = [
      {
        path: HOME.ROUTE,
        Component: Home
      },
      {
        path: ABOUT.ROUTE,
        Component: About
      }
    ]

    render(
      <Router routes={routes} />
    )
    expect(screen.getByText(ABOUT.TITLE)).toBeTruthy()
  })

  it('should change routes', () => {
    getCurrentPath.mockReturnValue(HOME.ROUTE)

    render(
      <Router>
        <Route path={HOME.ROUTE} Component={Home} />
        <Route path={ABOUT.ROUTE} Component={About} />
      </Router>
    )
    screen.getByText(NAVIGATE.GOTO_ABOUT).click()

    expect(screen.findByText(ABOUT.TITLE)).toBeTruthy()
  })

  it('should support dynamic parameters', () => {
    getCurrentPath.mockReturnValue('/search/anything')

    render(
      <Router>
        <Route path={SEARCH.ROUTE_PARAMETERS} Component={Search} />
      </Router>
    )
    expect(screen.getByText(SEARCH.SEARCH + 'anything')).toBeTruthy()
  })

  it('should have prop target = _blank', () => {
    getCurrentPath.mockReturnValue(HOME.ROUTE)

    const routes = [
      {
        path: HOME.ROUTE,
        Component: () => (
          <div>
            <Link to={ABOUT.ROUTE} target='_blank'>{NAVIGATE.GOTO_ABOUT}</Link>
          </div>
        )
      }
    ]

    render(
      <Router routes={routes} />
    )
    const link = screen.getByText(NAVIGATE.GOTO_ABOUT)
    expect(link).toHaveProperty('target', '_blank')
  })
})