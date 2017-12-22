let nextTodoId = 0

/**
 * Actions which manage the GET first children request.
 * @readonly @const {string}
 */
const GET_FIRST = 'likemark/children/GET_FIRST'
const GET_FIRST_SUCCESS = 'likemark/children/GET_FIRST_SUCCESS'
const GET_FIRST_FAIL = 'likemark/children/GET_FIRST_FAIL'

/**
 * Action which manages the new added child.
 * @readonly @const {string}
 */
const ADD = 'likemark/children/ADD'

/**
 * Action which manages the toggled child.
 * @readonly @const {string}
 */
const TOGGLE = 'likemark/children/TOGGLE'

/**
 * Reduce the likemark children state.
 * @param {object[]} [state=[]] - The likemark children state.
 * @param {string} action - The triggered action.
 */
export function reducer (state = [], action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]

    case TOGGLE:
      return state.map(child => {
        if (child.id === action.id) {
          console.log(TOGGLE + ': ' + child.name)
        }

        return child
      })

    case GET_FIRST_SUCCESS:
      return action.payload.data.message

    case GET_FIRST_FAIL:
      console.log(action.error)
      return state

    default:
      return state
  }
}

/**
 * Create the ADD action by creating a new likemark child.
 * @param {string} name - The name of the new likemark child.
 * @returns {object} The ADD action associated with new likemark child.
 */
export function addChild (name) {
  nextTodoId += 1

  return {
    type: ADD,
    id: nextTodoId,
    name
  }
}

/**
 * Create the TOGGLE action.
 * @param {string} id - The id of the toggled likemark child.
 * @returns {object} The TOGGLE action.
 */
export function toggleChild (id) {
  return { type: TOGGLE, id }
}

/**
 * Create the GET_FIRST action.
 * @param {string} id - The id of the current likemark.
 * @returns {object} The GET_FIRST action which is a GET request
 * for the first children of the current likemark.
 */
export function getFirstChildren (id) {
  return {
    type: GET_FIRST,
    payload: {
      request: {
        url: '/getFirstChildren/' + id
      }
    }
  }
}
