import React from 'react'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { addChild } from '../ducks/children'

import { canUndo, canRedo } from '../selectors/children'

import { Undo, Redo } from '../components/UndoRedo'
import AddChild from '../components/AddChild'

import './DebugContainer.css'

import PropsConnector from './PropsConnector'

/**
 * Connect undo trigger with the undoable state.
 * @class @extends PropsConnector
 */
class UndoConnector extends PropsConnector {
  get component () { return Undo }

  get stateMapping () {
    return (state) => ({ canUndo: canUndo(state) > 0 })
  }

  get dispatchMapping () {
    return { onUndo: UndoActionCreators.undo }
  }
}

/**
 * Connect redo trigger with the redoable state.
 * @class @extends PropsConnector
 */
class RedoConnector extends PropsConnector {
  get component () { return Redo }

  get stateMapping () {
    return (state) => ({ canRedo: canRedo(state) })
  }

  get dispatchMapping () {
    return { onRedo: UndoActionCreators.redo }
  }
}

/**
 * Connect adder component with the likemark children state.
 * @class @extends PropsConnector
 */
class AddChildConnector extends PropsConnector {
  get component () { return AddChild }

  get stateMapping () {
    return (state) => ({ itemType: 'Likemark' })
  }

  get dispatchMapping () {
    return { onAddTextItem: addChild }
  }
}

/**
 * Contain all connected debug components.
 * @class @extends React.Component
 */
export default class DebugContainer extends React.Component {
  constructor (props) {
    super(props)

    this._controls = {
      UndoControl: new UndoConnector(),
      RedoControl: new RedoConnector(),
      AddChildControl: new AddChildConnector()
    }
  }

  render () {
    let { UndoControl, RedoControl, AddChildControl } = this._controls

    return (
      <div id='editMenu'>
        <AddChildControl />
        <UndoControl />
        <RedoControl />
      </div>
    )
  }
}
