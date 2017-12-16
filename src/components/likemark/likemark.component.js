// Dependencies
import React from 'react'
import { Layout } from 'antd'

// Components
import LikemarkChildren from '../LikemarkChildren'

// Main Component
const Likemark = ({likemark = {}, handleLikemarkClick = null}) => {
  return (
    <div id='likemark'>
      <Layout>
        <Layout.Header>
          <button
            onClick={() => {
              likemark.parentId && handleLikemarkClick
                ? handleLikemarkClick(likemark.parentId)
                : console.log('Already on Root')
            }}
          >
            back</button>
          <h1> {likemark.name } </h1>
        </Layout.Header>
        <Layout.Content>
          <LikemarkChildren
            children={likemark.children}
            onLikemarkClick={handleLikemarkClick}
          />
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default Likemark
