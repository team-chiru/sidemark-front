import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

export default class LikemarkItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
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
