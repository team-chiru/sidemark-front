// Dependencies
import axios from 'axios'

// Configs
const baseUrl = 'http://localhost:42506/likemark/getWithFirstChildren/'

// Actions
/**
 * Actions which manage the GET first children request.
 * @readonly @const {string}
 */

const GET_WITH_FIRST_CHILDREN_SUCCESS = 'likemark/children/GET_WITH_FIRST_CHILDREN_SUCCESS'
const GET_WITH_FIRST_CHILDREN_FAILURE = 'likemark/children/GET_WITH_FIRST_CHILDREN_FAIL'

/**
 * Reduce the likemark children state.
 * @param {object[]} [state=[]] - The likemark children state.
 * @param {string} action - The triggered action.
 */

const initialState = {
  id: 1,
  name: 'Root',
  children: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WITH_FIRST_CHILDREN_SUCCESS:
      console.log('action.payload.data.message', action.payload.data.message)
      return action.payload.data.message

    case GET_WITH_FIRST_CHILDREN_FAILURE:
      console.log(action.error)
      return state

    default:
      return state
  }
}

/**
 * Create the GET_WITH_FIRST_CHILDREN action.
 * @param {string} id - The id of the current likemark.
 * @returns {object} The GET_WITH_FIRST_CHILDREN action which is a GET request
 * for the first children of the current likemark.
 *
 *
 */

// Action Creators
export const getWithFirstChildren = (id) => {
  const request = axios.get(baseUrl + id)

  return dispatch => {
    request
      .then(res => dispatch({
        type: GET_WITH_FIRST_CHILDREN_SUCCESS,
        payload: res
      }))
      .catch(err => dispatch({
        type: GET_WITH_FIRST_CHILDREN_FAILURE,
        payload: err
      }))
  }
}
