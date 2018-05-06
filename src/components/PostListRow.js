import React, { Component } from 'react'
import { Feed, Icon } from 'semantic-ui-react'
import cfg from '../config'

class PostListRow extends Component {
  getUrl = post =>
    post.url.startsWith('http')
      ? post.url
      : `${cfg.hnBaseUrl}item?id=${post.id}`

  render() {
    const p = this.props.post

    return (
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <a href={this.getUrl(p)}>{p.title}</a>
            <Feed.Date>{p.time_ago}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="like" /> {p.points}
            </Feed.Like>
            <Feed.Like>
              <a href={`${cfg.hnBaseUrl}item?id=${p.id}`}>
                <Icon name="comments" /> {p.comments_count}
              </a>
            </Feed.Like>
            <Feed.Like>
              <a href={`${cfg.hnBaseUrl}user?id=${p.user}`}>
                <Icon name="user" /> {p.user}
              </a>
            </Feed.Like>
            {p.domain && (
              <Feed.Like>
                <a href={`http://${p.domain}`}>
                  <Icon name="world" /> {p.domain}
                </a>
              </Feed.Like>
            )}
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    )
  }
}

export default PostListRow
