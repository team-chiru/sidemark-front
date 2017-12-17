// Dependencies
import React from 'react'

// Components
import LikemarkChildren from '../likemark-children/likemark-children.component'

// Assets
import './likemark.scss'

// Helpers
const checkPrefix = (url) => url.match(/http:\/\//g) || url.match(/https:\/\//g)

// Main Component
const Likemark = ({likemark = {}, handleLikemarkClick = null}) => {
  return (
    <div className='likemark'>
      <div className='likemark-header'>
        <div className='header-item'>
          <div className='header-btn-container'>
            { likemark.parentId !== 0 &&
              <button
                className={`${likemark.parentId ? 'back-btn' : 'invisible'}`}
                onClick={() => handleLikemarkClick(likemark.parentId)}
              >
                Back
              </button>
            }
          </div>
          <h1> {likemark.name } </h1>
        </div>
        <div className='header-item'>
          <div className='header-btn-container'>
            <a href={`${checkPrefix(likemark.url) ? likemark.url : 'http://' + likemark.url}`}>
              <button
                onClick={() => console.log('go')}
              >
                Go
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='likemark-children-container'>
        <LikemarkChildren
          children={likemark.children}
          onLikemarkClick={handleLikemarkClick}
        />
      </div>
    </div>
  )
}

export default Likemark
