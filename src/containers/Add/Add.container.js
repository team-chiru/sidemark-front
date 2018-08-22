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
import { postAndFetchLikemark } from 'store/likemark/likemark'

// Models
import type {Likemark as LikemarkType} from 'models/likemark'

// Main Component
type Props = {
  currentLikemark: LikemarkType,
  children?: React.Node,
  translationObject: any,
  setLocale: Function,
  history?: Object,
  onSubmit: Function,
  closeAddModal: Function,
  postAndFetchLikemark: (likemark: LikemarkType, id: number) => ActionType,
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
    const { closeAddModal, currentLikemark, postAndFetchLikemark } = this.props

    if (currentLikemark && values.title && values.url) {
      const newLikemark: LikemarkType = {
        id: -1,
        parentId: currentLikemark.id,
        title: values.title,
        url: values.url,
        children: []
      }

      // Insert new Likemark into database.
      closeAddModal()
      postAndFetchLikemark(newLikemark, currentLikemark.id)
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
  dispatch => bindActionCreators({ postAndFetchLikemark, setLocale }, dispatch)
)(Add)
