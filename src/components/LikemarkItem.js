import React from 'react'
import * as UUIDv4 from 'uuid/v4'
import { List } from 'semantic-ui-react'

import 'semantic-ui-list/list.min.css'
import 'semantic-ui-icon/icon.min.css'

class LikemarkModel {
  constructor (name, description) {
    this.id = UUIDv4()
    this.name = name || ''
    this.description = description || ''
  }
}

class ItemView extends React.Component {
  render () {
    return (
      <List.Item key={this.props.model.id}>
        <List.Icon name='bookmark' />
        <List.Content>
          <List.Header>{this.props.model.name}</List.Header>
          <List.Description>{this.props.model.description}</List.Description>
        </List.Content>
      </List.Item>
    )
  }
}

export { LikemarkModel, ItemView as LikemarkItemView }
