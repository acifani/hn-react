import React from 'react'
import { Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import './App.css'
import { CommentPage } from './Comments'
import { NewsPage } from './News'

const App = () => (
  <div>
    <Container text={true}>
      <Header as="h1" className="Header">
        <Link to="/"> Hacker News</Link>
      </Header>

      <Switch>
        <Route path="/" exact={true} component={NewsPage} />
        <Route path="/news/:page?" component={NewsPage} />
        <Route path="/comments/:id" component={CommentPage} />
      </Switch>
    </Container>
  </div>
)

export default App
