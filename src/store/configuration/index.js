// Dependencies
import {createStore, compose, applyMiddleware} from 'redux'
import {loadTranslations, setLocale, syncTranslationWithStore} from 'react-redux-i18n';
import thunk from 'redux-thunk'

// Reducers
import rootReducer from '../index'

// i18n translations
import {translationsObject} from '~/services/i18n';

// Middlewares
const middlewares = [thunk]

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
