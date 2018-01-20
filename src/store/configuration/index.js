// Dependencies
import {createStore, compose, applyMiddleware} from 'redux'
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import thunk from 'redux-thunk'

// Reducers
import rootReducer from '../index'

// Middlewares
const middlewares = [thunk]

const translationsObject = {
  en: {
    export: 'Export %{count} items',
    export_0: 'Nothing to export',
    export_1: 'Export %{count} item',
    two_lines: '',
    literal_two_lines: 'Line 1 ine 2'
  },
  pt: {
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2',
    literal_two_lines: 'Regel 1 Regel 2'
  },
  fr: {
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2',
    literal_two_lines: 'Regel 1 Regel 2'
  },
  es: {
    export: 'Exporteer %{count} dingen',
    export_0: 'Niks te exporteren',
    export_1: 'Exporteer %{count} ding',
    two_lines: 'Regel 1<br />Regel 2',
    literal_two_lines: 'Regel 1 Regel 2'
  }
};

// Store core configuration
const applyCoreConfiguration = (store) => {
  syncTranslationWithStore(store);
  store.dispatch(loadTranslations(translationsObject));
  store.dispatch(setLocale('en'));
}

// Stores
const configureStoreProd = (initialState) => {
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))
  applyCoreConfiguration(store);
  return store
}

const configureStoreDev = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))
  applyCoreConfiguration(store);
  if (module.hot) {
    module.hot.accept('../', () => {
      const nextReducer = require('../index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev

export default configureStore
