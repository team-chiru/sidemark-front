// Dependencies
import React from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

// Assets
import './likemark-menu.scss'

// Main Component
const LikemarkMenu = ({children, menuVisibility}) => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='scale down' direction='top' size='tiny' visible={menuVisibility} icon='labeled' inverted>
        <Menu.Item name='home' size='mini'>
          <Icon name='home' size='mini' />
          Home
        </Menu.Item>
        <Menu.Item name='add'>
          <Icon name='add' />
          Add
        </Menu.Item>
        <Menu.Item name='settings'>
          <Icon name='settings' />
          Settings
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default LikemarkMenu
