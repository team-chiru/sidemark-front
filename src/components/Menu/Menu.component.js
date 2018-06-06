/* @flow */

// Dependencies
import * as React from 'react'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

// Assets
import './Menu.scss'

// Main Component
/**
 * Display the likemark menu.
 * @property {boolean} props.menuVisibility - Flag who determines the visibility of the menu component.
 * @property {React.Node} props.children - Possible React children components.
 */

type Props = {
  children?: React.Node,
  menuVisibility: boolean,
  translationObject: Object,
  openAddModal: Function
}

const LikemarkMenu = ({children, menuVisibility, translationObject, openAddModal}: Props) => {
  return (
    <Sidebar.Pushable as={Segment}>
      <div className='likemark-menu'>
        <Sidebar as={Menu} animation='push' direction='top' visible inverted>
          <Menu.Item name='home'>
            <Icon name='home' />
            {translationObject.home}
          </Menu.Item>
          <Menu.Item name='add' onClick={openAddModal}>
            <Icon name='add' />
            {translationObject.add}
          </Menu.Item>
          <Menu.Item name='settings'>
            <Icon name='settings' />
            {translationObject.settings}
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic>
            {children}
          </Segment>
        </Sidebar.Pusher>
      </div>
    </Sidebar.Pushable>
  )
}

export default LikemarkMenu
