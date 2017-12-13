import {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class Likemark extends Component {
  render () {
    return (
      <div id='likemark'>
        <h1>Likemark</h1>
      </div>
    )
  }
}

Likemark.propTypes = {}

export default connect(
  state => ({ children: state.children })//,
  //dispatch => bindActionCreators({ change }, dispatch)
)(Likemark)
