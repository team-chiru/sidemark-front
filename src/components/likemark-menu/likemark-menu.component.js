/* @flow */

// Dependencies
import * as React from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

// Assets
import './likemark-menu.scss'

// Main Component
/**
 * Display the likemark menu.
 * @property {boolean} props.menuVisibility - Flag who determines the visibility of the menu component.
 * @property {React.Node} props.children - Possible React children components.
 */

type Props = {
  children?: React.Node,
  menuVisibility: boolean
}

const LikemarkMenu = ({children, menuVisibility}: Props) => {
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
