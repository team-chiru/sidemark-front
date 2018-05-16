/* @flow */

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {I18n, setLocale} from 'react-redux-i18n'

// Components
import LikemarkMenuUI from '~/components/likemark-menu/likemark-menu.component'

// Main Component
type Props = {
  children?: React.Node,
  translationObject: Object,
  setLocale: Function,
  history?: Object
}

type State = {
  menuVisibility: boolean
}

export class LikemarkMenu extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      menuVisibility: false
    }
  }

  toggleMenuVisibility (): void {
    this.setState({ menuVisibility: !this.state.menuVisibility })
  }

  render () {
    console.log('LikemarkMenu: ', I18n.t('likemark.likemarkMenu'))
    return (
      <LikemarkMenuUI {...{
        ...this.props,
        menuVisibility: this.state.menuVisibility,
        toggleMenuVisibility: this.toggleMenuVisibility.bind(this),
        translationObject: I18n.t('likemark.likemarkMenu')
      }} />
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setLocale }, dispatch)
)(LikemarkMenu)
