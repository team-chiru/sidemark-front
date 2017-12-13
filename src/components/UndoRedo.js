import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

/**
 * Display a Button in order to undo undoable actions.
 * @class @extends React.Component
 * @property {function} props.onUndo - Function which undos the last action.
 * @property {function} props.canUndo - Function which enables or disables this button.
 */
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

/**
 * Display a Button in order to redo redoable actions.
 * @class @extends React.Component
 * @property {function} props.onRedo - Function which redoes the last action.
 * @property {function} props.canRedo - Function which enables or disables this button.
 */
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
