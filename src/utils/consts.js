export const EVENTS = {
  PUSHSTATE: 'pushstate',
  POPSTATE: 'popstate'
}

export const CHILDREN_TO_SEARCH = 'Route'

export const TARGET = '_self'

export const NAVIGATE = {
  GOTO_HOME: 'Go to Home',
  GOTO_ABOUT: 'Go to About',
  GOTO_SEARCH: 'Go to Search'
}

export const ERROR404 = 'Error 404'

export const HOME = {
  TITLE: 'Home',
  BODY: 'This is a React Router clone. It is not intended to replace the original one. It was created just for learning purposes',
  ROUTE: '/'
}

export const ABOUT = {
  TITLE: 'About',
  ABOUT_ME: 'I\'m a junior developer. Feel free to check my GitHub and LinkedIn.',
  ROUTE: '/about'
}

export const SEARCH = {
  TITLE: 'Search',
  BODY: 'This page is designed to test dynamic parameters.',
  SEARCH: 'You have searched for: ',
  NO_SEARCH1: 'Try adding ',
  NO_SEARCH2: '/something',
  NO_SEARCH3: ' to the URL.',
  ROUTE: '/search',
  ROUTE_PARAMETERS: '/search/:query'
}