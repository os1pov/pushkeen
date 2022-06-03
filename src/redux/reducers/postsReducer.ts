import { PostsState, PostsAction, PostsActionTypes } from '../../types/postsTypes'

const initialState: PostsState = {
    post: undefined,
    posts: []
}

export const postsReducer = (state = initialState, action: PostsAction): PostsState => {
    switch (action.type) {
        case PostsActionTypes.SET_POST_SUCCESS:
            return {
                ...state,
                post: action.payload
            }

        case PostsActionTypes.SET_POST_ERROR:
            return {
                ...state,
                post: undefined
            }

        case PostsActionTypes.SET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }

        case PostsActionTypes.SET_POSTS_ERROR:
            return {
                ...state,
                posts: []
            }

        default:
            return state
    }
}