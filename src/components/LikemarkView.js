import React from 'react'

import { List } from 'semantic-ui-react'

import 'semantic-ui-list/list.min.css'
import 'semantic-ui-icon/icon.min.css'

export class LikemarkView extends React.Component {
  render () {
    return (
      <List.Item>
        <List.Icon name='bookmark' />
        <List.Content>
          <List.Header>{this.props.model.name}</List.Header>
          <List.Description>{this.props.model.description}</List.Description>
        </List.Content>
      </List.Item>
    )
  }
}
