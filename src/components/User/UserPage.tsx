import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import { Dimmer, Loader, Message } from 'semantic-ui-react'
import cfg from '../../config'
import UserInfo, { User } from './UserInfo'

type UrlProps = {
  userId?: string
}

type Props = RouteComponentProps<UrlProps>

type State = {
  error?: string
  loading: boolean
  user: User
}

class UserPage extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { loading: false, user: {} as User }
  }

  public componentDidMount() {
    this.fetchUser()
  }

  public fetchUser = async () => {
    try {
      this.setState({ ...this.state, loading: true })
      const response = await fetch(
        `${cfg.apiBaseUrl}user/${this.props.match.params.userId}`
      )
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      const data = await response.json()
      this.setState({
        error: undefined,
        loading: false,
        user: data
      })
    } catch (error) {
      this.setState({ loading: false, error: error.message })
    }
  }

  public render() {
    return (
      <div>
        <Dimmer active={this.state.loading}>
          <Loader>Fetching user</Loader>
        </Dimmer>

        <Message error={true} hidden={!this.state.error}>
          Error while fetching user: {this.state.error}
        </Message>

        <UserInfo user={this.state.user} />
      </div>
    )
  }
}

export default UserPage
