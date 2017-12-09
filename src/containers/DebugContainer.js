import React from 'react'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { addChild } from '../ducks/children'

import { canUndo, canRedo } from '../selectors/children'

import { Undo, Redo } from '../components/UndoRedo'
import AddChild from '../components/AddChild'

import './DebugContainer.css'

import PropsConnector from './PropsConnector'

class UndoConnector extends PropsConnector {
  get component () { return Undo }

  get stateMapping () {
    return (state) => ({ canUndo: canUndo(state) > 0 })
  }

  get dispatchMapping () {
    return { onUndo: UndoActionCreators.undo }
  }
}

class RedoConnector extends PropsConnector {
  get component () { return Redo }

  get stateMapping () {
    return (state) => ({ canRedo: canRedo(state) })
  }

  get dispatchMapping () {
    return { onRedo: UndoActionCreators.redo }
  }
}

class AddChildConnector extends PropsConnector {
  get component () { return AddChild }

  get stateMapping () {
    return (state) => ({ itemType: 'Likemark' })
  }

  get dispatchMapping () {
    return { onAddTextItem: addChild }
  }
}

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
