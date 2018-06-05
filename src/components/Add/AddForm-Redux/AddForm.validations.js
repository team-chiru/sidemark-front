// Dependencies
import {validators} from '../../../services/validations/validations'

export const AddFormValidation = (values) => {
  const errors = {}
  validators.requiredFieldValidator(errors, 'title', values.title)
  validators.requiredFieldValidator(errors, 'url', values.url)

  return errors
}
