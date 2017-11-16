import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { LikemarkStore, LikemarkListView } from './components/LikemarkList'

import 'semantic-ui-sidebar/sidebar.min.css'
import 'semantic-ui-segment/segment.min.css'
import 'semantic-ui-button/button.min.css'
import 'semantic-ui-menu/menu.min.css'
import 'semantic-ui-icon/icon.min.css'

const store = new LikemarkStore()

ReactDOM.render(
  <div>
    <LikemarkListView store={store} />
    <Sidebar as={Menu} direction='bottom' visible>
      <Menu.Item name='add' onClick={store.addLikemark.bind(store)}>
        <Icon name='add circle' />
        Add
      </Menu.Item>
    </Sidebar>
  </div>,
  document.getElementById('app')
)
