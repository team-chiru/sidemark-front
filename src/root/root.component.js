// @flow

// Dependencies
import React from 'react'

// Components
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import GeneralLayout from 'pages/general-layout/general-layout.component'
import Routes from './root.routes'

// Main Component

const Root = ({store}: {store: Object}) => (
  <Provider {...{store}}>
    <Router onUpdate={() => window.scrollTo(0, 0)}>
      <GeneralLayout>
        <Routes />
      </GeneralLayout>
    </Router>
  </Provider>
)

export default Root
