// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// Components
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './root.routes'

// Main Component
const Root = (props) => (
  <Provider store={props.store}>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Routes />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
