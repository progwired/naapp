import React from 'react'
import Heading from '@/components/Heading'
import LoginForm from '@/components/forms/LoginForm'

function LoginPage() {
    return (
        <div className='flex items-center justify-center' style={{ height: "calc(100vh - 100px)" }}>
            <LoginForm />
        </div>
    )
}

export default LoginPage
