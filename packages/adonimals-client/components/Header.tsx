import { Avatar, Box, Title } from 'adonimals-ui'
import { User } from '../types/entities'

export const Header = (user: User) => {
    return (
        <Box
            element='header'
            color='greyscale.100'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
        >
            <Title variant='heading3'>Adonimals</Title>
            <Avatar src={ user.photo } />
        </Box>
    )
}
