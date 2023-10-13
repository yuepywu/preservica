import { Reducer } from 'redux'
import { IUserStoreState, TuserAction } from './types'
import {
	SET_SEARCH_TERM,
	TOGGLE_USER_VISIBILITY,
	SET_USERS,
	SET_SELECTED_USER,
} from './actionTypes'

const initialState: {
	users: IUserStoreState[]
	searchTerm: string
	selectedUser: number
} = {
	users: [],
	searchTerm: '',
	selectedUser: -1
}

export const setUserAction = (users: IUserStoreState[]) => {
	return {
		type: SET_USERS,
		payload: users,
	}
}

const usersReducer: Reducer<typeof initialState, TuserAction> = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_TERM:
			return {
				...state, searchTerm: action.payload
			}
		case TOGGLE_USER_VISIBILITY:
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.payload ? {
						...user,
						isHide: !user.isHide
					} : {
						...user,
						isHide: user.isHide
					}
				),
			}
		case SET_USERS:
			return {
				...state, users: action.payload
			}
		case SET_SELECTED_USER:
			return {
				...state,
				users: state.users.map((user) =>
					user.id === action.payload ? {
						...user,
						isSelected: true
					} : {
						...user,
						isSelected: false
					}
				),
			}
		default:
			return state
	}
}

export default usersReducer