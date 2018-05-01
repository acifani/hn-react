import React, { Component } from 'react'
import { Container, Header, Feed, Icon } from 'semantic-ui-react'
import cfg from './config'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.fetchFrontpage()
  }

  fetchFrontpage = async () => {
    try {
      const response = await fetch(cfg.apiBaseUrl + 'news')
      const data = await response.json()
      this.setState({ posts: data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const posts = this.state.posts.map(p => (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            {p.title} <Feed.Date>{p.time_ago}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" /> {p.points}
            </Feed.Like>
            <Feed.Like>
              <Icon name="comments" /> {p.comments_count}
            </Feed.Like>
            <Feed.Like>
              <Icon name="user" /> {p.user}
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    ))

    return (
      <div className="App">
        <Container>
          <Header as="h1">Hacker News</Header>
          <Feed>{posts}</Feed>
        </Container>
      </div>
    )
  }
}

export default App
