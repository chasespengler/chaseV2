import React from 'react'
import {
    LoginInputContainer,
    UsernameInput,
    PasswordInput,
} from './LoginElements'

const LoginBox = () => {
    return (
        <LoginInputContainer>
            <UsernameInput />
            <PasswordInput />
        </LoginInputContainer>
    )
}

export default LoginBox