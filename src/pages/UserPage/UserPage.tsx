import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import classNames from 'classnames'
import Loader from '../../components/Loader/Loader'
import NotFound from '../../components/NotFound/NotFound'
import ButtonDetail from '../../components/Buttons/ButtonDetail/ButtonDetail'
import ButtonGoBack from '../../components/Buttons/ButtonGoBack/ButtonGoBack'
import PostCard from '../../components/PostCard/PostCard'
import './UserPage.scss'
import './UserPageLarge.scss'

const UserPage = () => {
    const { id } = useParams()
    const { version, isLoading } = useTypedSelector(state => state.settings)
    const { user } = useTypedSelector(state => state.users)
    const posts = useTypedSelector(state => state.posts.posts).slice(0,3)
    const { setUser, setPosts } = useActions()

    const userClass = classNames({
        user: true,
        user__LARGE: version === "large"
    })

    useEffect(() => {
        if (id) {
            setUser(id)
            setPosts(id)
        }
    }, [id])

    if (isLoading) return <Loader />

    if (!user) return <NotFound>Пользователь не найден</NotFound>

    return (
        <div className={userClass}>
            <div className="user__container">
                <div className="user__title">
                    <div className="user__title__body">{user.name}</div>
                    <ButtonGoBack />
                </div>
                <div className="user__info">
                        <div className="user__city">City: {user.city}</div>
                        <div className="user__email">Email: {user.email}</div>
                        <div className="user__phone">Phone: {user.phone}</div>
                </div>
                <div className="user__title">
                    <div className="user__title__body">Посты</div>
                    <ButtonDetail path={`/user/${id}/posts`} body={"Смотреть посты"} />
                </div>
                {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default UserPage