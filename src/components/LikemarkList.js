import React from 'react'
import { observer } from 'mobx-react'
import { List } from 'semantic-ui-react'

import 'semantic-ui-list/list.min.css'

import { LikemarkView } from './LikemarkView'

@observer export class LikemarkList extends React.Component {
  renderEachLikemark () {
    return this.props.store.likemarks.map(
      (likemark) => <LikemarkView model={likemark} />
    )
  }

  render () {
    return <List>
      {this.renderEachLikemark()}
    </List>
  }
}
