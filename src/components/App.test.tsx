import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter, Route } from 'react-router'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  // @ts-ignore
  ReactDOM.createRoot(div).render(
    <MemoryRouter>
      <Route component={App} />
    </MemoryRouter>
  )
})
