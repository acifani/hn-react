import React from 'react'

type Props = {
  domain: string
}

const DomainLink: React.SFC<Props> = ({ domain }) => (
  <a href={`http://${domain}`}> {domain} </a>
)

export default DomainLink
