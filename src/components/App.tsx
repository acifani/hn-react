import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Divider, Header } from 'semantic-ui-react'
import './App.css'
import { CommentPage } from './Comments'
import { NewsPage } from './News'
import { UserPage } from './User'

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
        <Route path="/" exact={true} component={NewsPage} />
        <Route path="/news/:page?" component={NewsPage} />
        <Route path="/comments/:id" component={CommentPage} />
        <Route path="/user/:userId" component={UserPage} />
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
