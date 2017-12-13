import { connect } from 'react-redux'

/**
 * Connect its components to the state and the dispatchers.
 * @class @abstract
 * @property {React.Component} component - The connected component.
 * @property {function} stateMapping - Function which maps the state to the component's props.
 * @property {function} dispatchMapping - Function which dispatches the action creators in the component's props.
 */
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
