import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-ui-button/button.min.css'
import { Button } from 'semantic-ui-react'

import './app.css'

function tick () {
  ReactDOM.render(
    <div>
      <h1>Hello world!</h1>
      <Button primary>
        {new Date().toLocaleTimeString()}
      </Button>
    </div>,
    document.body
  )
}

setInterval(tick, 1000)
