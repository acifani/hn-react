import React from 'react'

type Props = {
  fallback: React.ReactNode
}

export default class ErrorBoundary extends React.Component<Props> {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error: any) {
    return {
      error,
      hasError: true,
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
