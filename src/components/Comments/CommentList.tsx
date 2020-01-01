import React from 'react'
import { Comment } from 'semantic-ui-react'
import CommentListRow, { Comment as CommentType } from './CommentListRow'

type Props = {
  resource: any
}

const CommentList: React.FC<Props> = ({ resource }) => {
  const news = resource.read()
  return <CommentListComponent comments={news.comments} />
}

type ListProps = {
  comments: CommentType[]
}

export const CommentListComponent = ({ comments }: ListProps) => {
  const children = comments.map((c: CommentType) => (
    <CommentListRow key={c.id} comment={c} />
  ))

  return <Comment.Group>{children}</Comment.Group>
}

export default CommentList
