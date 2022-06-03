import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import classNames from 'classnames'
import Loader from '../../components/Loader/Loader'
import NotFound from '../../components/NotFound/NotFound'
import ButtonGoBack from '../../components/Buttons/ButtonGoBack/ButtonGoBack'
import PostCard from '../../components/PostCard/PostCard'
import './PostsPage.scss'
import './PostsPageLarge.scss'

const PostsPage = () => {
    const { id } = useParams()
    const { version , isLoading } = useTypedSelector(state => state.settings)
    const { posts } = useTypedSelector(state => state.posts)
    const { setPosts } = useActions()

    const postsClass = classNames({
        posts: true,
        posts__LARGE: version === "large"
    })

    useEffect(() => {
        if (id) {
            setPosts(id)
        }
    }, [id])

    if (isLoading) return <Loader />

    if (!posts.length) return <NotFound>Посты не найдены</NotFound>

    return (
        <div className={postsClass}>
            <div className="posts__container">
                <div className="posts__title">
                    <div className="posts__title__body">Посты</div>
                    <ButtonGoBack />
                </div>
                {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    )
}

export default PostsPage