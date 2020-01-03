import React from 'react'
import { Feed, Segment, Header, Icon, Button } from 'semantic-ui-react'
import NewsListRow from './NewsListRow'
import { newspageResource } from '../../api'
import { Link } from 'react-router-dom'

type Props = {
  page: number
  list: string
}

const NewsList: React.FC<Props> = ({ list, page }) => {
  const data = newspageResource.read({ list, page })
  const prevLink = page > 1 ? `/${list}/${page - 1}` : '/'
  const nextLink = `/${list}/${page + 1}`
  const news = data.map((p: any) => <NewsListRow news={p} key={p.id} />)

  return news.length ? (
    <>
      <Feed size="large">{news}</Feed>
      <Button.Group attached="bottom" basic={true} size="small">
        <Button content="Prev" as={Link} to={prevLink} disabled={page < 2} />
        <Button content="Next" as={Link} to={nextLink} disabled={page > 9} />
      </Button.Group>
    </>
  ) : (
    <EmptyList />
  )
}

const historyBack = () => window.history.back()

function EmptyList() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="frown outline" />
        No post found for the current page
      </Header>
      <Segment.Inline>
        <Button primary as={Link} to="/">
          Home
        </Button>
        <Button onClick={historyBack}>Go back</Button>
      </Segment.Inline>
    </Segment>
  )
}

export default NewsList
