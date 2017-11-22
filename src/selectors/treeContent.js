import { createSelector } from 'reselect'

const getTreeContent = (state) => state.root

export const canUndo = createSelector(
  [ getTreeContent ],
  (root) => { return root.past.length > 0 }
)

export const canRedo = createSelector(
  [ getTreeContent ],
  (root) => { return root.future.length > 0 }
)
