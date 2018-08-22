/* @flow */

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {I18n, setLocale} from 'react-redux-i18n'
import Modal from 'react-modal'

// Components
import LikemarkMenuUI from 'components/Menu/Menu.component'
import Add from 'containers/Add/Add.container'

// Main Component
type Props = {
  likemark: Object,
  children?: React.Node,
  translationObject: Object,
  setLocale: Function,
  history?: Object
}

type State = {
  menuVisibility: boolean,
  modalIsOpen: boolean
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export class LikemarkMenu extends React.Component<Props, State> {
  constructor (props: Props, context: any) {
    super(props, context)
    this.state = {
      menuVisibility: false,
      modalIsOpen: false
    }
  }

  toggleMenuVisibility (): void {
    this.setState({ menuVisibility: !this.state.menuVisibility })
  }

  openAddModal (): void {
    this.setState({modalIsOpen: true})
  }

  afterOpenAddModal (): void {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00'
  }

  closeAddModal (): void {
    this.setState({modalIsOpen: false})
  }

  render () {
    console.log('LikemarkMenu: ', I18n.t('likemark.likemarkMenu'))
    return (
      <div>
        <LikemarkMenuUI {...{
          ...this.props,
          menuVisibility: this.state.menuVisibility,
          toggleMenuVisibility: this.toggleMenuVisibility.bind(this),
          translationObject: I18n.t('likemark.likemarkMenu'),
          openAddModal: this.openAddModal.bind(this)
        }} />

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenAddModal.bind(this)}
          onRequestClose={this.closeAddModal.bind(this)}
          style={customStyles}
          contentLabel='Add Likemark Modal'>
          <Add
            currentLikemark={this.props.likemark}
            translationObject={I18n.t('likemark')}
            closeAddModal={this.closeAddModal.bind(this)}
          />
        </Modal>
      </div>
    )
  }
}

export default connect(
  (state): Object => ({ likemark: state.likemark }),
  dispatch => bindActionCreators({ setLocale }, dispatch)
)(LikemarkMenu)
