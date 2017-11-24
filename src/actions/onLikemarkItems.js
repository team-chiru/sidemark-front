let nextTodoId = 0

export const add = (name) => {
  nextTodoId += 1

  return {
    type: 'ADD_LIKEMARK_ITEM',
    id: nextTodoId,
    name
  }
}

export const remove = (id) => ({
  type: 'REMOVE_LIKEMARK_ITEM', id
})

export const toggle = (id) => ({
  type: 'TOGGLE_LIKEMARK_ITEM', id
})
