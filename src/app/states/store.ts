import { createStore, combineReducers } from 'redux'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
	usersStore: usersReducer,
})

const store = createStore(rootReducer)

export default store