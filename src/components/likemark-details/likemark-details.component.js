/* @flow */

// Dependencies
import * as React from 'react'

// Models
import type {Likemark as LikemarkType} from '~/models/likemark'

// Assets
import './likemark-details.scss'

// Main component
/**
 * Display the likemark details.
 * @property {LikemarkType} props.likemark - The current likemark.
 */

type Props = {
  likemark: LikemarkType
}

export const LikemarkDetails = ({likemark}: Props) => (
  <div className='likemark-details'>
    <p>ID: {likemark.id}</p>
    <p>URL: {likemark.url}</p>
  </div>
)

export default LikemarkDetails
