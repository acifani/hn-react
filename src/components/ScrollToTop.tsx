import { Component } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type Props = RouteComponentProps<never>

class ScrollToTop extends Component<Props> {
  public componentDidUpdate(prevProps: Props) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  public render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
