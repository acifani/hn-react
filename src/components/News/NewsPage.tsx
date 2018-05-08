import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import NewsList from './NewsList'
import { News } from './NewsListRow'

type Props = {
  page?: number
}

type State = {
  error?: string
  loading: boolean
  news: News[]
  page: number
}

class NewsPage extends Component<RouteComponentProps<Props>, State> {
  constructor(props: RouteComponentProps<Props>) {
    super(props)
    const page = props.match.params.page || 1
    this.state = { error: undefined, loading: false, news: [], page }
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
      this.setState({ news: data, loading: false, error: undefined })
    } catch (error) {
      this.setState({ news: [], loading: false, error: error.message })
    }
  }

  public render() {
    return (
      <div>
        <Message error={true} hidden={!this.state.error}>
          Error while fetching posts: {this.state.error}
        </Message>
        <NewsList news={this.state.news} />
        <Dimmer active={this.state.loading}>
          <Loader>Fetching posts</Loader>
        </Dimmer>
      </div>
    )
  }
}

export default NewsPage
