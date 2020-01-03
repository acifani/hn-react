import React from 'react'
import { Segment, Header, Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <h1>404</h1>
        This isn't the page you're looking for. Move along.
      </Header>
      <Segment.Inline>
        <Button primary as={Link} to="/">
          Home
        </Button>
      </Segment.Inline>
      <br />
      <Image src="/404.png" />
    </Segment>
  )
}
