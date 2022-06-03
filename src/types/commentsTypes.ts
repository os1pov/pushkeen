export enum CommentsActionTypes {
    SET_COMMENTS_SUCCESS = "SET_COMMENTS_SUCCESS",
    SET_COMMENTS_ERROR = "SET_COMMENTS_ERROR",
    ADD_COMMENT = "ADD_COMMENT"
}

export interface IData {
    email: string
    name: string
    body: string
}

export interface IComment {
    id: number
    email: string
    name: string
    body: string
}

export interface CommentsState {
    comments: IComment[]
}

export interface SetCommentsSuccess {
    type: CommentsActionTypes.SET_COMMENTS_SUCCESS,
    payload: IComment[]
}

export interface SetCommentsError {
    type: CommentsActionTypes.SET_COMMENTS_ERROR
}

export interface AddComment {
    type: CommentsActionTypes.ADD_COMMENT
    payload: IComment
}

export type CommentsAction = SetCommentsSuccess | SetCommentsError | AddComment