import React from 'react'
import { Comment } from 'semantic-ui-react'
import { UserLink } from '../Utils'
import { CommentListComponent } from './CommentList'

export type Item = {
  comments_count: number
  comments: Item[]
  content: string
  dead?: boolean
  deleted?: boolean
  domain?: string
  id: number
  level: number
  points: number | null
  time_ago: string
  time: number
  title: string
  type: string
  url?: string
  user: string | null
}

type Props = {
  comment: Item
}

const CommentListRow: React.FC<Props> = ({ comment }) => (
  <Comment.Group threaded={!!comment.comments}>
    <Comment>
      <Comment.Avatar
        src={`https://avatars.dicebear.com/v2/identicon/${comment.user}.svg`}
      ></Comment.Avatar>
      <Comment.Content>
        {comment.user && (
          <Comment.Author as="a">
            {<UserLink user={comment.user} />}
          </Comment.Author>
        )}
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
