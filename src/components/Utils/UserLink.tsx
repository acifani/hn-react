import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  user: string
}

const UserLink: React.SFC<Props> = ({ user }) => (
  <Link to={`/user/${user}`}>{user}</Link>
)

export default UserLink
