let nextTodoId = 0

export const add = (name) => ({
  type: 'ADD_LIKEMARK_ITEM',
  id: nextTodoId ? nextTodoId++ : 0,
  name
})

export const remove = (id) => ({
  type: 'REMOVE_LIKEMARK_ITEM', id
})

export const toggle = (id) => ({
  type: 'TOGGLE_LIKEMARK_ITEM', id
})
