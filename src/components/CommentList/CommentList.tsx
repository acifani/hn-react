import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Comment, Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import CommentListRow, { Comment as CommentType } from './CommentListRow'

type Props = {
  id: number
}

type State = {
  error?: string
  loading: boolean
  comments: CommentType[]
}

class CommentList extends Component<RouteComponentProps<Props>, State> {
  constructor(props: RouteComponentProps<Props>) {
    super(props)
    this.state = { loading: false, comments: [] }
  }

  public componentDidMount() {
    this.fetchComments()
  }

  public fetchComments = async () => {
    try {
      this.setState({ ...this.state, loading: true })
      const response = await fetch(
        `${cfg.apiBaseUrl}item/${this.props.match.params.id}`
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      this.setState({
        comments: data.comments,
        error: undefined,
        loading: false
      })
    } catch (error) {
      this.setState({ comments: [], loading: false, error: error.message })
    }
  }

  public render() {
    const comments = this.state.comments.map(c => (
      <CommentListRow key={c.id} comment={c} />
    ))

    return (
      <div>
        <Message error={true} hidden={!this.state.error}>
          Error while fetching comments: {this.state.error}
        </Message>
        <Comment.Group size="large">{comments}</Comment.Group>
        <Dimmer active={this.state.loading}>
          <Loader>Fetching comments</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default CommentList
