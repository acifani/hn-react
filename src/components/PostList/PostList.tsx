import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Dimmer, Feed, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import PostListRow, { Post } from './PostListRow'

type Props = {
  page?: number
}

type State = {
  error?: string
  loading: boolean
  posts: Post[]
  page: number
}

class PostList extends Component<RouteComponentProps<Props>, State> {
  constructor(props: RouteComponentProps<Props>) {
    super(props)
    const page = props.match.params.page || 1
    this.state = { error: undefined, loading: false, posts: [], page }
  }

  public componentDidMount() {
    this.fetchFrontpage()
  }

  public fetchFrontpage = async () => {
    try {
      this.setState({ ...this.state, loading: true })
      const response = await fetch(
        `${cfg.apiBaseUrl}news?page=${this.state.page}`
      )
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
