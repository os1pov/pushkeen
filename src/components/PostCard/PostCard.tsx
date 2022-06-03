import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classNames from 'classnames'
import { IPost } from '../../types/postsTypes'
import ButtonDetail from '../Buttons/ButtonDetail/ButtonDetail'
import './PostCard.scss'
import './PostCardLarge.scss'

interface IProps {
    post: IPost
}

const PostCard: React.FC<IProps> = ({ post }) => {
    const { id, title } = post
    const body = post.body.split(" ").slice(0,10).join(" ") + " ..."
    const { version } = useTypedSelector(state => state.settings)

    const postCardClass = classNames({
        "post-card": true,
        "post-card__LARGE": version === "large"
    })

    return (
        <div className={postCardClass}>
            <div className="post-card__title">{title}</div>
            <div className="post-card__body">{body}</div>
            <ButtonDetail path={`/post/${id}`} body="Смотреть пост" />
        </div>
    )
}

export default PostCard