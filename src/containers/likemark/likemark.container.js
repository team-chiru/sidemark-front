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
  componentWillMount () {
    this.props.getWithFirstChildren(this.props.likemark.id)
  }

  handleLikemarkClick = (likemarkId) => {
    likemarkId
      ? this.props.getWithFirstChildren(likemarkId)
      : console.log('Already on Root')
  }

  render = () => <LikemarkUI likemark={this.props.likemark} handleLikemarkClick={this.handleLikemarkClick} />
}

Likemark.propTypes = {
  getWithFirstChildren: PropTypes.func.isRequired
}

export default connect(
  state => ({ likemark: state.likemark }),
  dispatch => bindActionCreators({ getWithFirstChildren }, dispatch)
)(Likemark)
