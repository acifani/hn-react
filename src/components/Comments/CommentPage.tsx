import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import { Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import { News } from '../News/NewsListRow'
import CommentList from './CommentList'
import { Comment as CommentType } from './CommentListRow'
import CommentNewsHeader from './CommentNewsHeader'

type UrlProps = {
  id?: string
}

type Props = RouteComponentProps<UrlProps>

type State = {
  error?: string
  loading: boolean
  comments: CommentType[]
  news: News
}

class CommentPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { loading: false, comments: [], news: {} as News }
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
        loading: false,
        news: {
          content: data.content,
          domain: data.domain,
          id: data.id,
          points: data.points,
          time_ago: data.time_ago,
          title: data.title,
          url: data.url,
          user: data.user
        }
      })
    } catch (error) {
      this.setState({ comments: [], loading: false, error: error.message })
    }
  }

  public render() {
    return (
      <div>
        <Dimmer active={this.state.loading}>
          <Loader>Fetching comments</Loader>
        </Dimmer>

        <Message error={true} hidden={!this.state.error}>
          Error while fetching comments: {this.state.error}
        </Message>

        <CommentNewsHeader news={this.state.news} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentPage
