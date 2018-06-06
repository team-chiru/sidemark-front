/* @flow */

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {I18n, setLocale} from 'react-redux-i18n'
import { ReduxAddForm } from '../../components/Add/AddForm-Redux/AddForm-redux.component'

// Type
import type {Action as ActionType} from 'models/action'

// Action Creators
import { postLikemark } from 'store/likemark/likemark'

// Main Component
type Props = {
  currentLikemark: Object,
  children?: React.Node,
  translationObject: any,
  setLocale: Function,
  history?: Object,
  onSubmit: Function,
  closeAddModal: Function,
  postLikemark: (likemark: Object) => ActionType
}

type State = {
  addVisibility: boolean
}

export class Add extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      addVisibility: false
    }
  }

  toggleAddFormVisibility (): void {
    this.setState({ addVisibility: !this.state.addVisibility })
  }

  onSubmit (values: Object): void {
    if (this.props.currentLikemark && values.title && values.url) {
      const { id } = this.props.currentLikemark
      const newLikemark = {
        parentId: id,
        title: values.title,
        url: values.url
      }
      // Insert new Likemark into database.
      postLikemark(newLikemark)
      // TODO: Make refresh after creation
    } else {
      console.log('Likemark do not exist or trying to create a likemark with empty values')
    }
  }

  render () {
    console.log('Add Likemark: ', I18n.t('likemark.addForm'))
    return (
      <ReduxAddForm
        onSubmit={this.onSubmit.bind(this)}
        closeAddModal={this.props.closeAddModal}
      />
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setLocale }, dispatch)
)(Add)
