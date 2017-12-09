import React from 'react'
import PropTypes from 'prop-types'

import LikemarkChild from './LikemarkChild'

/**
 * Display the Likemark Children as a list component.
 * @class
 * @extends React.Component
 * @property {object[]} children - The likemark children to display.
 * @property {number} children.id - The unique id of the likemark child.
 * @property {string} children.name - The name of the likemark child.
 * @property {function} onLikemarkClick - The function which trigger the state update when a likemark child is selected.
 */
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
