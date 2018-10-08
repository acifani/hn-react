import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Divider, Header } from 'semantic-ui-react'
import './App.css'
import { Loading } from './Utils'

const LoadableNewsPage = Loadable({
  loader: () => import('./News'),
  loading: Loading
})

const LoadableCommentPage = Loadable({
  loader: () => import('./Comments'),
  loading: Loading
})

const LoadableUserPage = Loadable({
  loader: () => import('./User'),
  loading: Loading
})

const App = () => (
  <div>
    <Container text={true}>
      <Header as="h1" className="Header">
        <Link to="/"> Hacker News</Link>
      </Header>
    </Container>
    <Divider />
    <Container text={true}>
      <Switch>
        <Route path="/" exact={true} component={LoadableNewsPage} />
        <Route path="/news/:page?" component={LoadableNewsPage} />
        <Route path="/comments/:id" component={LoadableCommentPage} />
        <Route path="/user/:userId" component={LoadableUserPage} />
      </Switch>
    </Container>
    <Divider />
    <Container textAlign="center" className="Footer">
      <p>
        Made with ❤️ by <a href="https://cifani.me">Alessandro Cifani</a>.
        Source code available on{' '}
        <a href="https://github.com/acifani/yahnc">GitHub</a>.
      </p>
    </Container>
  </div>
)

export default App
