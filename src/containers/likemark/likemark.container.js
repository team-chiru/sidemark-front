/* @flow */
/*
  Flow and Standard JS - 'no-undef' for global flow types issues:
  - https://github.com/eslint/eslint/issues/4741
  - https://github.com/babel/babel-eslint#known-issues
  - https://standardjs.com/#i-use-a-library-that-pollutes-the-global-namespace-how-do-i-prevent-variable-is-not-defined-errors
*/

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {setLocale} from 'react-redux-i18n';

// Components
import LikemarkUI from 'components/likemark/likemark.component'

// Models
import type {Action as ActionType} from 'models/action'
import type {Likemark as LikemarkType} from 'models/likemark'

// Action Creators
import { getWithFirstChildren } from 'store/likemark/likemark'

// Main Component
/**
 * Likemark presentational component which is responsable for the UI.
 * @property {LikemarkType} props.likemark - The current likemark.
 * @property {Function} props.getWithFirstChildren - The function which fetch a new likemark.
 */

type Props = {
  likemark: LikemarkType,
  getWithFirstChildren: (likemarkId: number) => ActionType,
  setLocale: Function
}

type State = {
  menuVisibility: boolean
}

export class Likemark extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      menuVisibility: false
    }
  }

  componentWillMount (): void {
    this.props.getWithFirstChildren(this.props.likemark.id)
  }

  toggleMenuVisibility (): void {
    this.setState({ menuVisibility: !this.state.menuVisibility })
  }

  handleLikemarkClick (likemarkId: number): void {
    likemarkId !== -1
      ? this.props.getWithFirstChildren(likemarkId)
      : console.log('Already on Root')
  }

  render () {
    return (
      <LikemarkUI
        likemark={this.props.likemark}
        menuVisibility={this.state.menuVisibility}
        setLanguage={this.props.setLocale}
        handleLikemarkClick={this.handleLikemarkClick.bind(this)}
        toggleMenuVisibility={this.toggleMenuVisibility.bind(this)}
        setMenuVisibility={(menuVisibility) => this.setState({menuVisibility})}
      />
    )
  }
}

export default connect(
  state => ({ likemark: state.likemark }),
  dispatch => bindActionCreators({ getWithFirstChildren, setLocale }, dispatch)
)(Likemark)
