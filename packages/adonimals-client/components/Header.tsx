import { Avatar, Box, Title } from 'adonimals-ui'
import { useUser } from '../contexts/user'

export const Header = () => {
    const { user } = useUser()
    
    return (
        <Box
            element='header'
            color='greyscale.100'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Title variant='heading3'>Adonimals</Title>
            <Avatar src={ user?.photo } />
        </Box>
    )
}
