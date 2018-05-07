import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { PostList } from './PostList'

const App = () => (
  <div className="App">
    <Container text={true}>
      <Header as="h1">Hacker News</Header>
      <PostList />
    </Container>
  </div>
)

export default App
