import { Box } from 'adonimals-ui'
import type { GetServerSideProps, NextPage } from 'next'
import { AddPost } from '../components/AddPost'
import { Header } from '../components/Header'
import { ViewPosts } from '../components/ViewPosts'
import { PostsProvider } from '../contexts/posts'
import { Post, User } from '../types/entities'

type Props = {
    user: User
    posts: Post[]
}

const Home: NextPage<Props> = ({ user, posts }) => {
    return (
        <PostsProvider posts={posts}>
            <Box maxWidth='900px' m='0 auto'>
                <Header {...user}></Header>
                <AddPost />
                <ViewPosts />
            </Box>
        </PostsProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const resUser = await fetch('http://localhost:3002/v1/user/1')
    const user: User = await resUser.json()

    const res = await fetch('http://localhost:3002/v1/posts')
    const posts: User = await res.json()

    return {
        props: {
            user,
            posts
        }
    }
}

export default Home
