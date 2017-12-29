/* @flow */

// Dependencies
import React from 'react'
import SmoothCollapse from 'react-smooth-collapse'

// Assets
import './likemark-child.scss'

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
    <div className='likemark-child item'>
      <div>
        <i className={`likemark-child-icon angle icon large ${expandedDetails ? 'up' : 'down'}`} onClick={toggleDetailsVisibilty} />
      </div>
      <div className='content'>
        <div className='likemark-child-content' onClick={handleLikemarkClick}>
          <div className='likemark-child-header'>
            <h3 className='header'>{likemarkChild.name}</h3>
          </div>
          <SmoothCollapse expanded={expandedDetails}>
            <div className='likemark-child-details'>
              <p>ID: {likemarkChild.id}</p>
              <p>URL: {likemarkChild.url}</p>
            </div>
          </SmoothCollapse>
        </div>
        <div className='likemark-child-menu'>
          <i className={`likemark-child-icon angle icon large ellipsis vertical`} onClick={() => console.log(likemarkChild.name + ' options')} />
        </div>
      </div>
    </div>
  )
}

export default LikemarkChild
