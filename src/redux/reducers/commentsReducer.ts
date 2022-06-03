import { CommentsState, CommentsAction, CommentsActionTypes } from '../../types/commentsTypes'

const initialState: CommentsState = {
    comments: []
}

export const commentsReducer = (state = initialState, action: CommentsAction): CommentsState => {
    switch (action.type) {
        case CommentsActionTypes.SET_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload
            }

        case CommentsActionTypes.SET_COMMENTS_ERROR:
            return {
                ...state,
                comments: []
            }

        case CommentsActionTypes.ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.payload]
            }

        default:
            return state
    }
}