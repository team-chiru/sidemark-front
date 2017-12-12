// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import mainReducer from './ducks/index'
import { getFirstChildren } from './ducks/children'

// Root
import Root from './root/root.component'

// Config
import registerServiceWorker from './registerServiceWorker'

// Assets
import './App.css'
import './index.css'
import 'antd/dist/antd.css'

const client = axios.create({
  baseURL: 'http://localhost:42506/likemark',
  responseType: 'json'
})

const store = createStore(
  mainReducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
)

store.dispatch(getFirstChildren(0))

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
