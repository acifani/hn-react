import React from 'react'
import { Item, List } from 'semantic-ui-react'
import { News } from '../News/NewsListRow'
import DomainLink from '../Utils/DomainLink'
import UserLink from '../Utils/UserLink'

type Props = {
  news: News
}

const CommentNewsHeader: React.SFC<Props> = ({ news }) => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header as="a" href={news.url}>
          {news.title}
        </Item.Header>
        <Item.Description>
          <div dangerouslySetInnerHTML={{ __html: news.content || '' }} />
        </Item.Description>
        <Item.Extra>
          <List horizontal={true} verticalAlign="middle">
            <List.Item icon="time" content={news.time_ago} />
            <List.Item icon="heart" content={news.points} />
            <List.Item icon="user" content={<UserLink user={news.user} />} />
            <List.Item
              icon="world"
              content={<DomainLink domain={news.domain} />}
            />
          </List>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
)

export default CommentNewsHeader
