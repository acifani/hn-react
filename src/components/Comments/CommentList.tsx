import React from 'react'
import { Comment } from 'semantic-ui-react'
import CommentListRow, { Comment as CommentType } from './CommentListRow'

type Props = {
  comments: CommentType[]
}

const CommentList: React.SFC<Props> = props => {
  const comments = props.comments.map(c => (
    <CommentListRow key={c.id} comment={c} />
  ))

  return <Comment.Group>{comments}</Comment.Group>
}

export default CommentList
