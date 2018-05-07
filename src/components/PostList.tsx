import React, { Component } from 'react'
import { Dimmer, Feed, Loader, Message } from 'semantic-ui-react'
import cfg from '../config'
import PostListRow, { Post } from './PostListRow'

type State = {
  error?: string
  loading: boolean
  posts: Post[]
}

class PostList extends Component<{}, State> {
  constructor(props: {}) {
    super(props)
    this.state = { error: undefined, loading: false, posts: [] }
  }

  public componentDidMount() {
    this.fetchFrontpage()
  }

  public fetchFrontpage = async () => {
    try {
      this.setState({ ...this.state, loading: true })
      const response = await fetch(cfg.apiBaseUrl + 'news')
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      this.setState({ posts: data, loading: false, error: undefined })
    } catch (error) {
      this.setState({ posts: [], loading: false, error: error.message })
    }
  }

  public render() {
    const posts = this.state.posts.map(p => <PostListRow post={p} key={p.id} />)

    return (
      <div>
        <Message error={true} hidden={!this.state.error}>
          Error while fetching posts: {this.state.error}
        </Message>
        <Feed size="large">{posts}</Feed>
        <Dimmer active={this.state.loading}>
          <Loader>Fetching posts</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default PostList
