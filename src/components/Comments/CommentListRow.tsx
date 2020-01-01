import React from 'react'
import { Comment } from 'semantic-ui-react'
import { UserLink } from '../Utils'
import CommentList from './CommentList'

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

const CommentListRow: React.FC<Props> = ({ comment }) => (
  <Comment>
    <Comment.Content>
      <Comment.Author as="span">
        {<UserLink user={comment.user} />}
      </Comment.Author>
      <Comment.Metadata>
        <div>{comment.time_ago}</div>
      </Comment.Metadata>
      <Comment.Text>
        <div dangerouslySetInnerHTML={{ __html: comment.content }} />
      </Comment.Text>
    </Comment.Content>
    {comment.comments && <CommentList comments={comment.comments} />}
  </Comment>
)

export default CommentListRow
