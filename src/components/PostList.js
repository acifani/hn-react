import React, { Component } from 'react'
import { Dimmer, Feed, Loader, Message } from 'semantic-ui-react'
import PostListRow from './PostListRow'
import cfg from '../config'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      loading: false,
      error: null,
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

  render() {
    const posts = this.state.posts.map(p => <PostListRow post={p} />)

    return (
      <div>
        <Message error hidden={!this.state.error}>
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
