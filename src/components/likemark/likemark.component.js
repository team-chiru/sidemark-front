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
  menuVisibility: boolean,
  setLanguage: Function,
  handleLikemarkClick: (likemarkId: number) => void,
  toggleMenuVisibility: () => void,
  setMenuVisibility: (menuVisibility: boolean) => void,
  languageOptions: Object,
  translationObject: Object
}

const Likemark = ({
  likemark, menuVisibility, setLanguage, handleLikemarkClick,
  toggleMenuVisibility, setMenuVisibility, languageOptions, translationObject
}: Props) => (
  <div className='likemark'>
    <LikemarkMenu {...{menuVisibility, setLanguage, languageOptions, translationObject: translationObject.likemarkMenu}}>
      <LikemarkHeader {...{likemark, handleLikemarkClick, toggleMenuVisibility}} />
      <LikemarkChildren {...{likemarkChildren: likemark.children, handleLikemarkClick}} />
    </LikemarkMenu>
  </div>
)

export default Likemark
