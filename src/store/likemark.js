// Dependencies
import axios from 'axios'

// Configs
const baseUrl = 'http://localhost:42506/likemark/getWithFirstChildren/'

/**
 * Actions which manage the request from getWithFirstChildren action creator.
 * @readonly @const {string}
 */
const GET_WITH_FIRST_CHILDREN_SUCCESS = 'likemark/children/GET_WITH_FIRST_CHILDREN_SUCCESS'
const GET_WITH_FIRST_CHILDREN_FAILURE = 'likemark/children/GET_WITH_FIRST_CHILDREN_FAIL'

/**
 * Application's initial state.
 * @readonly @const {object}
 */
const initialState = {
  id: 1,
  name: 'Root',
  url: 'http://www.likemark.io/',
  children: []
}

/**
 * Reducer which manage the current likemark.
 * @param {object{}} state - The likemark state.
 * @param {object{}} action - The triggered action.
 */

export default (state = initialState, action) => {
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
 *
 *
 */
export const getWithFirstChildren = (id) => {
  const request = axios.get(baseUrl + id)

  return dispatch => {
    request
      .then(res => dispatch({
        type: GET_WITH_FIRST_CHILDREN_SUCCESS,
        payload: res.data.message
      }))
      .catch(err => dispatch({
        type: GET_WITH_FIRST_CHILDREN_FAILURE,
        payload: err
      }))
  }
}
