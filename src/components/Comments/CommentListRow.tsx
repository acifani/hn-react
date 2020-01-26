import React, { useState } from 'react'
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

const CommentListRow: React.FC<Props> = ({ comment }) => {
  const [expanded, setExpanded] = useState(true)
  const toggleExpanded = (event: React.SyntheticEvent<HTMLSpanElement>) => {
    const selection = window.getSelection()?.toString()
    if (!selection) {
      setExpanded(!expanded)
    }
  }

  return (
    <Comment.Group threaded={!!comment.comments && expanded}>
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
          <Comment.Metadata as="span">
            {comment.time_ago}{' '}
            <span onClick={toggleExpanded} style={{ cursor: 'pointer' }}>
              {expanded ? '[-] collapse' : '[+] expand'}
            </span>
          </Comment.Metadata>
          <Comment.Text onClick={toggleExpanded}>
            <div
              dangerouslySetInnerHTML={{
                __html: expanded ? comment.content : '<br/>',
              }}
            />
          </Comment.Text>
        </Comment.Content>
        {comment.comments && expanded && (
          <CommentListComponent comments={comment.comments} />
        )}
      </Comment>
    </Comment.Group>
  )
}

export default React.memo(CommentListRow)
