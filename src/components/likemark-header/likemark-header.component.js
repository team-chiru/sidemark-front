/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import {Icon} from 'semantic-ui-react'
import LikemarkDetails from 'components/likemark-details/likemark-details.component'

// Services
import {utils} from 'services'

// Assets
import './likemark-header.scss'

// Main Component
/**
 * Display the likemark header.
 * @property {LikemarkType} props.likemark - The current likemark.
 * @property {Function} props.handleLikemarkClick - The function which trigger the state update when a likemark child is selected.
 * @property {Function} props.toggleMenuVisibility - The function which switch the visibility of the menu component.
 */

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
      <div>
        <h2> { likemark.id ? likemark.name : 'Root' } </h2>
        <LikemarkDetails {...{likemark}} />
      </div>
    </div>
    <div className='header-item'>
      <div className='header-btn-container'>
        <a target='_blank' href={`${utils.checkPrefix(likemark.url) ? likemark.url : 'http://' + likemark.url}`}>
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
