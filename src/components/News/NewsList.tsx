import React from 'react'
import { Feed } from 'semantic-ui-react'
import NewsListRow, { News } from './NewsListRow'

type Props = {
  news: News[]
}

const NewsList: React.FC<Props> = props => {
  const news = props.news.map(p => <NewsListRow news={p} key={p.id} />)

  return <Feed size="large">{news}</Feed>
}

export default NewsList
