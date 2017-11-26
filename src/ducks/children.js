let nextTodoId = 0

// ACTIONS
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
