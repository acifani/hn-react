import * as React from 'react'
import { Route, Switch } from 'react-router'
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
        <Switch>
          <Route path="/" exact component={LoadableNewsPage} />
          <Route path="/comments/:id" component={LoadableCommentPage} />
          <Route path="/user/:userId" component={LoadableUserPage} />
          <Route
            path="/:list(news|newest|ask|show|jobs)/:page?"
            component={LoadableNewsPage}
          />
          <Route component={LoadableNotFoundPage} />
        </Switch>
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
