/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import { Icon } from 'semantic-ui-react'

// Assets
import './likemark-header.scss'

// Helpers
const checkPrefix = (url: string) => url.match(/http:\/\//g) || url.match(/https:\/\//g)

// Main Component
type Props = {
  likemark: LikemarkType,
  handleLikemarkClick: Function,
  toggleMenuVisibility: Function
}

const LikemarkHeader = ({likemark, handleLikemarkClick, toggleMenuVisibility}: Props) => (
  <div className='likemark-header'>
    <div className='header-item'>
      <div className='header-btn-container'>
        { likemark && likemark.parentId !== -1 &&
          <Icon
            name='arrow left'
            size='large'
            className={`${likemark.parentId ? 'back-btn' : 'invisible'}`}
            onClick={() => handleLikemarkClick(likemark.parentId)}
          />
        }
      </div>
      <h2> { likemark.id ? likemark.name : 'Root' } </h2>
    </div>
    <div className='header-item'>
      <div className='header-btn-container'>
        <a target='_blank' href={`${checkPrefix(likemark.url) ? likemark.url : 'http://' + likemark.url}`}>
          <Icon name='share' size='large' />
        </a>
      </div>
      <div className='header-btn-container'>
        <Icon name='bars' size='large' onClick={toggleMenuVisibility} />
      </div>
    </div>
  </div>
)

export default LikemarkHeader
