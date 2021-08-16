import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'
import sagas from './saga'
import { ENV } from '../../configs'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (ENV === `developement`) {
  middlewares.push(createLogger({ collapsed: true }))
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer(),
  /* preloadedState, */
  composeEnhancers(applyMiddleware(...middlewares)),
)
sagaMiddleware.run(sagas)

export default store
