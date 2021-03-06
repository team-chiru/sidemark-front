import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { List } from 'semantic-ui-react'

import 'semantic-ui-list/list.min.css'

import { LikemarkModel, LikemarkItemView } from './LikemarkItem'

export class Store {
  @observable likemarks = []

  addLikemark () {
    const counter = this.likemarks.length
    const likemark = new LikemarkModel('Test', 'Likemark ' + counter)

    this.likemarks.push(likemark)
  }
}

@observer export class ListView extends React.Component {
  renderEachLikemark () {
    return this.props.store.likemarks.map(
      (likemark) => <LikemarkItemView key={likemark.id} model={likemark} />
    )
  }

  render () {
    return <List selection>
      {this.renderEachLikemark()}
    </List>
  }
}

export { Store as LikemarkStore, ListView as LikemarkListView }
