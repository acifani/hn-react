// @ts-ignore
import React, { Suspense } from 'react'
import { RouteComponentProps } from 'react-router'
import {
  ErrorBoundary,
  ErrorMessage,
  PostSkeleton,
  CommentSkeleton,
} from '../Utils'
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
        <Suspense fallback={<PostSkeleton />}>
          <CommentNewsHeader id={newsId} />
        </Suspense>
        <Suspense fallback={<CommentsSkeleton />}>
          <CommentList id={newsId} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

const CommentsSkeleton = () => (
  <>
    {[...Array(5)].map(() => (
      <CommentSkeleton />
    ))}
  </>
)

export default CommentPage
