/* @flow */

// Dependencies
import React from 'react'

// Components
import LikemarkHeader from '../likemark-header/likemark-header.component'
import LikemarkMenu from '../likemark-menu/likemark-menu.component'
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Assets
import './likemark.scss'

// Main Component
const Likemark = ({
  likemark, menuVisibility, handleLikemarkClick, toggleMenuVisibility, setMenuVisibility
}: {
  likemark: Object, menuVisibility: boolean, handleLikemarkClick: Function,
  toggleMenuVisibility: Function, setMenuVisibility: Function
}) => (
  <div className='likemark'>
    <LikemarkHeader {...{likemark, handleLikemarkClick, toggleMenuVisibility}} />
    <LikemarkMenu {...{menuVisibility}}>
      <LikemarkChildren {...{children: likemark.children, handleLikemarkClick}} />
    </LikemarkMenu>
  </div>
)

export default Likemark
