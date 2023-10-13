import { IUser } from 'types/user'
import {
	SET_SEARCH_TERM,
	TOGGLE_USER_VISIBILITY,
	SET_USERS,
	SET_SELECTED_USER,
} from './actionTypes'

export interface IStoreState {
	usersStore: IUserListStoreState
}

export interface IUserListStoreState {
	users: IUserStoreState[]
	searchTerm: string
	selectedUser: number
}

export interface IUserStoreState extends IUser {
	isHide?: boolean
	isSelected?: boolean
}

interface ISetSearchTermAction {
	type: typeof SET_SEARCH_TERM
	payload: string
}

interface IToggleUserVisibilityAction {
	type: typeof TOGGLE_USER_VISIBILITY
	payload: number
}

interface ISetUsersAction {
	type: typeof SET_USERS
	payload: IUserStoreState[]
}

interface ISetSelectedUserAction {
	type: typeof SET_SELECTED_USER
	payload: number
}

export type TuserAction = ISetSearchTermAction | IToggleUserVisibilityAction | ISetUsersAction | ISetSelectedUserAction