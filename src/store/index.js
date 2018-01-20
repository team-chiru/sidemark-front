// Dependencies
import { combineReducers } from 'redux'
import likemark from './likemark/likemark'
import { i18nReducer } from 'react-redux-i18n'

/**
 * A Likemark child referenced a likemark with minimal information.
 * @typedef {object} State
 * @property {object[]} children - The children of the current likemark.
 * @property {number} children.id - The id of the curent likemark child.
 * @property {string} children.name - The name of the curent likemark child.
 */

export default combineReducers({likemark, i18n: i18nReducer})
