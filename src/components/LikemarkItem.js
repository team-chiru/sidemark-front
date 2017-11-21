import React from 'react'
import PropTypes from 'prop-types'

export default class LikemarkItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }

  render () {
    let { onClick, text } = this.props

    return (
      <li onClick={onClick}>{text}</li>
    )
  }
}
