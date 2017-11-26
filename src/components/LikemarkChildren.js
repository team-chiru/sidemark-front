import React from 'react'
import PropTypes from 'prop-types'

import LikemarkChild from './LikemarkChild'

export default class LikemarkChildren extends React.Component {
  static get propTypes () {
    return {
      children: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired).isRequired,
      onLikemarkClick: PropTypes.func.isRequired
    }
  }

  render () {
    let { children, onLikemarkClick } = this.props

    return (
      <ul>
        {children.map(child =>
          <LikemarkChild key={child.id} name={child.name} onClick={() => onLikemarkClick(child.id)} />
        )}
      </ul>
    )
  }
}
