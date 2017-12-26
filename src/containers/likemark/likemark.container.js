// @flow

// Dependencies
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import LikemarkUI from 'components/likemark/likemark.component'

// Action Creators
import { getWithFirstChildren } from 'store/likemark'

// Main Component
type Props = {
  getWithFirstChildren: (likemarkId: number) => Object,
  likemark: Object,
};

type State = {
  menuVisibility: boolean,
};

export class Likemark extends Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      menuVisibility: false
    }
  }

  componentWillMount () {
    this.props.getWithFirstChildren(this.props.likemark.id)
  }

  toggleMenuVisibility () {
    this.setState({ menuVisibility: !this.state.menuVisibility })
  }

  handleLikemarkClick (likemarkId: number): void {
    likemarkId !== -1
      ? this.props.getWithFirstChildren(likemarkId)
      : console.log('Already on Root')
  }

  render () {
    return (
      <LikemarkUI
        likemark={this.props.likemark}
        menuVisibility={this.state.menuVisibility}
        handleLikemarkClick={this.handleLikemarkClick.bind(this)}
        toggleMenuVisibility={this.toggleMenuVisibility.bind(this)}
        setMenuVisibility={(menuVisibility) => this.setState({menuVisibility})}
      />
    )
  }
}

export default connect(
  state => ({ likemark: state.likemark }),
  dispatch => bindActionCreators({ getWithFirstChildren }, dispatch)
)(Likemark)
