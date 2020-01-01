import React from 'react'
import { Icon, Item, List } from 'semantic-ui-react'
import { DomainLink, NewsLink, UserLink } from '../Utils'

type Props = {
  resource: any
}

const CommentNewsHeader: React.FC<Props> = ({ resource }) => {
  const news = resource.read()

  return (
    <Item.Group>
      <Item>
        <Item.Content>
          <Item.Header content={<NewsLink news={news} />} />
          <Item.Description>
            <div dangerouslySetInnerHTML={{ __html: news.content || '' }} />
          </Item.Description>
          <Item.Extra>
            <List horizontal={true} verticalAlign="middle">
              <List.Item>
                <Icon name="time" /> {news.time_ago}
              </List.Item>
              <List.Item>
                <Icon name="heart" /> {news.points}
              </List.Item>
              <List.Item>
                <Icon name="user" /> {<UserLink user={news.user} />}
              </List.Item>
              {news.domain && (
                <List.Item>
                  <Icon name="world" />
                  {<DomainLink domain={news.domain} />}
                </List.Item>
              )}
            </List>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  )
}

export default CommentNewsHeader
