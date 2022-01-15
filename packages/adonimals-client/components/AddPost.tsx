import { useState } from 'react'
import { usePosts } from '../contexts/posts'
import { Box, Button, TextArea } from 'adonimals-ui'
import { useUser } from '../contexts/user'

export const AddPost = () => {
    const { user } = useUser()
    const [post, setPost] = useState<string>('')
    const { posts, addPost } = usePosts()
    const displayCancelButton = () => { return post ? 'inline-block' : 'none' }
    const clearValue = () => { setPost('') }
    const handleAddPost = () => {
        if (user) {
            addPost({
                'id': posts.length + 1,
                'user': user,
                'content': {
                    'text': post,
                    'images': ['https://picsum.photos/400']
                },
                'like': false,
                'createdAt': new Date(),
                'updatedAt': new Date()
            })
        }
        clearValue()
    }

    return (
        <Box>
            <TextArea
                variant='text'
                color='default'
                label='New post'
                marginBottom='spacing-sm'
                onChange={ e => setPost(e?.target.value ?? '') }
                value={ post }
            />
        <Box element='div' display='flex' justifyContent='flex-end'>
            <Button
                variant='text'
                disabled={ false }
                color='default'
                size='small'
                backgroundColor=''
                onClick={ () => clearValue() }
                marginRight='spacing-sm'
                display={ displayCancelButton() }
            >Cancel
            </Button>
            <Button
                variant='contained'
                disabled={ false }
                color='secondary'
                size='small'
                backgroundColor=''
                onClick={ handleAddPost }
            >Publish
            </Button>
        </Box>
    </Box>
    )
}
