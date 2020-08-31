import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducres from '../reducers'

const middlewares = [thunk, logger]

const store = createStore(reducres, applyMiddleware(...middlewares))

export { store }
