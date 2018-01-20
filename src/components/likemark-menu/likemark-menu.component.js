/* @flow */

// Dependencies
import * as React from 'react'
import { Sidebar, Segment, Menu, Icon, Dropdown } from 'semantic-ui-react'
// Assets
import './likemark-menu.scss'

// Main Component
/**
 * Display the likemark menu.
 * @property {boolean} props.menuVisibility - Flag who determines the visibility of the menu component.
 * @property {React.Node} props.children - Possible React children components.
 */

 const countryOptions = [
   { key: 'gb', value: 'gb', flag: 'gb', text: 'English' },
   { key: 'pt', value: 'pt', flag: 'pt', text: 'Portuguese' },
   { key: 'fr', value: 'fr', flag: 'fr', text: 'French' },
   { key: 'es', value: 'es', flag: 'es', text: 'Spanish' }
  ]

type Props = {
  children?: React.Node,
  menuVisibility: boolean,
  setLanguage: Function
}

const LikemarkMenu = ({children, menuVisibility, setLanguage}: Props) => {
  return (
      <Sidebar.Pushable as={Segment}>
        <div className='likemark-menu'>
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
            <Menu.Item name='home'>
              <Dropdown placeholder='Language' fluid search selection options={countryOptions} onChange={(e, data) => setLanguage(data.value)}/>
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
