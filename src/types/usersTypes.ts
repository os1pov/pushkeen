export enum UsersActionTypes {
    SET_USER_SUCCESS = "SET_USER_SUCCESS",
    SET_USER_ERROR = "SET_USER_ERROR",
    SET_USERS_SUCCESS = "SET_USERS_SUCCESS",
    SET_USERS_ERROR = "SET_USERS_ERROR",
}

export interface IUser {
    id: number
    name: string
    username: string
    email: string
    city: string
    phone: string
}

export type User = IUser | undefined

export interface UsersState {
    user: User
    users: IUser[]
}

export interface SetUserSuccess {
    type: UsersActionTypes.SET_USER_SUCCESS,
    payload: IUser
}

export interface SetUserError {
    type: UsersActionTypes.SET_USER_ERROR,
}

export interface SetUsersSuccess {
    type: UsersActionTypes.SET_USERS_SUCCESS,
    payload: IUser[]
}

export interface SetUsersError {
    type: UsersActionTypes.SET_USERS_ERROR
}

export type UsersAction = SetUserSuccess | SetUserError | SetUsersSuccess | SetUsersError