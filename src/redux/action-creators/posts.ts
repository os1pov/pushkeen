import axios from 'axios'
import { Dispatch } from 'redux'
import { setIsLoading } from './settings'
import { SettingsAction } from '../../types/settingsTypes'
import {
    IPost, PostsAction, PostsActionTypes,
    SetPostSuccess, SetPostError, SetPostsSuccess, SetPostsError
} from '../../types/postsTypes'

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const setPost = (postId: string) => {
    return async (dispatch: Dispatch<PostsAction | SettingsAction>) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await axios.get(URL + `/${postId}`)
            const post: IPost = {
                id: data.id,
                title: data.title,
                body: data.body
            }
            dispatch(setPostSuccess(post))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setPostError())
            dispatch(setIsLoading(false))
        }
    }
}

export const setPosts = (userId: string) => {
    return async (dispatch: Dispatch<PostsAction | SettingsAction>) => {
        try {
            dispatch(setIsLoading(true))
            const { data } = await axios.get(URL + `?userId=${userId}`)
            const posts = data.map((post: any): IPost => ({
                id: post.id,
                title: post.title,
                body: post.body
            }))
            dispatch(setPostsSuccess(posts))
            dispatch(setIsLoading(false))
        } catch (e) {
            dispatch(setPostsError())
            dispatch(setIsLoading(false))
        }
    }
}

const setPostSuccess = (post: IPost): SetPostSuccess => ({type: PostsActionTypes.SET_POST_SUCCESS, payload: post})

const setPostError = (): SetPostError => ({type: PostsActionTypes.SET_POST_ERROR})

const setPostsSuccess = (posts: IPost[]): SetPostsSuccess => ({type: PostsActionTypes.SET_POSTS_SUCCESS, payload: posts})

const setPostsError = (): SetPostsError => ({type: PostsActionTypes.SET_POSTS_ERROR})