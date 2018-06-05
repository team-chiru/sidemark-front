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
  children?: React.Node,
  translationObject: any,
  setLocale: Function,
  history?: Object,
  postLikemark: (likemark: Object) => ActionType,
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

  onSubmit (values): void {
    console.log(values)
    // TODO : Take current Likemark id for new likemark parentId
    const newLikemark = {
      parentId: 'e0ddda7d-d78b-43f4-a509-f5bade835964', // will be dynamic
      title: values.title,
      url: values.url
    }
    // Insert new Likemark into database.
    postLikemark(newLikemark)
    // TODO: Make refresh after creation
  }

  render () {
    console.log('Add Likemark: ', I18n.t('likemark.addForm'))
    return (
      <ReduxAddForm
        onSubmit={this.onSubmit}
      />
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setLocale }, dispatch)
)(Add)
