import {createStore, combineReducers, applyMiddleware} from 'redux'
import hotelsListReducer from '../reducers/hotelsListReducer'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        hotelsData: hotelsListReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore