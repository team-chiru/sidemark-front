// Dependencies
import { reduxForm } from 'redux-form'
// Components
import { AddForm } from '../AddForm.component'
// Validations
import {AddFormValidation} from './AddForm.validations'

// Main Component
export const ReduxAddForm = reduxForm({
  validate: AddFormValidation,
  form: 'AddForm'
})(AddForm)
