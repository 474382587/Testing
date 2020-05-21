import { createStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { rootReducer } from './reducers/index'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'; // no changes here 😀

export default function configureStore(initialState = {}) {
    const middleWares = [
        thunkMiddleWare,
        logger,
        ReduxThunk
    ]
    return createStore(rootReducer, initialState, applyMiddleware(...middleWares))
}