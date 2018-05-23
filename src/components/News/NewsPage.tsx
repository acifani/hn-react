import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import NewsList from './NewsList'
import { News } from './NewsListRow'

type UrlProps = {
  page?: string
}

type Props = RouteComponentProps<UrlProps>

type State = {
  error?: string
  loading: boolean
  news: News[]
}

class NewsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: undefined, loading: false, news: [] }
  }

  public async componentWillReceiveProps(nextProps: Props) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      await this.fetchNewspage(this.getPage(nextProps))
    }
  }

  public componentDidMount() {
    this.fetchNewspage(this.getPage(this.props))
  }

  public fetchNewspage = async (page: number) => {
    try {
      this.setState({ ...this.state, loading: true })
      const response = await fetch(`${cfg.apiBaseUrl}news?page=${page}`)
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      this.setState({ news: data, loading: false, error: undefined })
    } catch (error) {
      this.setState({ news: [], loading: false, error: error.message })
    }
  }

  public getPage = (props: Props) =>
    parseInt(props.match.params.page || '1', 10)

  public render() {
    const page = this.getPage(this.props)
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

        <Button.Group attached="bottom" basic={true} size="small">
          <Button content="Prev" as={Link} to={prevLink} disabled={page < 2} />
          <Button content="Next" as={Link} to={nextLink} disabled={page > 9} />
        </Button.Group>
      </div>
    )
  }
}

export default NewsPage
