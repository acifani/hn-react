import React from 'react'
import { Link } from 'react-router-dom'
import { Feed } from 'semantic-ui-react'
import { DomainLink, NewsLink, UserLink } from '../Utils'

export type News = {
  title: string
  time_ago: string
  comments_count?: number
  content?: string
  points: number
  id: number
  user: string
  domain: string
  url: string
}

type Props = {
  news: News
}

const NewsListRow: React.FC<Props> = ({ news }) => (
  <Feed.Event>
    <Feed.Content>
      <Feed.Summary>
        <NewsLink news={news} />
        <Feed.Date>{news.time_ago}</Feed.Date>
      </Feed.Summary>
      <Feed.Meta>
        <Feed.Like icon="heart" content={news.points} />
        <Feed.Like
          icon="comments"
          content={news.comments_count}
          as={Link}
          to={`/comments/${news.id}`}
        />
        <Feed.Like icon="user" content={<UserLink user={news.user} />} />
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
