// Dependencies
import React from 'react'
import { Layout } from 'antd'

// Components
import DebugContainer from '../../containers/DebugContainer'
import LikemarkContainer from '../../containers/LikemarkContainer'

// Assets
import logo from '../../logo.svg'

// Main Component
const Home = (props) => (
  <div id='home-page'>
    <Layout>
      <Layout.Header>
        <img src={logo} className='app-logo' alt='logo' />
        <DebugContainer />
      </Layout.Header>
      <Layout.Content>
        <LikemarkContainer />
      </Layout.Content>
    </Layout>
  </div>
)

export default Home
