import React from 'react'
import { Loader } from 'semantic-ui-react'

type Props = {
  message?: string
}

export default ({ message }: Props) => (
  <Loader active={true} inline="centered">
    {message || 'Loading'}
  </Loader>
)
