import {
    createContext,
    PropsWithChildren,
    useState,
    useContext
} from 'react'
import { Post } from '../../types/entities'

type PostContextType = {
    posts: Post[],
    likePost: (id: number) => void,
    addPost: (post: Post) => void,
    deletePost: (id: number) => void
}

const PostsContext = createContext<PostContextType> ({
    posts: [],
    likePost: () => null,
    deletePost: () => null,
    addPost: () => null
})

export const PostsProvider = ({ children, posts: rawPosts }: PropsWithChildren<Pick<PostContextType, 'posts'>>) => {
    const [posts, setPosts] = useState(rawPosts)

    const likePost = (id: number) => {
        setPosts((previous) => previous.map(post => id === post.id ? ({ ...post, like: !post.like }) : post))
    }

    const deletePost = (id: number) => {
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
