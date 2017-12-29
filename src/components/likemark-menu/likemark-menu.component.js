// Dependencies
import React from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

// Assets
import './likemark-menu.scss'

// Main Component
const LikemarkMenu = ({children, menuVisibility}) => {
  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar as={Menu} animation='push' direction='top' visible={menuVisibility} inverted>
        <Menu.Item name='home'>
          <Icon name='home' />
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
