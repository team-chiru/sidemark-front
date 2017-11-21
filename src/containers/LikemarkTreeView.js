import { connect } from 'react-redux'
import { toggle } from '../actions/onLikemarkItems'
import LikemarkTree from '../components/LikemarkTree'

export default connect(
  (state) => ({ root: state.root.present }),
  { onLikemarkClick: toggle }
)(LikemarkTree)
