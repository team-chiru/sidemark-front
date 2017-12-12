// Dependencies
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { reducer as children } from './children'

export default combineReducers({ children: undoable(children) })
