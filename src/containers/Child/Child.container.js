/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import LikemarkChildUI from 'components/Child/Child.component'

// Main Component
/**
 * Display a Likemark Child component.
 * @property {LikemarkType} props.likemarkChild - The name of the children.
 * @property {Function} props.handleLikemarkClick - Updates the likemark state.
 */
type Props = {
  likemarkChild: LikemarkType,
  handleLikemarkClick: (likemarkId: number) => void
}

type State = {
  expandedDetails: boolean
}

export class LikemarkChild extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      expandedDetails: false
    }
  }

  render () {
    return (
      <LikemarkChildUI {...{
        ...this.props,
        toggleDetailsVisibilty: () => this.setState({expandedDetails: !this.state.expandedDetails}),
        expandedDetails: this.state.expandedDetails
      }} />
    )
  }
}

export default LikemarkChild
