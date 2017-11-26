import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import mainReducer from './ducks/index'

import { Layout } from 'antd'

import EditMenu from './containers/EditMenu'
import LikemarkContainer from './containers/LikemarkContainer'

import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'

const store = createStore(mainReducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider className='App' store={store}>
        <Layout>
          <Layout.Header>
            <img src={logo} className='App-logo' alt='logo' />
            <EditMenu />
          </Layout.Header>
          <Layout.Content>
            <LikemarkContainer />
          </Layout.Content>
        </Layout>
      </Provider>
    )
  }
}
