import React from 'react'
import cfg from '../../config'

type Props = {
  user: string
}

const UserLink: React.SFC<Props> = ({ user }) => (
  <a href={`${cfg.hnBaseUrl}user?id=${user}`}> {user}</a>
)

export default UserLink
