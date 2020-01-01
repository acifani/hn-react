import React from 'react'
import { Feed } from 'semantic-ui-react'
import NewsListRow from './NewsListRow'

type Props = {
  resource: any
}

const NewsList: React.FC<Props> = ({ resource }) => {
  const data = resource.read()
  const news = data.map((p: any) => <NewsListRow news={p} key={p.id} />)

  return <Feed size="large">{news}</Feed>
}

export default NewsList
