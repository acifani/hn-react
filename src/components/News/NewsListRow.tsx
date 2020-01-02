import React from 'react'
import { Link } from 'react-router-dom'
import { Feed, Icon, Label } from 'semantic-ui-react'
import { DomainLink, NewsLink, UserLink } from '../Utils'

export type News = {
  comments_count: number
  content?: string
  domain: string
  id: number
  points: number | null
  time_ago: string
  title: string
  type: 'link' | 'ask' | 'job'
  url: string
  user: string | null
}

type Props = {
  news: News
}

const NewsListRow: React.FC<Props> = ({ news }) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        {news.type === 'ask' && (
          <Label color="orange" ribbon>
            ask
          </Label>
        )}
        {news.type === 'job' && (
          <Label color="green" ribbon>
            job
          </Label>
        )}
        <NewsLink news={news} />
        <Feed.Date>{news.time_ago}</Feed.Date>
      </Feed.Summary>
      <Feed.Meta>
        {news.points != null && <Icon name="like" />}
        {news.points}
        <Feed.Like
          icon="comments"
          content={news.comments_count}
          as={Link}
          to={`/comments/${news.id}`}
        />
        {news.user && (
          <Feed.Like icon="user" content={<UserLink user={news.user} />} />
        )}
        {news.domain && (
          <Feed.Like
            icon="world"
            content={<DomainLink domain={news.domain} />}
          />
        )}
      </Feed.Meta>
    </Feed.Content>
  </Feed.Event>
)

export default NewsListRow
