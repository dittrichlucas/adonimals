import { Box, Button, TextField, Title } from 'adonimals-ui'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
    const router = useRouter()
    
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
            <Title variant='heading4' marginTop='0'>Login</Title>
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
                marginTop='2em'
                disabled={ false }
                color='primary'
                backgroundColor='primary'
                onClick={ () => router.push('/') }
            >Login
            </Button>
        </Box>
    )
}

export default Login
