import { connect } from 'react-redux'

export default class PropsConnector {
  get component () {}
  get stateMapping () {}
  get dispatchMapping () {}

  constructor () {
    return connect(
      this.stateMapping,
      this.dispatchMapping
    )(this.component)
  }
}
