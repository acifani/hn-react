import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Feed } from 'semantic-ui-react'
import cfg from '../../config'

export type News = {
  title: string
  time_ago: string
  comments_count: number
  points: number
  id: number
  user: string
  domain: string
  url: string
}

type Props = {
  news: News
}

class NewsListRow extends Component<Props> {
  public getUrl = (news: News) =>
    news.url.startsWith('http')
      ? news.url
      : `${cfg.hnBaseUrl}item?id=${news.id}`

  public render() {
    const n = this.props.news

    return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <a href={this.getUrl(n)}>{n.title}</a>
            <Feed.Date>{n.time_ago}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like icon="like" content={n.points} />
            <Feed.Like
              icon="comments"
              content={n.comments_count}
              as={Link}
              to={`/comments/${n.id}`}
            />
            <Feed.Like
              href={`${cfg.hnBaseUrl}user?id=${n.user}`}
              icon="user"
              content={n.user}
            />
            {n.domain && (
              <Feed.Like
                href={`http://${n.domain}`}
                icon="world"
                content={n.domain}
              />
            )}
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    )
  }
}

export default NewsListRow
