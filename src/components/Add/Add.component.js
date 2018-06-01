/* @flow */

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {I18n, setLocale} from 'react-redux-i18n'

// Main Component
type Props = {
  children?: React.Node,
  translationObject: Object,
  setLocale: Function,
  history?: Object
}

type State = {
  addVisibility: boolean
}

export class AddForm extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      addVisibility: false
    }
  }

  toggleAddFormVisibility (): void {
    this.setState({ addVisibility: !this.state.addVisibility })
  }

  render () {
    console.log('Add Likemark: ', I18n.t('likemark.addForm'))
    return (
      <div>
        <h1>{this.props.translationObject.title}</h1>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setLocale }, dispatch)
)(AddForm)
