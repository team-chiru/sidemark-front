import React from 'react'
import { connect } from 'react-redux'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { add } from '../actions/onLikemarkItems'

import { Undo, Redo } from '../components/UndoRedo'
import AddTextItem from '../components/AddTextItem'

const UndoTreeControl = connect(
  (state) => ({ canUndo: state.root.past.length > 0 }),
  { onUndo: UndoActionCreators.undo }
)(Undo)

const RedoTreeControl = connect(
  (state) => ({ canRedo: state.root.future.length > 0 }),
  { onRedo: UndoActionCreators.redo }
)(Redo)

const AddLikemarkControl = connect(
  (state) => ({ itemType: 'Likemark' }),
  { onAddTextItem: add }
)(AddTextItem)

const EditMenu = () => {
  return (
    <span>
      <AddLikemarkControl />
      <UndoTreeControl />
      <RedoTreeControl />
    </span>
  )
}

export default EditMenu
