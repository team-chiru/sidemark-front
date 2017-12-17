// Dependencies
import React from 'react'

// Components
import LikemarkHeader from '../likemark-header/likemark-header.component'
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Main Component
const Likemark = ({likemark = {}, handleLikemarkClick = null}) => (
  <div className='likemark'>
    <LikemarkHeader {...{likemark, handleLikemarkClick}} />
    <LikemarkChildren {...{children: likemark.children, handleLikemarkClick}} />
  </div>
)

export default Likemark
