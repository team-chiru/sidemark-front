/* @flow */

// Dependencies
import * as React from 'react'

// Assets
import './general-layout.scss'

// Main Component
type Props = {
  children?: React.Node,
}

const GeneralLayout = (props: Props) => (
  <div className='general-layout'>
    {props.children}
  </div>
)

export default GeneralLayout
