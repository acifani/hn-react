import React, { Suspense } from 'react'
import { RouteComponentProps } from 'react-router'
import UserInfo from './UserInfo'
import { ErrorBoundary, ErrorMessage, Loading } from '../Utils'

type UrlProps = {
  userId?: string
}

type Props = RouteComponentProps<UrlProps>

const UserPage: React.FC<Props> = props => {
  const id = props.match.params.userId
  if (!id) {
    return null
  }

  return (
    <ErrorBoundary
      fallback={<ErrorMessage error="Could not fetch user info" />}
    >
      <Suspense fallback={<Loading message="Fetching user info" />}>
        <UserInfo id={id} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default UserPage
