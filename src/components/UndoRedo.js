import React from 'react'
import PropTypes from 'prop-types'

export class Undo extends React.Component {
  static propTypes = {
    onUndo: PropTypes.func.isRequired,
    canUndo: PropTypes.bool.isRequired
  }

  render () {
    let { onUndo, canUndo } = this.props

    return (
      <button onClick={onUndo} disabled={!canUndo}>Undo</button>
    )
  }
}

export class Redo extends React.Component {
  static propTypes = {
    onRedo: PropTypes.func.isRequired,
    canRedo: PropTypes.bool.isRequired
  }

  render () {
    let { onRedo, canRedo } = this.props

    return (
      <button onClick={onRedo} disabled={!canRedo}>Redo</button>
    )
  }
}
