import React, { useEffect, useState } from 'react'
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

const CommentPage: React.SFC<Props> = props => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [comments, setComments] = useState<CommentType[]>([])
  const [news, setNews] = useState<News>({} as News)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `${cfg.apiBaseUrl}item/${props.match.params.id}`
        )
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setLoading(false)
        setError(undefined)
        setComments(data.comments)
        setNews({
          content: data.content,
          domain: data.domain,
          id: data.id,
          points: data.points,
          time_ago: data.time_ago,
          title: data.title,
          url: data.url,
          user: data.user
        })
      } catch (error) {
        setComments([])
        setLoading(false)
        setError(error.message)
      }
    }

    fetchComments()
  }, [])

  return (
    <div>
      <Dimmer active={loading}>
        <Loader>Fetching comments</Loader>
      </Dimmer>

      <Message error={true} hidden={!error}>
        Error while fetching comments: {error}
      </Message>

      <CommentNewsHeader news={news} />
      <CommentList comments={comments} />
    </div>
  )
}

export default CommentPage
