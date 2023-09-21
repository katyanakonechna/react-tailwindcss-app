import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Card from "../../components/Card/Card";

const Login = () => {
    return <div className="bg-secondary-text flex min-h-screen flex-col justify-center items-center">
        <Card>
            <div className="p-5 w-96">
                <div className="mb-5">
                    <h2>Sign in to your account</h2>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <LoginForm />
                </div>
            </div>

        </Card>
    </div>
}

export default Login;