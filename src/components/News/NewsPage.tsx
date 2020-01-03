// @ts-ignore
import React, { Suspense } from 'react'
import { RouteComponentProps } from 'react-router'
import { ErrorBoundary, ErrorMessage, PostSkeleton } from '../Utils'
import NewsList from './NewsList'

const supportedLists = ['news', 'newest', 'ask', 'jobs', 'show']

type UrlProps = {
  page?: string
  list?: string
}

type Props = RouteComponentProps<UrlProps>

const NewsPage: React.FC<Props> = props => {
  const page = parseInt(props.match.params.page || '1', 10)
  const listParam = props.match.params.list
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
