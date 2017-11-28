import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import mainReducer from './ducks/index'

import { Layout } from 'antd'

import EditMenu from './containers/EditMenu'
import LikemarkContainer from './containers/LikemarkContainer'

import { getFirstChildren } from './ducks/children'

import logo from './logo.svg'
import './App.css'
import 'antd/dist/antd.css'

const client = axios.create({
  baseURL:'http://localhost:42506/likemark',
  responseType: 'json'
});

const store = createStore(
  mainReducer,
  applyMiddleware(
    axiosMiddleware(client)
  )
)

store.dispatch(getFirstChildren(0))

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
