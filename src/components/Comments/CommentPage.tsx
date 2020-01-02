// @ts-ignore
import React, { Suspense, SuspenseList } from 'react'
import { RouteComponentProps } from 'react-router'
import { ErrorBoundary, ErrorMessage, Loading } from '../Utils'
import CommentList from './CommentList'
import CommentNewsHeader from './CommentNewsHeader'

type UrlProps = {
  id?: string
}

type Props = RouteComponentProps<UrlProps>

const CommentPage: React.FC<Props> = props => {
  const newsId = props.match.params.id
  if (!newsId) {
    return null
  }

  return (
    <div>
      <ErrorBoundary
        fallback={<ErrorMessage error="Could not fetch comments" />}
      >
        <SuspenseList tail="collapsed" revealOrder="forwards">
          <Suspense fallback={<Loading message="Fetching news" />}>
            <CommentNewsHeader id={newsId} />
          </Suspense>
          <Suspense fallback={<Loading message="Fetching comments" />}>
            <CommentList id={newsId} />
          </Suspense>
        </SuspenseList>
      </ErrorBoundary>
    </div>
  )
}

export default CommentPage
