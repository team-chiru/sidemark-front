import { createSelector } from 'reselect'

const getChildren = (state) => state.children

export const canUndo = createSelector(
  [ getChildren ],
  (children) => { return children.past.length > 0 }
)

export const canRedo = createSelector(
  [ getChildren ],
  (children) => { return children.future.length > 0 }
)
