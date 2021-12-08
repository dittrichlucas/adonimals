import { Avatar, Box, Button, Text } from 'adonimals-ui'
import { formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { usePosts } from '../contexts/posts'

export const ViewPosts = () => {
    const { posts, likePost } = usePosts()

    return (
        <>
            { posts.map((post) => (
                <Box
                    key={ post.id }
                    backgroundColor='interaction.negative.120'
                    display='flex'
                    flexDirection='column'
                    my='spacing-sm'
                    p='spacing-sm'
                    boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
                    borderRadius='5px'
                >
                    <Box element='div' display='flex' alignItems='center'>
                        <Avatar label={ post.user.name } src={ post.user.photo } />
                        <Box px='spacing-xxs' display='flex' flexDirection='column' alignItems='flex-start'>
                            <Text mb='spacing-xxxs' color='grayscalle.50' variant='medium'>{ post.user.name }</Text>
                            <Text variant='small' element='span'>
                                { formatDistance(
                                    new Date(post.createdAt), 
                                    new Date(), 
                                    { locale: ptBR, addSuffix: true }) 
                                }
                            </Text>
                        </Box>
                    </Box>
                    <Box element='div'>
                        <Text variant='medium' element='p'>{ post.content.text }</Text>
                    </Box>
                    <Box element='div'>
                        <Button
                            variant={ post.like ? 'contained' : 'text' }
                            disabled={ false }
                            color='default'
                            size='small'
                            backgroundColor=''
                            marginRight='spacing-sm'
                            onClick={ () => likePost(post.id) }
                        >Like
                        </Button>
                        <Button
                            variant='text'
                            disabled={ false }
                            color='secondary'
                            size='small'
                            backgroundColor=''
                        >Comment
                        </Button>
                    </Box>
                </Box>
            )) }
        </>
    )
}
