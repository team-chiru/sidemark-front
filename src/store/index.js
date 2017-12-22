// Dependencies
import { combineReducers } from 'redux'
import undoable from 'redux-undo'
import { reducer as children } from './children'
import likemark from './likemark'

/**
 * A Likemark child referenced a likemark with minimal information.
 * @typedef {object} State
 * @property {object[]} children - The children of the current likemark.
 * @property {number} children.id - The id of the curent likemark child.
 * @property {string} children.name - The name of the curent likemark child.
 */

export default combineReducers({
  children: undoable(children),
  likemark
})
