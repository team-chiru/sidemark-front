import React from 'react'
import PropTypes from 'prop-types'

export default class AddTextItem extends React.Component {
  static propTypes = {
    onAddTextItem: PropTypes.func.isRequired,
    itemType: PropTypes.string.isRequired
  }

  render () {
    let input = ''
    let label = this.props.itemType

    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()

          if (input.value.trim()) {
            this.props.onAddTextItem(input.value)
          }
        }}>
          <input ref={node => { input = node }} />
          <button type='submit'>Add {label}</button>
        </form>
      </div>
    )
  }
}
