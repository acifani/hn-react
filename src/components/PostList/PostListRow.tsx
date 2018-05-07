import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Feed } from 'semantic-ui-react'
import cfg from '../../config'

export type Post = {
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
  post: Post
}

class PostListRow extends Component<Props> {
  public getUrl = (post: Post) =>
    post.url.startsWith('http')
      ? post.url
      : `${cfg.hnBaseUrl}item?id=${post.id}`

  public render() {
    const p = this.props.post

    return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <a href={this.getUrl(p)}>{p.title}</a>
            <Feed.Date>{p.time_ago}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like icon="like" content={p.points} />
            <Feed.Like
              icon="comments"
              content={<Link to={`/comments/${p.id}`}>{p.comments_count}</Link>}
            />
            <Feed.Like
              href={`${cfg.hnBaseUrl}user?id=${p.user}`}
              icon="user"
              content={p.user}
            />
            {p.domain && (
              <Feed.Like
                href={`http://${p.domain}`}
                icon="world"
                content={p.domain}
              />
            )}
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    )
  }
}

export default PostListRow
