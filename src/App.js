import React, { Component } from 'react'
import {
  Container,
  Dimmer,
  Feed,
  Header,
  Icon,
  Loader,
  Message
} from 'semantic-ui-react'
import cfg from './config'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      loading: false,
      error: null
    }
  }

  componentDidMount() {
    this.fetchFrontpage()
  }

  fetchFrontpage = async () => {
    try {
      this.setState({ ...this.state, loading: true })
      const response = await fetch(cfg.apiBaseUrl + 'news')
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      this.setState({ posts: data, loading: false, error: null })
    } catch (error) {
      this.setState({ posts: [], loading: false, error: error.message })
    }
  }

  getUrl = post =>
    post.url.startsWith('http')
      ? post.url
      : `${cfg.hnBaseUrl}item?id=${post.id}`

  render() {
    const posts = this.state.posts.map(p => (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <a href={this.getUrl(p)}>{p.title}</a>
            <Feed.Date>{p.time_ago}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" /> {p.points}
            </Feed.Like>
            <Feed.Like>
              <a href={`${cfg.hnBaseUrl}item?id=${p.id}`}>
                <Icon name="comments" /> {p.comments_count}
              </a>
            </Feed.Like>
            <Feed.Like>
              <a href={`${cfg.hnBaseUrl}user?id=${p.user}`}>
                <Icon name="user" /> {p.user}
              </a>
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    ))

    return (
      <div className="App">
        <Container text>
          <Header as="h1">Hacker News</Header>
          <Message error hidden={!this.state.error}>
            Error while fetching posts: {this.state.error}
          </Message>
          <Feed>{posts}</Feed>
          <Dimmer active={this.state.loading}>
            <Loader>Fetching posts</Loader>
          </Dimmer>
        </Container>
      </div>
    )
  }
}

export default App
