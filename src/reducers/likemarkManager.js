import undoable from 'redux-undo'

const manageLikemark = (state, action) => {
  switch (action.type) {
    case 'ADD_LIKEMARK_ITEM':
      return {
        id: action.id,
        name: action.name
      }

    case 'TOGGLE_LIKEMARK_ITEM':
      if (state.id === action.id) {
        console.log(state.id)
      }

      return state

    default:
      return state
  }
}

const manageLikemarks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIKEMARK_ITEM':
      return [
        ...state,
        manageLikemark(undefined, action)
      ]
    case 'TOGGLE_LIKEMARK_ITEM':
      return state.map(t =>
        manageLikemark(t, action)
      )
    default:
      return state
  }
}

const undoableManager = undoable(manageLikemarks)

export default undoableManager
