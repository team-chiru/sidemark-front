/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import LikemarkHeader from '../likemark-header/likemark-header.component'
import LikemarkMenu from '../likemark-menu/likemark-menu.component'
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Assets
import './likemark.scss'

// Main Component
type Props = {
  likemark: LikemarkType,
  menuVisibility: boolean,
  handleLikemarkClick: (likemarkId: number) => void,
  toggleMenuVisibility: () => void,
  setMenuVisibility: (menuVisibility: boolean) => void
}

const Likemark = ({likemark, menuVisibility, handleLikemarkClick, toggleMenuVisibility, setMenuVisibility}: Props) => (
  <div className='likemark'>
    <LikemarkMenu {...{menuVisibility}}>
      <LikemarkHeader {...{likemark, handleLikemarkClick, toggleMenuVisibility}} />
      <LikemarkChildren {...{likemarkChildren: likemark.children, handleLikemarkClick}} />
    </LikemarkMenu>
  </div>
)

export default Likemark
