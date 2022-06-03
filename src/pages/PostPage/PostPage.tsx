import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import classNames from 'classnames'
import Loader from '../../components/Loader/Loader'
import NotFound from '../../components/NotFound/NotFound'
import PopupForm from '../../components/PopupForm/PopupForm'
import ButtonGoBack from '../../components/Buttons/ButtonGoBack/ButtonGoBack'
import CommentCard from '../../components/CommentCard/CommentCard'
import './PostPage.scss'
import './PostPageLarge.scss'

const PostPage = () => {
    const [display, setDisplay] = useState<"none" | "flex">("none")
    const { id } = useParams()
    const { version, isLoading } = useTypedSelector(state => state.settings)
    const { post } = useTypedSelector(state => state.posts)
    const { comments } = useTypedSelector(state => state.comments)
    const { setPost, setComments } = useActions()

    const postClass = classNames({
        post: true,
        post__LARGE: version === "large"
    })

    useEffect(() => {
        if (id) {
            setPost(id)
            setComments(id)
        }
    }, [id])

    const onClickButton = () => {
        setDisplay("flex")
    }

    if (isLoading) return <Loader />

    if (!post) return <NotFound>Пост не найден</NotFound>

    return (
        <div className={postClass}>
            <div className="post__container">
                <PopupForm style={{display}} setDisplay={setDisplay} />
                <div className="post__title">
                    <div className="post__title__body">{post.title}</div>
                    <ButtonGoBack />
                </div>
                <div className="post__body">{post.body}</div>
                <div className="post__comments">
                    {comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
                </div>
                <div className="post__button" onClick={onClickButton}>Добавить комментарий</div>
            </div>
        </div>
    )
}

export default PostPage