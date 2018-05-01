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
        <Container>
          <Header as="h1">Hacker News</Header>
          <Feed>{posts}</Feed>
        </Container>
      </div>
    )
  }
}

export default App
