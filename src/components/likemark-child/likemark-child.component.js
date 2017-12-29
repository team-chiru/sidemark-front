/* @flow */

// Dependencies
import React from 'react'
import SmoothCollapse from 'react-smooth-collapse'

// Main component
/**
 * Display a Likemark Child component.
 * @property {Function} props.handleLikemarkClick - Updates the likemark state.
 * @property {Object} props.likemarkChild - The child  object.
 * @property {Function} props.toggleDetailsVisibilty - Switch the likemark details visibility state.
 * @property {boolean} props.expandedDetails - Variable who determines if the details is expanded.
 */
type Props = {
  handleLikemarkClick: (likemarkId: number) => void,
  likemarkChild: {id: number, name: string, parentId: number, url: string},
  toggleDetailsVisibilty: () => void,
  expandedDetails: boolean
}

export const LikemarkChild = ({handleLikemarkClick, likemarkChild, toggleDetailsVisibilty, expandedDetails}: Props) => {
  return (
    <li className='likemark-child'>
      <div className='likemark-child-header' style={{display: 'flex'}}>
        <button onClick={toggleDetailsVisibilty}>toggle</button>
        <div onClick={handleLikemarkClick}>{likemarkChild.name}</div>
      </div>
      <SmoothCollapse expanded={expandedDetails}>
        <div className='likemark-child-details' style={{marginLeft: '15px'}}>
          <p>ID: {likemarkChild.id}</p>
          <p>URL: {likemarkChild.url}</p>
        </div>
      </SmoothCollapse>
    </li>
  )
}

export default LikemarkChild
