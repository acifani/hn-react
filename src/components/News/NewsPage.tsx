import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Button, Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import NewsList from './NewsList'
import { News } from './NewsListRow'

type Props = {
  page?: string
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
    const page = parseInt(props.match.params.page || '1', 10)
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
    const page = this.state.page
    const prevLink = page > 1 ? `/news/${page - 1}` : '/'
    const nextLink = page ? `/news/${page + 1}` : '/news/2'

    return (
      <div>
        <Dimmer active={this.state.loading}>
          <Loader>Fetching posts</Loader>
        </Dimmer>

        <Message error={true} hidden={!this.state.error}>
          Error while fetching posts: {this.state.error}
        </Message>

        <NewsList news={this.state.news} />

        <Button.Group attached="bottom" basic={true}>
          <Button
            size="small"
            content="Prev"
            disabled={page < 2}
            as="a"
            href={prevLink}
          />

          <Button size="small" content="Next" as="a" href={nextLink} />
        </Button.Group>
      </div>
    )
  }
}

export default NewsPage
