import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

type Props = {
  message?: string
}

export default ({ message }: Props) => (
  <Dimmer active={true}>
    <Loader>{message || 'Loading'}</Loader>
  </Dimmer>
)
