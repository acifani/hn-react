import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter, Route } from 'react-router'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <MemoryRouter>
      <Route component={App} />
    </MemoryRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
