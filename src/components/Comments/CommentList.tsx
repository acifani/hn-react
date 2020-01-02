import React from 'react'
import { Comment } from 'semantic-ui-react'
import CommentListRow, { Comment as CommentType } from './CommentListRow'
import { commentsResource } from '../../api'

type Props = {
  id: string
}

const CommentList: React.FC<Props> = ({ id }) => {
  const comments = commentsResource.read(id)
  return <CommentListComponent comments={comments.comments} />
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
