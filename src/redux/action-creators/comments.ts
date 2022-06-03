import axios from 'axios'
import { Dispatch } from 'redux'
import { setIsLoading } from './settings'
import { SettingsAction } from '../../types/settingsTypes'
import {
    IData, IComment, CommentsAction, CommentsActionTypes,
    SetCommentsSuccess, SetCommentsError, AddComment
} from '../../types/commentsTypes'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const setComments = (postId: string) => {
    return async (dispatch: Dispatch<CommentsAction | SettingsAction>) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await axios.get(URL + `/${postId}` + '/comments')
            const comments = data.map((comment: any): IComment => ({
                id: comment.email,
                email: comment.email,
                name: comment.name,
                body: comment.body
            }))
            dispatch(setCommentsSuccess(comments))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setCommentsError())
            dispatch(setIsLoading(false))
        }
    }
}

export const createComment = (postId: string, data: IData) => {
    return async (dispatch: Dispatch<CommentsAction | SettingsAction>) => {
        try {
            dispatch(setIsLoading(true))
            const { data: comment } = await axios.post(URL + `/${postId}` + '/comments', data)
            dispatch(addComment(comment))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setIsLoading(false))
        }
    }
}

const setCommentsSuccess = (comments: IComment[]): SetCommentsSuccess => ({type: CommentsActionTypes.SET_COMMENTS_SUCCESS, payload: comments})

const setCommentsError = (): SetCommentsError => ({type: CommentsActionTypes.SET_COMMENTS_ERROR})

const addComment = (comment: IComment): AddComment => ({type: CommentsActionTypes.ADD_COMMENT, payload: comment})