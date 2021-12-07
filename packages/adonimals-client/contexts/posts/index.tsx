import {
    createContext,
    PropsWithChildren,
    useState,
    useContext
} from 'react'
import { Post } from '../../types/entities'

const PostsContext = createContext<{
    posts: Post[], likePost: (id: string) => void, addPost: (post: Post) => void, deletePost: (id: string) => void
}>
    ({
        posts: [],
        likePost: () => null,
        deletePost: () => null,
        addPost: () => null
    })

export const PostsProvider = ({ children, posts: rawPosts }: PropsWithChildren<{ posts: Post[] }>) => {
    const [posts, setPosts] = useState(rawPosts)

    const likePost = (id: string) => {
        setPosts((previous) => previous.map(post => id === post.id ? ({ ...post, like: !post.like }) : post))
    }

    const deletePost = (id: string) => {
        setPosts((previous) => previous.filter(post => id !== post.id))
    }

    const addPost = (post: Post) => {
        setPosts((previous) => [post, ...previous])
    }

    const providerValue = {
        posts,
        likePost,
        deletePost,
        addPost
    }

    return (
        <PostsContext.Provider value={ providerValue }>
            { children }
        </PostsContext.Provider>
    )
}

export const usePosts = () => {
    return useContext(PostsContext)
}
