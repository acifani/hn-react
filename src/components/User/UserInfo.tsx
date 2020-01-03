import React from 'react'
import { Icon, Card, Image } from 'semantic-ui-react'
import { userResource } from '../../api'

export type User = {
  about?: string
  created_time: number
  created: string
  id: string
  karma: number
}

type Props = {
  id: string
}

const UserInfo: React.FC<Props> = ({ id }) => {
  const user: User = userResource.read(id)

  return (
    <>
      <Card>
        <Image
          src={`https://avatars.dicebear.com/v2/identicon/${user.id}.svg`}
        />
        <Card.Content>
          <Card.Header>{user.id}</Card.Header>
          <Card.Meta>Joined {user.created}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Icon name="like" />
          {user.karma} points
        </Card.Content>
      </Card>
      <p dangerouslySetInnerHTML={{ __html: user.about || '' }} />
    </>
  )
}

export default UserInfo
