import React from 'react'
import { Field } from 'redux-form'

export const AddForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className='ui form'>
      <div>
        <label>Title</label>
        <div>
          <Field
            name='title'
            component='input'
            type='text'
            placeholder='Title'
          />
        </div>
      </div>
      <div>
        <label>URL</label>
        <div>
          <Field
            name='url'
            component='input'
            type='text'
            placeholder='http://likemark.io'
          />
        </div>
      </div>
      <button type='submit' disabled={pristine || submitting}>Submit</button>
      <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
      </button>
    </form>
  )
}
