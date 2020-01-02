import React from 'react'
import { Icon } from 'semantic-ui-react'
import { userResource } from '../../api'

export type User = {
  id: string
  created: string
  karma: number
  about?: string
}

type Props = {
  id: string
}

const UserInfo: React.FC<Props> = ({ id }) => {
  const user = userResource.read(id)

  return (
    <div>
      <p>
        <Icon name="user" />
        {user.id}
      </p>
      <p>
        <Icon name="time" />
        {user.created}
      </p>
      <p>
        <Icon name="heart" />
        {user.karma}
      </p>
      {user.about && <p dangerouslySetInnerHTML={{ __html: user.about }} />}
    </div>
  )
}

export default UserInfo
