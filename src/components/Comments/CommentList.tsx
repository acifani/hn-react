import React from 'react'
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

  return <>{children}</>
}

export default CommentList
