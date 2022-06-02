import { UsersState, UsersAction, UsersActionTypes } from '../../types/usersTypes'

const initialState: UsersState = {
    user: undefined,
    users: []
}

export const usersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }

        case UsersActionTypes.SET_USERS_ERROR:
            return {
                ...state,
                users: []
            }

        default:
            return state
    }
}