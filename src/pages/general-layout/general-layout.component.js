// Dependencies
import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

// Assets
import './general-layout.scss'

// Main Component
const GeneralLayout = (props) => (
  <div className='general-layout'>
    <div className='menu'>
      <Sidebar as={Menu} animation='push' width='thin' visible icon='labeled' vertical inverted>
        <Menu.Item name='home'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item name='add circle'>
          <Icon name='add circle' />
          Add
        </Menu.Item>
      </Sidebar>
    </div>
    <div className='current-page'>
      {props.children}
    </div>

  </div>
)

export default GeneralLayout
