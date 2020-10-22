import * as React from 'react'
// @ts-ignore
import { createRoot, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Route } from 'react-router'
import App from './App'

let container: any = null
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  act(() => {
    createRoot(div).render(
      <MemoryRouter>
        <Route element={<App />} />
      </MemoryRouter>
    )
  })
})
