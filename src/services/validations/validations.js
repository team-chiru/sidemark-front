import { I18n } from 'react-redux-i18n'

class Validators {
  sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  requiredFieldValidator (errors, fieldName, value) {
    if (!value) errors[fieldName] = I18n.t('validators.requiredField')
  }

  urlValidator (errors, fieldName, value, errorReference = null) {
    if (value && !/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(value)) {
      errors[fieldName] = errorReference || 'invalidURL'
    }
  }

  emailValidator (errors, fieldName, value, errorReference = null) {
    if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors[fieldName] = errorReference || I18n.t('validators.invalidEmail')
    }
  }

  requiredEmailValidator (errors, fieldName, value) {
    if (!value) {
      errors[fieldName] = I18n.t('validators.requiredField')
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      errors[fieldName] = I18n.t('validators.invalidEmail')
    }
  }
}

export const validators = new Validators()
