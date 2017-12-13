import PropsConnector from './PropsConnector'
import LikemarkChildren from '../components/LikemarkChildren'

import { toggleChild } from '../ducks/children'

/**
 * Connect the LikemarkChildren to the present state.
 * @class @extends PropsConnector
 */
class LikemarkContainer extends PropsConnector {
  get component () { return LikemarkChildren }

  get stateMapping () {
    return (state) => ({ children: state.children.present })
  }

  get dispatchMapping () {
    return { onLikemarkClick: toggleChild }
  }
}

export default new LikemarkContainer()
