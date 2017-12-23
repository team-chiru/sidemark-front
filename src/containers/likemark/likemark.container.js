// Dependencies
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import LikemarkUI from 'components/likemark/likemark.component'

// Action Creators
import { getWithFirstChildren } from 'store/likemark'

// Main Component
export class Likemark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisibility: false
    }
  }

  componentWillMount = () => {
    this.props.getWithFirstChildren(this.props.likemark.id)
  }

  toggleMenuVisibility = () => this.setState({ menuVisibility: !this.state.menuVisibility })

  handleLikemarkClick = (likemarkId) => {
    likemarkId !== -1
      ? this.props.getWithFirstChildren(likemarkId)
      : console.log('Already on Root')
  }

  render = () => (
    <LikemarkUI
      likemark={this.props.likemark}
      menuVisibility={this.state.menuVisibility}
      handleLikemarkClick={this.handleLikemarkClick}
      toggleMenuVisibility={this.toggleMenuVisibility}
      setMenuVisibility={(menuVisibility) => this.setState({menuVisibility})}
    />
  )
}

Likemark.propTypes = {
  getWithFirstChildren: PropTypes.func.isRequired
}

export default connect(
  state => ({ likemark: state.likemark }),
  dispatch => bindActionCreators({ getWithFirstChildren }, dispatch)
)(Likemark)
