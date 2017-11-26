import React, { Component } from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { Layout } from 'antd'

import EditMenu from './containers/EditMenu'
import LikemarkTreeView from './containers/LikemarkTreeView'

import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'

const store = createStore(reducer)

class App extends Component {
  render () {
    return (
      <Provider className='App' store={store}>
        <Layout>
          <Layout.Header>
            <img src={logo} className='App-logo' alt='logo' />
            <EditMenu />
          </Layout.Header>
          <Layout.Content>
            <LikemarkTreeView />
          </Layout.Content>
        </Layout>
      </Provider>
    )
  }
}

export default App
