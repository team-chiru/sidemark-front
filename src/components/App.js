import React from 'react'

import { Layout } from 'antd'

import EditMenu from '../containers/EditMenu'
import LikemarkTreeView from '../containers/LikemarkTreeView'

const App = () => (
  <Layout>
    <Layout.Header>
      <EditMenu />
    </Layout.Header>
    <Layout.Content>
      <LikemarkTreeView />
    </Layout.Content>
  </Layout>
)

export default App
