import React from 'react'
import { Feed } from 'semantic-ui-react'
import NewsListRow from './NewsListRow'
import { newspageResource } from '../../api'

type Props = {
  page: number
  list: string
}

const NewsList: React.FC<Props> = ({ list, page }) => {
  const data = newspageResource.read({ list, page })
  const news = data.map((p: any) => <NewsListRow news={p} key={p.id} />)

  return <Feed size="large">{news}</Feed>
}

export default NewsList
