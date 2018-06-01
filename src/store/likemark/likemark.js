/* @flow */

// See https://github.com/erikras/ducks-modular-redux

// Dependencies
import axios from 'axios'

// Dependencies
import {getWithFirstChildrenErrorAdapter} from './likemark.adapter.js'

// Models
import type {Action as ActionType} from 'models/action'
import type {Likemark as LikemarkType} from 'models/likemark'

// Configs
const baseUrl = 'http://localhost:42506/likemark'

/**
 * Actions which manage the request from getWithFirstChildren action creator.
 * @readonly @const {string}
 */
const GET_WITH_FIRST_CHILDREN_SUCCESS = 'likemark/children/GET_WITH_FIRST_CHILDREN_SUCCESS'
const GET_WITH_FIRST_CHILDREN_FAILURE = 'likemark/children/GET_WITH_FIRST_CHILDREN_FAIL'

/**
 * Actions which manage the request from postLikemarkPayloadAdapter action creator.
 * @readonly @const {string}
 */
const POST_LIKEMARK_SUCCESS = 'POST_LIKEMARK_SUCCESS'
const POST_LIKEMARK_FAILURE = 'POST_LIKEMARK_FAIL'

/**
 * Likemark piece of state's initial values.
 * @readonly @const {LikemarkType}
 */
const initialState: LikemarkType = {
  id: 0,
  title: 'Root',
  url: 'http://likemark.io/',
  parentId: -1,
  children: []
}

// Verify if likemark has an url
const urlParser = (likemark) => likemark && likemark.url ? likemark : {...likemark, url: 'http://likemark.io/'}

/**
 * Reducer which manage the current likemark.
 * @param {State{}} LikemarkType - The likemark state.
 * @param {Action{}} ActionType - The triggered action.
 */
export default (state: LikemarkType = initialState, action: ActionType) => {
  switch (action.type) {
    case GET_WITH_FIRST_CHILDREN_SUCCESS:
      console.log('Current likemark:', action.payload)
      return action.payload

    case GET_WITH_FIRST_CHILDREN_FAILURE:
      console.log(action.error)
      return state

    case POST_LIKEMARK_SUCCESS:
      console.log('Created likemark:', action.payload)
      return action.payload

    case POST_LIKEMARK_FAILURE:
      console.log(action.error)
      return state

    default:
      return state
  }
}

// Action Creators
/**
 * Create the GET_WITH_FIRST_CHILDREN actions.
 * @param {string} id - The id of the likemark to be shown.
 * @returns {object} The GET_WITH_FIRST_CHILDREN action which is a GET request for a likemark.
 */
export const getWithFirstChildren = (id: number): Function => {
  const request = axios.get(baseUrl + '/getWithFirstChildren/' + (id === 0 ? 'root' : id))
  return (dispatch: Function) => {
    request
      .then(res => dispatch({
        type: GET_WITH_FIRST_CHILDREN_SUCCESS,
        payload: urlParser(res.data.message)
      }))
      .catch(res => dispatch({
        type: GET_WITH_FIRST_CHILDREN_FAILURE,
        error: getWithFirstChildrenErrorAdapter(res)
      }))
  }
}

/**
 * Create the POST_LIKEMARK actions.
 * @param {object} Likemark - The likemark that will be add.
 * @returns {object} The POST_LIKEMARK action which is a POST request for creating a likemark.
 */
export const postLikemark = (likemark: Likemark): Function => {
  const request = axios.post(baseUrl + '/post', likemark)
  return (dispatch: Function) => {
    request
      .then(res => dispatch({
        type: POST_LIKEMARK_SUCCESS,
        payload: urlParser(res.data.message)
      }))
      .catch(res => dispatch({
        type: POST_LIKEMARK_FAILURE,
        error: getWithFirstChildrenErrorAdapter(res)
      }))
  }
}
