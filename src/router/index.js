import Home from '../pages/Home'
import AppWrapper from '../pages/AppWrapper'

export const routes = [
  { path: '/', element: Home, exact: true },
  { path: '/todos', element: AppWrapper, type: 'Todos', exact: true },
  { path: '/notes', element: AppWrapper, type: 'Notes', exact: true },
]