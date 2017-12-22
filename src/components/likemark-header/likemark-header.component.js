// Dependencies
import React from 'react'

// Components
import { Icon } from 'semantic-ui-react'

// Assets
import './likemark-header.scss'

// Helpers
const checkPrefix = (url) => url.match(/http:\/\//g) || url.match(/https:\/\//g)

// Main Component
const LikemarkHeader = ({likemark = {}, handleLikemarkClick = null}) => (
  <div className='likemark-header'>
    <div className='header-item'>
      <div className='header-btn-container'>
        { likemark.parentId !== -1 &&
          <Icon
            name='arrow left'
            size='big'
            className={`${likemark.parentId ? 'back-btn' : 'invisible'}`}
            onClick={() => handleLikemarkClick(likemark.parentId)}
          />
        }
      </div>
      <h1> { likemark.id ? likemark.name : 'Root' } </h1>
    </div>
    <div className='header-item'>
      <div className='header-btn-container'>
        <a href={`${checkPrefix(likemark.url) ? likemark.url : 'http://' + likemark.url}`}>
          <Icon
            name='arrow right'
            size='big'
            onClick={() => console.log('go')}
          />
        </a>
      </div>
    </div>
  </div>
)

export default LikemarkHeader
