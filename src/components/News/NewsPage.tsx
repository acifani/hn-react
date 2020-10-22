// @ts-ignore
import React, { Suspense } from 'react'
import { useParams } from 'react-router'
import { ErrorBoundary, ErrorMessage, PostSkeleton } from '../Utils'
import NewsList from './NewsList'

const supportedLists = ['news', 'newest', 'ask', 'jobs', 'show']

function NewsPage() {
  const { page: pageParam, list: listParam } = useParams()
  const page = parseInt(pageParam || '1', 10)
  const list =
    listParam && supportedLists.includes(listParam) ? listParam : 'news'

  return (
    <ErrorBoundary fallback={<ErrorMessage error="Could not fetch posts" />}>
      <Suspense fallback={<Skeleton />}>
        <NewsList list={list} page={page} />
      </Suspense>
    </ErrorBoundary>
  )
}

const Skeleton = React.memo(() => (
  <>
    {[...Array(10)].map((_, idx) => (
      <PostSkeleton key={idx} />
    ))}
  </>
))

export default NewsPage
