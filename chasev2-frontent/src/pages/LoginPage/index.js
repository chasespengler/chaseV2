import React, { Component, useState } from 'react'
import {
    LoginContainer
} from './LoginElements';
import LoginBox from '../../components/LoginComponents'

const LoginPage = () => {
    return (
        <LoginContainer>
            <LoginBox />
        </LoginContainer>
    )
}

export default LoginPage