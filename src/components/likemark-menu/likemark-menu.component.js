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

type Props = {
  children?: React.Node,
  menuVisibility: boolean,
  setLanguage: Function,
  languageOptions: Object,
  translationObject: Object
}

const LikemarkMenu = ({children, menuVisibility, setLanguage, languageOptions, translationObject}: Props) => {
  return (
      <Sidebar.Pushable as={Segment}>
        <div className='likemark-menu'>
          <Sidebar as={Menu} animation='push' direction='top' visible={menuVisibility} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              {translationObject.home}
            </Menu.Item>
            <Menu.Item name='add'>
              <Icon name='add' />
              {translationObject.add}
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='settings' />
              {translationObject.settings}
            </Menu.Item>
            <Menu.Item name='language'>
              <Dropdown
                placeholder={translationObject.language}
                fluid
                search
                selection
                options={languageOptions}
                onChange={(e, data) => setLanguage(data.value)}
              />
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
