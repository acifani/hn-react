// @ts-ignore
import React, { Suspense } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { ErrorBoundary, ErrorMessage, Loading } from '../Utils'
import NewsList from './NewsList'

type UrlProps = {
  page?: string
}

type Props = RouteComponentProps<UrlProps>

const NewsPage: React.FC<Props> = props => {
  const page = parseInt(props.match.params.page || '1', 10)

  const prevLink = page > 1 ? `/news/${page - 1}` : '/'
  const nextLink = page ? `/news/${page + 1}` : '/news/2'

  return (
    <div>
      <ErrorBoundary fallback={<ErrorMessage error="Could not fetch posts" />}>
        <Suspense fallback={<Loading message="Fetching posts" />}>
          <NewsList page={page} />
        </Suspense>
      </ErrorBoundary>

      <Button.Group attached="bottom" basic={true} size="small">
        <Button content="Prev" as={Link} to={prevLink} disabled={page < 2} />
        <Button content="Next" as={Link} to={nextLink} disabled={page > 9} />
      </Button.Group>
    </div>
  )
}

export default NewsPage
