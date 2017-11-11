import _ from 'lodash'

import './app.css'
import printMe from './print.js'

function component () {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Click on me'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
