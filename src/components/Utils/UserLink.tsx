import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  user: string
}

const loadUserPage = () => import(/* webpackPrefetch: true */ '../User')

const UserLink: React.FC<Props> = ({ user }) => (
  <Link to={`/user/${user}`} onMouseOver={loadUserPage}>
    {' '}
    {user}
  </Link>
)

export default UserLink
