/* @flow */

// Models
import type {Action as ActionType} from 'models/action'
import type {Likemark as LikemarkType} from 'models/likemark'
import {xhr, END_POINTS} from 'services/xhr';

// End-points
const GET_WITH_FIRST_CHILDREN = END_POINTS.API_GET_WITH_FIRST_CHILDREN

/**
 * Actions which manage the request from getWithFirstChildren action creator.
 * @readonly @const {string}
 */
const GET_WITH_FIRST_CHILDREN_SUCCESS = 'likemark/children/GET_WITH_FIRST_CHILDREN_SUCCESS'
const GET_WITH_FIRST_CHILDREN_FAILURE = 'likemark/children/GET_WITH_FIRST_CHILDREN_FAIL'

/**
 * Likemark piece of state's initial values.
 * @readonly @const {LikemarkType}
 */
const initialState: LikemarkType = {
  id: 0,
  name: 'Root',
  url: 'http://likemark.io/',
  parentId: -1,
  children: []
}

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
  const request = xhr.get(GET_WITH_FIRST_CHILDREN, id.toString());

  return (dispatch: Function) => {
    request
      .then(res => dispatch({
        type: GET_WITH_FIRST_CHILDREN_SUCCESS,
        payload: res.data && res.data.message ? res.data.message : console.log('The payload data structure was changed!')
      }))
      .catch(res => dispatch({
        type: GET_WITH_FIRST_CHILDREN_FAILURE,
        error: res
      }))
  }
}
