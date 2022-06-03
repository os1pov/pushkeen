export enum PostsActionTypes {
    SET_POST_SUCCESS = "SET_POST_SUCCESS",
    SET_POST_ERROR = "SET_POST_ERROR",
    SET_POSTS_SUCCESS = "SET_POSTS_SUCCESS",
    SET_POSTS_ERROR = "SET_POSTS_ERROR"
}

export interface IPost {
    id: number
    title: string
    body: string
}

export type Post = IPost | undefined

export interface PostsState {
    post: Post
    posts: IPost[]
}

export interface SetPostSuccess {
    type: PostsActionTypes.SET_POST_SUCCESS,
    payload: IPost
}

export interface SetPostError {
    type: PostsActionTypes.SET_POST_ERROR,
}

export interface SetPostsSuccess {
    type: PostsActionTypes.SET_POSTS_SUCCESS,
    payload: IPost[]
}

export interface SetPostsError {
    type: PostsActionTypes.SET_POSTS_ERROR
}

export type PostsAction = SetPostSuccess | SetPostError | SetPostsSuccess | SetPostsError