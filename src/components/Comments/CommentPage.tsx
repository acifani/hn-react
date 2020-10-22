// @ts-ignore
import React, { Suspense } from 'react'
import { useParams } from 'react-router'
import {
  ErrorBoundary,
  ErrorMessage,
  PostSkeleton,
  CommentSkeleton,
} from '../Utils'
import CommentList from './CommentList'
import CommentNewsHeader from './CommentNewsHeader'

function CommentPage() {
  const { id: newsId } = useParams()
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

const CommentsSkeleton = React.memo(() => (
  <>
    {[...Array(5)].map((_, idx) => (
      <CommentSkeleton key={idx} />
    ))}
  </>
))

export default CommentPage
