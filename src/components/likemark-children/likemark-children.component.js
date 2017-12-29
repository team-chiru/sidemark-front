/* @flow */

// Dependencies
import * as React from 'react'

// Components
import LikemarkChild from 'containers/likemark-child/likemark-child.container'

// Assets
import './likemark-children.scss'

// Main Component
/**
 * Display the Likemark Children as a list component.
 * @property {Array<Object>} props.likemarkChildren - The likemark children to display.
 * @property {Function} props.handleLikemarkClick - The function which trigger the state update when a likemark child is selected.
 */

type Props = {
  handleLikemarkClick: (likemarkId: number) => void,
  likemarkChildren: Array<{id: number, name: string, parentId: number, url: string}>
}

export const LikemarkChildren = ({likemarkChildren, handleLikemarkClick}: Props) => {
  return (
    <div id='likemark-children-wrapper'>
      <div id='likemark-children' className='ui celled list'>
        {
          likemarkChildren.map(likemarkChild =>
            <LikemarkChild {...{
              key: likemarkChild.id,
              likemarkChild,
              handleLikemarkClick: () => handleLikemarkClick(likemarkChild.id)
            }}
            />
          )
        }
      </div>
    </div>
  )
}

export default LikemarkChildren
