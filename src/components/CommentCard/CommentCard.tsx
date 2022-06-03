import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classNames from 'classnames'
import { IComment } from '../../types/commentsTypes'
import './CommentCard.scss'
import './CommentCardLarge.scss'

interface IProps {
    comment: IComment
}

const CommentCard: React.FC<IProps> = ({ comment }) => {
    const { email, body } = comment
    const { version } = useTypedSelector(state => state.settings)

    const commentCardClass = classNames({
        "comment-card": true,
        "comment-card__LARGE": version === "large"
    })

    return (
        <div className={commentCardClass}>
            <div className="comment-card__email">{email}:</div>
            <div className="comment-card__body">{body}</div>
        </div>
    )
}

export default CommentCard