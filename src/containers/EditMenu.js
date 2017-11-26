import React from 'react'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { addChild } from '../ducks/children'

import { canUndo, canRedo } from '../selectors/children'

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

export default () => {
  let UndoControl = new UndoConnector()
  let RedoControl = new RedoConnector()
  let AddChildControl = new AddChildConnector()

  return (
    <div id='editMenu'>
      <AddChildControl />
      <UndoControl />
      <RedoControl />
    </div>
  )
}
