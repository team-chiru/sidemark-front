import React from 'react'
import { connect } from 'react-redux'

import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { add } from '../actions/onLikemarkItems'

import { canUndo, canRedo } from '../selectors/treeContent'

import { Undo, Redo } from '../components/UndoRedo'
import AddTextItem from '../components/AddTextItem'

const UndoTreeControl = connect(
  (state) => ({ canUndo: canUndo(state) > 0 }),
  { onUndo: UndoActionCreators.undo }
)(Undo)

const RedoTreeControl = connect(
  (state) => ({ canRedo: canRedo(state) }),
  { onRedo: UndoActionCreators.redo }
)(Redo)

const AddLikemarkControl = connect(
  (state) => ({ itemType: 'Likemark' }),
  { onAddTextItem: add }
)(AddTextItem)

const EditMenu = () => {
  return (
    <div>
      <AddLikemarkControl />
      <UndoTreeControl />
      <RedoTreeControl />
    </div>
  )
}

export default EditMenu
