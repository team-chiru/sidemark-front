import React from 'react'
import ReactDOM from 'react-dom'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { LikemarkList } from './components/LikemarkList'
import { LikemarkStore } from './observables/LikemarkStore'

import 'semantic-ui-sidebar/sidebar.min.css'
import 'semantic-ui-segment/segment.min.css'
import 'semantic-ui-button/button.min.css'
import 'semantic-ui-menu/menu.min.css'
import 'semantic-ui-icon/icon.min.css'

const store = new LikemarkStore()

ReactDOM.render(
  <div>
    <LikemarkList store={store} />
    <Sidebar as={Menu} direction='bottom' visible>
      <Menu.Item name='add' onClick={store.addLikemark.bind(store)}>
        <Icon name='add circle' />
        Add
      </Menu.Item>
    </Sidebar>
  </div>,
  document.getElementById('app')
)
