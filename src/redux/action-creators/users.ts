import axios from 'axios'
import { Dispatch } from 'redux'
import {
    IUser, UsersAction, UsersActionTypes,
    SetUsersSuccess, SetUsersError
} from '../../types/usersTypes'

const URL = 'https://jsonplaceholder.typicode.com/users'

export const setUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        try {
            const { data } = await axios.get(URL)
            const users = data.map((user: any): IUser => ({
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                city: user.address.city,
                phone: user.phone,
            }))
            dispatch(setUsersSuccess(users))
        } catch (e) {
            dispatch(setUsersError())
        }
    }
}

const setUsersSuccess = (users: IUser[]): SetUsersSuccess => ({type: UsersActionTypes.SET_USERS_SUCCESS, payload: users})

const setUsersError = (): SetUsersError => ({type: UsersActionTypes.SET_USERS_ERROR})