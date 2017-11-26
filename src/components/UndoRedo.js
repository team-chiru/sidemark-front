import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export class Undo extends React.Component {
  static get propTypes () {
    return {
      onUndo: PropTypes.func.isRequired,
      canUndo: PropTypes.bool.isRequired
    }
  }

  render () {
    let { onUndo, canUndo } = this.props

    return (
      <Button type='default' onClick={onUndo} disabled={!canUndo}>Undo</Button>
    )
  }
}

export class Redo extends React.Component {
  static get propTypes () {
    return {
      onRedo: PropTypes.func.isRequired,
      canRedo: PropTypes.bool.isRequired
    }
  }

  render () {
    let { onRedo, canRedo } = this.props

    return (
      <Button type='default' onClick={onRedo} disabled={!canRedo}>Redo</Button>
    )
  }
}
