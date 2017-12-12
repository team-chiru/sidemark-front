import React from 'react'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { addChild } from '../store/children'

import { canUndo, canRedo } from '../store/selectors/children'

import { Undo, Redo } from '../components/UndoRedo'
import AddTextItem from '../components/AddTextItem'

import './EditMenu.css'

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
  get component () { return AddTextItem }

  get stateMapping () {
    return (state) => ({ itemType: 'Likemark' })
  }

  get dispatchMapping () {
    return { onAddTextItem: addChild }
  }
}

export default class DebugConnector extends React.Component {
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
