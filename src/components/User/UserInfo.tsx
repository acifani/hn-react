import React from 'react'

export type User = {
  id: string
  created: string
  karma: number
  about?: string
}

type Props = {
  user: User
}

const UserInfo: React.SFC<Props> = ({ user }) => (
  <div>
    <p>id {user.id}</p>
    <p>created {user.created}</p>
    <p>karma {user.karma}</p>
    {user.about && <p dangerouslySetInnerHTML={{ __html: user.about }} />}
  </div>
)

export default UserInfo
