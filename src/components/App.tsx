import * as React from 'react'
import { Route, Routes } from 'react-router'
import { Container, Divider } from 'semantic-ui-react'
import './App.css'
import TopMenu from './Menu'
import { Loading } from './Utils'

const LoadableNewsPage = React.lazy(() => import('./News'))
const LoadableCommentPage = React.lazy(() => import('./Comments'))
const LoadableUserPage = React.lazy(() => import('./User'))
const LoadableNotFoundPage = React.lazy(() => import('./Utils/NotFound'))

const App = () => (
  <>
    <TopMenu />
    <Container text style={{ marginTop: '1em' }} as="main">
      <React.Suspense fallback={<Loading />}>
        <Routes
          basename={
            process.env.NODE_ENV === 'production'
              ? process.env.PUBLIC_URL
              : undefined
          }
        >
          <Route path="/" element={<LoadableNewsPage />} />
          <Route path="/comments/:id" element={<LoadableCommentPage />} />
          <Route path="/user/:userId" element={<LoadableUserPage />} />
          <Route path="/:list/*" element={<LoadableNewsPage />}>
            <Route path="/" element={<LoadableNewsPage />} />
            <Route path="/:page" element={<LoadableNewsPage />} />
          </Route>
          <Route element={<LoadableNotFoundPage />} />
        </Routes>
      </React.Suspense>
    </Container>
    <Divider />
    <Container textAlign="center" className="Footer" as="footer">
      <p>
        Made with{' '}
        <span role="img" aria-label="Love">
          ❤️
        </span>{' '}
        by <a href="https://cifani.me">Alessandro Cifani</a>. Source code
        available on <a href="https://github.com/acifani/yahnc">GitHub</a>.
      </p>
    </Container>
  </>
)

export default App
