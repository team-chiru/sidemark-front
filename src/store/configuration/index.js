// Dependencies
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// Reducers
import rootReducer from '../index'

// Middlewares
const middlewares = [thunk]

// Stores
const configureStoreProd = (initialState) => createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)))

const configureStoreDev = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)))
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
