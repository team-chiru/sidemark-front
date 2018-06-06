import React from 'react'
import { Field } from 'redux-form'

// Assets
import './Add.scss'

export const AddForm = props => {
  const { handleSubmit, closeAddModal, pristine, reset, submitting, valid } = props
  return (
    <form onSubmit={handleSubmit} className='ui form'>
      <h1 className='ui header'>Add Likemark</h1>
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

      <div className='form-item-separator' />

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

      <div className='form-item-separator' />

      <div className='add-button-group'>
        <button type='submit' className='ui primary button' disabled={!valid}>Submit</button>
        <button type='button' className='ui secondary button' onClick={closeAddModal}>Cancel</button>
        <button type='button' className='ui button' disabled={pristine || submitting} onClick={reset}>Clear</button>
      </div>
    </form>
  )
}
