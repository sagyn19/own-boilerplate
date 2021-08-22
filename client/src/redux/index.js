import { creteStore, compose, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './rootReducer'

const middleware = [thunk]
const initialState = {}

const composedEnch = compose(applyMiddleware(...middleware))

const store = createStore(createRootReducer(), initialState, composedEnch)
