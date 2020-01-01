// @ts-ignore
import React, { Suspense, SuspenseList } from 'react'
import { RouteComponentProps } from 'react-router'
// import { Dimmer, Loader, Message } from 'semantic-ui-react'
// import cfg from '../../config'
// import { News } from '../News/NewsListRow'
import CommentList from './CommentList'
// import { Comment as CommentType } from './CommentListRow'
import CommentNewsHeader from './CommentNewsHeader'
import { fetchComments } from 'src/api'
import { ErrorBoundary, ErrorMessage, Loading } from '../Utils'

type UrlProps = {
  id?: string
}

type Props = RouteComponentProps<UrlProps>

const CommentPage: React.FC<Props> = props => {
  const newsId = props.match.params.id
  if (!newsId) return null

  const { news, comments } = fetchComments(newsId)

  return (
    <div>
      <ErrorBoundary
        fallback={<ErrorMessage error="Could not fetch comments" />}
      >
        <SuspenseList tail="collapsed">
          <Suspense fallback={<Loading message="Fetching news" />}>
            <CommentNewsHeader resource={news} />
          </Suspense>
          <Suspense fallback={<Loading message="Fetching comments" />}>
            <CommentList resource={comments} />
          </Suspense>
        </SuspenseList>
      </ErrorBoundary>
    </div>
  )
}

export default CommentPage
