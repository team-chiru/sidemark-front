/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import { List } from 'semantic-ui-react'
import LikemarkChild from 'containers/Child/Child.container'

// Assets
import './Children.scss'

// Main Component
/**
 * Display the Likemark Children as a list component.
 * @property {Array<LikemarkType>} props.likemarkChildren - The likemark children to display.
 * @property {Function} props.handleLikemarkClick - The function which trigger the state update when a likemark child is selected.
 */

type Props = {
  handleLikemarkClick: (likemarkId: number) => void,
  likemarkChildren: Array<LikemarkType>
}

export const LikemarkChildren = ({likemarkChildren, handleLikemarkClick}: Props) => {
  return (
    <div id='likemark-children-wrapper'>
      <div id='likemark-children'>
        <List celled >
          {
            likemarkChildren.map(likemarkChild =>
              <LikemarkChild
                key={likemarkChild.id}
                {...{
                  likemarkChild,
                  handleLikemarkClick: () => handleLikemarkClick(likemarkChild.id)
                }}
              />
            )
          }
        </List>
      </div>
    </div>
  )
}

export default LikemarkChildren
