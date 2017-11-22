import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'

export default class AddTextItem extends React.Component {
  static propTypes = {
    onAddTextItem: PropTypes.func.isRequired,
    itemType: PropTypes.string.isRequired
  }

  render () {
    return (
      <Input onPressEnter={(e) => {
        e.preventDefault()

        if (!e.target.value) {
          return
        }

        if (e.target.value.trim()) {
          this.props.onAddTextItem(e.target.value)
        }

        e.target.value = ''
      }} />
    )
  }
}
