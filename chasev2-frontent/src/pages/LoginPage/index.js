import React from 'react'
import {
    LoginContainer
} from './LoginElements';
import LoginBox from '../../components/LoginComponents'

const LoginPage = () => {

    document.addEventListener('keypress', function(e){
        if (e.key === 'Enter'){
            console.log('hello');
        };
    });
    
    return (
        <LoginContainer>
            <LoginBox />
        </LoginContainer>
    )
}

export default LoginPage