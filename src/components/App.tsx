import React from 'react'
import { Route, Switch } from 'react-router'
import { Container, Header } from 'semantic-ui-react'
import { CommentPage } from './Comments'
import { NewsPage } from './News'

const App = () => (
  <div className="App">
    <Container text={true}>
      <Header as="h1">Hacker News</Header>

      <Switch>
        <Route path="/" exact={true} component={NewsPage} />
        <Route path="/news/:page?" component={NewsPage} />
        <Route path="/comments/:id" component={CommentPage} />
      </Switch>
    </Container>
  </div>
)

export default App
