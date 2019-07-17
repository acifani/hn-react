import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import UserInfo, { User } from './UserInfo'

type UrlProps = {
  userId?: string
}

type Props = RouteComponentProps<UrlProps>

const UserPage: React.SFC<Props> = props => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          `${cfg.apiBaseUrl}user/${props.match.params.userId}`
        )
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        const data = await response.json()
        setError(undefined)
        setLoading(false)
        setUser(data)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return (
    <div>
      <Dimmer active={loading}>
        <Loader>Fetching user</Loader>
      </Dimmer>

      <Message error={true} hidden={!error}>
        Error while fetching user: {error}
      </Message>

      <UserInfo user={user} />
    </div>
  )
}

export default UserPage
