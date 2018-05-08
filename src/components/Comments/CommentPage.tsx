import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import CommentList from './CommentList'
import { Comment as CommentType } from './CommentListRow'

type Props = {
  id: number
}

type State = {
  error?: string
  loading: boolean
  comments: CommentType[]
}

class CommentPage extends Component<RouteComponentProps<Props>, State> {
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
    return (
      <div>
        <Message error={true} hidden={!this.state.error}>
          Error while fetching comments: {this.state.error}
        </Message>
        <CommentList comments={this.state.comments} />
        <Dimmer active={this.state.loading}>
          <Loader>Fetching comments</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default CommentPage
