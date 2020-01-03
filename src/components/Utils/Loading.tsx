import React from 'react'
import { Loader, Placeholder } from 'semantic-ui-react'

type Props = {
  message?: string
}

export default ({ message }: Props) => (
  <Loader active={true} inline="centered">
    {message || 'Loading'}
  </Loader>
)

export function PostSkeleton() {
  return (
    <Placeholder>
      <Placeholder.Header>
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line></Placeholder.Line>
      </Placeholder.Paragraph>
    </Placeholder>
  )
}

export function CommentSkeleton() {
  return (
    <Placeholder>
      <Placeholder.Header image>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Header>
      <Placeholder.Paragraph>
        <Placeholder.Line />
        <Placeholder.Line />
      </Placeholder.Paragraph>
    </Placeholder>
  )
}
