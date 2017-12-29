/* @flow */

// Dependencies
import React from 'react'

// Components
import { List, Icon, Image } from 'semantic-ui-react'
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
    <List.Item className='likemark-child'>
      <Icon
        name={`angle ${expandedDetails ? 'up' : 'down'}`}
        size='large'
        className='likemark-child-icon'
        onClick={toggleDetailsVisibilty}
      />
      <List.Content>
        <div className='likemark-child-content likemark-child-menu' onClick={handleLikemarkClick}>
          <div className='likemark-child-header'>
            <Image avatar src={'https://www.google.com/s2/favicons?domain=' + likemarkChild.url} />
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
          <Icon
            name='ellipsis vertical'
            size='large'
            className='likemark-child-icon'
            onClick={() => console.log(likemarkChild.name + ' options')}
          />
        </div>
      </List.Content>
    </List.Item>
  )
}

export default LikemarkChild
