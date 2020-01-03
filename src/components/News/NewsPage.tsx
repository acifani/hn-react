// @ts-ignore
import React, { Suspense } from 'react'
import { RouteComponentProps } from 'react-router'
import { ErrorBoundary, ErrorMessage, Loading } from '../Utils'
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
      <Suspense fallback={<Loading message="Fetching posts" />}>
        <NewsList list={list} page={page} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default NewsPage
