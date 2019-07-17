import React, { useEffect, useState } from 'react'
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

const NewsPage: React.SFC<Props> = props => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState<News[]>([])
  const page = parseInt(props.match.params.page || '1', 10)

  useEffect(() => {
    const fetchNewspage = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${cfg.apiBaseUrl}news?page=${page}`)
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setLoading(false)
        setError(undefined)
        setNews(data)
      } catch (error) {
        setLoading(false)
        setError(error.message)
        setNews([])
      }
    }

    fetchNewspage()
  }, [page])

  const prevLink = page > 1 ? `/news/${page - 1}` : '/'
  const nextLink = page ? `/news/${page + 1}` : '/news/2'

  return (
    <div>
      <Dimmer active={loading}>
        <Loader>Fetching posts</Loader>
      </Dimmer>

      <Message error={true} hidden={!error}>
        Error while fetching posts: {error}
      </Message>

      <NewsList news={news} />

      <Button.Group attached="bottom" basic={true} size="small">
        <Button content="Prev" as={Link} to={prevLink} disabled={page < 2} />
        <Button content="Next" as={Link} to={nextLink} disabled={page > 9} />
      </Button.Group>
    </div>
  )
}

export default NewsPage
