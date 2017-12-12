let nextTodoId = 0

// ACTIONS
const GET_FIRST = 'likemark/children/GET_FIRST'
const GET_FIRST_SUCCESS = 'likemark/children/GET_FIRST_SUCCESS'
const GET_FIRST_FAIL = 'likemark/children/GET_FIRST_FAIL'

const ADD = 'likemark/children/ADD'
const TOGGLE = 'likemark/children/TOGGLE'

// REDUCER
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

// ACTION CREATORS
export function addChild (name) {
  nextTodoId += 1

  return {
    type: ADD,
    id: nextTodoId,
    name
  }
}

export function toggleChild (id) {
  return { type: TOGGLE, id }
}

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
