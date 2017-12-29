/* @flow */

// Dependencies
import * as React from 'react'

// Assets
import './general-layout.scss'

// Main Component
type Props = {
  children?: React.Node,
}

const GeneralLayout = ({children}: Props) => (
  <div className='general-layout'>
    {children}
  </div>
)

export default GeneralLayout
