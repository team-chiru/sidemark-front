import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

/**
 * Display a Likemark Child component.
 * @class @extends React.Component
 * @property {function} props.onClick - Updates the likemark state.
 * @property {name} props.itemType - The name of the children.
 * @fires LikemarkChild#onClick
 */
export default class LikemarkChild extends React.Component {
  static get propTypes () {
    return {
      onClick: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired
    }
  }

  render () {
    let { onClick, name } = this.props

    return (
      <li>
        <Card onClick={onClick}>{name}</Card>
      </li>
    )
  }
}
