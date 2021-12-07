import { Box, Button, TextField, Title } from 'adonimals-ui'
import { NextPage } from 'next'

const Login: NextPage = () => {
    return (
        <Box
            display='flex'
            element='div'
            height='100vh'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            backgroundColor='greyscale.100'
        >
            <Title variant='heading4'>Login</Title>
            <TextField 
                variant='outlined'
                color='default'
                type='email'
                placeholder='Email'
                marginBottom='spacing-sm'
                onChange={ () => { return } }
            />
            <TextField 
                variant='outlined'
                type='password'
                color='default'
                placeholder='Password'
                marginBottom='spacing-sm'
                onChange={ () => { return } }
            />
            <Button
                variant='contained'
                size='small'
                width='140px'
                disabled={ false }
                color='primary'
                backgroundColor='primary'
            >Login
            </Button>
        </Box>
    )
}

export default Login
