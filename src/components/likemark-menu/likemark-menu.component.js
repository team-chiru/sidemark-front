/* @flow */

// Dependencies
import * as React from 'react'
import {I18n} from 'react-redux-i18n'
import { Sidebar, Segment, Menu, Icon, Dropdown } from 'semantic-ui-react'

// i18n translations
import {languageOptions} from 'services/i18n';

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
  setLanguage: Function
}

const LikemarkMenu = ({children, menuVisibility, setLanguage}: Props) => {
  return (
      <Sidebar.Pushable as={Segment}>
        <div className='likemark-menu'>
          <Sidebar as={Menu} animation='push' direction='top' visible={menuVisibility} inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              {I18n.t('likemarkMenu.home')}
            </Menu.Item>
            <Menu.Item name='add'>
              <Icon name='add' />
              {I18n.t('likemarkMenu.add')}
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='settings' />
              {I18n.t('likemarkMenu.settings')}
            </Menu.Item>
            <Menu.Item name='home'>
              <Dropdown
                placeholder={I18n.t('likemarkMenu.language')}
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
