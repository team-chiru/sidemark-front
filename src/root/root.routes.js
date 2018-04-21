// @flow

// Dependencies
import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

// Pages
import Home from 'pages/Home/Home.component'
import Settings from 'pages/Settings/Settings.container'
import NoMatch from 'pages/NoMatch/NoMatch.component'

// Main Component
export default () => (
  <div id='routes'>
    <div>
      {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    </div>
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route path='/home' component={Home} />
      <Route path='/settings' component={Settings} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)
