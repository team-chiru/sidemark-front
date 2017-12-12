// Dependencies
import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

// Pages
import Home from '../pages/home/home.component'
import NoMatch from '../pages/no-match/no-match.component'

// Main Component
export default () => (
  <div id='routes'>
    <div>
      {window.location.pathname.includes('index.html') && <Redirect to='/' />}
    </div>
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route path='/home' component={Home} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)
