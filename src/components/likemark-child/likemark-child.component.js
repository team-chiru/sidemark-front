/* @flow */

// Dependencies
import React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import { List, Icon, Image } from 'semantic-ui-react'
import SmoothCollapse from 'react-smooth-collapse'
import LikemarkDetails from 'components/likemark-details/likemark-details.component'

// Services
import {utils} from 'services'

// Assets
import './likemark-child.scss'

// Main component
/**
 * Display a Likemark Child component.
 * @property {Function} props.handleLikemarkClick - The function which trigger the state update when a likemark child is selected.
 * @property {LikemarkType} props.likemarkChild - The likemark child object.
 * @property {Function} props.toggleMenuVisibility - The function which switch the visibility of the menu component.
 * @property {boolean} props.expandedDetails - Flag who determines if the details is expanded.
 */

type Props = {
  handleLikemarkClick: (likemarkId: number) => void,
  likemarkChild: LikemarkType,
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
            <Image avatar src={utils.iconGeneratorByURL(likemarkChild.url)} />
            <h3 className='header'>{likemarkChild.name}</h3>
          </div>
          <SmoothCollapse expanded={expandedDetails}>
            <LikemarkDetails likemark={likemarkChild} />
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
