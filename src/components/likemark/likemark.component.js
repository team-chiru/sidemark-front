/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Components
import LikemarkHeader from '../likemark-header/likemark-header.component'
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Assets
import './likemark.scss'

// Main Component
/**
 * Likemark presentational component which is responsable for the UI.
 * @property {LikemarkType} props.likemark - The current likemark.
 * @property {boolean} props.menuVisibility - Flag who determines the visibility of the menu component.
 * @property {Function} props.handleLikemarkClick - The function which trigger the state update when a likemark child is selected.
 * @property {Function} props.toggleMenuVisibility - The function which switch the visibility of the menu component.
 * @property {Function} props.setMenuVisibility - The function which set the visibility of the menu component.
 */

type Props = {
  likemark: LikemarkType,
  handleLikemarkClick: (likemarkId: number) => void,
  translationObject: Object
}

const Likemark = ({likemark, handleLikemarkClick, translationObject}: Props) => (
  <div className='likemark'>
    <LikemarkHeader {...{likemark, handleLikemarkClick}} />
    <LikemarkChildren {...{likemarkChildren: likemark.children, handleLikemarkClick}} />
  </div>
)

export default Likemark