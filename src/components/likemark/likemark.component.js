// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import LikemarkHeader from '../likemark-header/likemark-header.component'
import LikemarkMenu from '../likemark-menu/likemark-menu.component'
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Assets
import './likemark.scss'

// Main Component
const Likemark = ({likemark, menuVisibility, handleLikemarkClick, toggleMenuVisibility, setMenuVisibility}) => (
  <div className='likemark'>
    <LikemarkHeader {...{likemark, handleLikemarkClick, toggleMenuVisibility}} />
    <LikemarkMenu {...{menuVisibility}}>
      <LikemarkChildren {...{children: likemark.children, handleLikemarkClick}} />
    </LikemarkMenu>
  </div>
)

Likemark.propTypes = {
  likemark: PropTypes.object.isRequired,
  menuVisibility: PropTypes.bool.isRequired,
  handleLikemarkClick: PropTypes.func.isRequired,
  toggleMenuVisibility: PropTypes.func.isRequired,
  setMenuVisibility: PropTypes.func.isRequired
}

export default Likemark
