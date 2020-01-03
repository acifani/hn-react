import React from 'react'

type Props = {
  domain: string
}

const DomainLink: React.FC<Props> = ({ domain }) => (
  <a href={`http://${domain}`} target="_blank" rel="noopener noreferrer">
    {' '}
    {domain}
  </a>
)

export default DomainLink
