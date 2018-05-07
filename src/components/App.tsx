import React from 'react'
import { Route, Switch } from 'react-router'
import { Container, Header } from 'semantic-ui-react'
import { PostList } from './PostList'

const App = () => (
  <div className="App">
    <Container text={true}>
      <Header as="h1">Hacker News</Header>

      <Switch>
        <Route path="/" exact={true} component={PostList} />
        <Route path="/news/:page?" component={PostList} />
      </Switch>
    </Container>
  </div>
)

export default App
