/* @flow */

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'

// Components
import LikemarkMenu from '~/containers/likemark-menu/likemark-menu.container'
// Assets
import './general-layout.scss'

// Main Component
type Props = {
  children?: React.Node,
  language: string,
  history: Object
}

const GeneralLayout = ({children, language, history}: Props) => (
  <div className='general-layout'>
    <LikemarkMenu {...{language}}>
      {React.Children.map(children, child => React.cloneElement(child, {...{language}}))}
    </LikemarkMenu>
  </div>
)

export default connect(
  (state): Object => ({ language: state.i18n.locale })
)(GeneralLayout)
