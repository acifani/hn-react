import React from 'react'
import { Comment } from 'semantic-ui-react'

export type Comment = {
  id: number
  level: number
  user: string
  time: number
  time_ago: string
  content: string
  comments: Comment[]
}

type Props = {
  comment: Comment
}

const CommentListRow = ({ comment }: Props) => (
  <Comment>
    <Comment.Content>
      <Comment.Author as="a">{comment.user}</Comment.Author>
      <Comment.Metadata>
        <div>{comment.time_ago}</div>
      </Comment.Metadata>
      <Comment.Text>
        <div dangerouslySetInnerHTML={{ __html: comment.content }} />
      </Comment.Text>
    </Comment.Content>
  </Comment>
)

export default CommentListRow
