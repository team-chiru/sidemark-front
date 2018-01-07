/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import LikemarkChildUI from 'components/likemark-child/likemark-child.component'

// Main Component
/**
 * Display a Likemark Child component.
 * @property {Function} props.handleLikemarkClick - Updates the likemark state.
 * @property {LikemarkType} props.likemarkChild - The name of the children.
 */
type Props = {
  handleLikemarkClick: (likemarkId: number) => void,
  likemarkChild: LikemarkType
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
