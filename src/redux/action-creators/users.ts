import axios from 'axios'
import { Dispatch } from 'redux'
import { setIsLoading } from './settings'
import { SettingsAction } from '../../types/settingsTypes'
import {
    IUser, UsersAction, UsersActionTypes,
    SetUserSuccess, SetUserError, SetUsersSuccess, SetUsersError
} from '../../types/usersTypes'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const setUser = (userId: string) => {
    return async (dispatch: Dispatch<UsersAction | SettingsAction>) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await axios.get(URL + `/${userId}`)
            const user: IUser = {
                id: data.id,
                name: data.name,
                username: data.name,
                email: data.name,
                city: data.address.city,
                phone: data.phone
            }
            dispatch(setUserSuccess(user))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setUserError())
            dispatch(setIsLoading(false))
        }
    }
}

export const setUsers = () => {
    return async (dispatch: Dispatch<UsersAction | SettingsAction>) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await axios.get(URL)
            const users = data.map((user: any): IUser => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                city: user.address.city,
                phone: user.phone
            }))
            dispatch(setUsersSuccess(users))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setUsersError())
            dispatch(setIsLoading(false))
        }
    }
}

const setUserSuccess = (user: IUser): SetUserSuccess => ({type: UsersActionTypes.SET_USER_SUCCESS, payload: user})

const setUserError = (): SetUserError => ({type: UsersActionTypes.SET_USER_ERROR})

const setUsersSuccess = (users: IUser[]): SetUsersSuccess => ({type: UsersActionTypes.SET_USERS_SUCCESS, payload: users})

const setUsersError = (): SetUsersError => ({type: UsersActionTypes.SET_USERS_ERROR})