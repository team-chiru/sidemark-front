/* @flow */

// Dependencies
import * as React from 'react'

// Components
import LikemarkHeader from '../likemark-header/likemark-header.component'
import LikemarkMenu from '../likemark-menu/likemark-menu.component'
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Assets
import './likemark.scss'

// Main Component
type Props = {
  likemark: Object,
  menuVisibility: boolean,
  handleLikemarkClick: Function,
  toggleMenuVisibility: Function,
  setMenuVisibility: Function
}

const Likemark = ({likemark, menuVisibility, handleLikemarkClick, toggleMenuVisibility, setMenuVisibility}: Props) => (
  <div className='likemark'>
    <LikemarkHeader {...{likemark, handleLikemarkClick, toggleMenuVisibility}} />
    <LikemarkMenu {...{menuVisibility}}>
      <LikemarkChildren {...{likemarkChildren: likemark.children, handleLikemarkClick}} />
    </LikemarkMenu>
  </div>
)

export default Likemark
