import React from 'react'
import { Loader, Placeholder, Card } from 'semantic-ui-react'

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

export function UserSkeleton() {
  return (
    <>
      <Card>
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
        <Card.Content>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line length="medium" />
            </Placeholder.Paragraph>
          </Placeholder>
        </Card.Content>
        <Card.Content extra>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line length="short" />
            </Placeholder.Header>
          </Placeholder>
        </Card.Content>
      </Card>
      <Placeholder fluid>
        <Placeholder.Paragraph>
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
          <Placeholder.Line />
        </Placeholder.Paragraph>
      </Placeholder>
    </>
  )
}
