import React from 'react'
import PropTypes from 'prop-types'

import LikemarkChild from '../likemark-child/likemark-child.component'

/**
 * A Likemark child referenced a likemark with minimal information.
 * @typedef {object} LikemarkChildState
 * @property {number} id - The unique id of the likemark child.
 * @property {string} name - The name of the likemark child.
 */

/**
 * Display the Likemark Children as a list component.
 * @class @extends React.Component
 * @property {LikemarkChildState[]} props.children - The likemark children to display.
 * @property {function} props.handleLikemarkClick - The function which trigger the state update when a likemark child is selected.
 */
export default class LikemarkChildren extends React.Component {
  static get propTypes () {
    return {
      children: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired).isRequired,
      handleLikemarkClick: PropTypes.func.isRequired
    }
  }

  render = () => {
    let { children, handleLikemarkClick } = this.props

    return (
      <ul>
        {children.map(child =>
          <LikemarkChild key={child.id} name={child.name} onClick={() => handleLikemarkClick(child.id)} />
        )}
      </ul>
    )
  }
}
