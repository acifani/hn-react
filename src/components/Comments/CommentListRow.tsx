import React from 'react'
import { Comment } from 'semantic-ui-react'
import { UserLink } from '../Utils'
import { CommentListComponent } from './CommentList'

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
  <Comment.Group threaded={!!comment.comments}>
    <Comment>
      <Comment.Avatar
        src={`https://avatars.dicebear.com/v2/identicon/${comment.user}.svg`}
      ></Comment.Avatar>
      <Comment.Content>
        <Comment.Author as="a">
          {<UserLink user={comment.user} />}
        </Comment.Author>
        <Comment.Metadata as="span">{comment.time_ago}</Comment.Metadata>
        <Comment.Text>
          <div dangerouslySetInnerHTML={{ __html: comment.content }} />
        </Comment.Text>
      </Comment.Content>
      {comment.comments && <CommentListComponent comments={comment.comments} />}
    </Comment>
  </Comment.Group>
)

export default CommentListRow
