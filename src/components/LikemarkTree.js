import React from 'react'
import PropTypes from 'prop-types'

import LikemarkItem from './LikemarkItem'

export default class LikemarkTree extends React.Component {
  static propTypes = {
    root: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onLikemarkClick: PropTypes.func.isRequired
  }

  render () {
    let { root, onLikemarkClick } = this.props

    return (
      <ul>
        {root.map(mark =>
          <LikemarkItem key={mark.id} {...mark}
            onClick={() => onLikemarkClick(mark.id)}
          />
        )}
      </ul>
    )
  }
}
