import React, { Reducer, useEffect, useReducer } from 'react'
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

enum ActionType {
  FetchStart = 'fetch_start',
  FetchSuccess = 'fetch_success',
  FetchFail = 'fetch_fail',
}

type Action = {
  payload?: any
  type: ActionType
}

const userReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchStart:
      return {
        ...state,
        loading: true,
      }
    case ActionType.FetchFail:
      return {
        error: action.payload,
        loading: false,
        user: {} as User,
      }
    case ActionType.FetchSuccess:
      return {
        error: undefined,
        loading: false,
        user: action.payload,
      }
    default:
      return state
  }
}

const UserPage: React.FC<Props> = props => {
  const [state, dispatch] = useReducer(userReducer, {
    error: undefined,
    loading: false,
    user: {} as User,
  })

  useEffect(() => {
    const fetchUser = async () => {
      dispatch({ type: ActionType.FetchStart })
      const response = await fetch(
        `${cfg.apiBaseUrl}user/${props.match.params.userId}`
      )
      if (!response.ok) {
        dispatch({ payload: response.statusText, type: ActionType.FetchFail })
      }
      const data = await response.json()
      dispatch({ payload: data, type: ActionType.FetchSuccess })
    }

    fetchUser()
  }, [props.match.params.userId])

  return (
    <div>
      <Dimmer active={state.loading}>
        <Loader>Fetching user</Loader>
      </Dimmer>

      <Message error={true} hidden={!state.error}>
        Error while fetching user: {state.error}
      </Message>

      <UserInfo user={state.user} />
    </div>
  )
}

export default UserPage
