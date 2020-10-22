import React, { Suspense } from 'react'
import UserInfo from './UserInfo'
import { ErrorBoundary, ErrorMessage, UserSkeleton } from '../Utils'
import { useParams } from 'react-router'

function UserPage() {
  const { userId: id } = useParams()
  if (!id) {
    return null
  }

  return (
    <ErrorBoundary
      fallback={<ErrorMessage error="Could not fetch user info" />}
    >
      <Suspense fallback={<UserSkeleton />}>
        <UserInfo id={id} />
      </Suspense>
    </ErrorBoundary>
  )
}

export default UserPage
