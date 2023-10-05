import React from 'react';
import Card from "../../components/card/Card";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";

const Register = () => {
    return <div className="bg-secondary-text flex min-h-screen flex-col justify-center items-center">
        <Card widthClass='w-6/12'>
            <div className="p-5">
                <div className="mb-5">
                    <h2>Create account</h2>
                </div>
                <div className="w-full">
                    <RegistrationForm/>
                </div>
            </div>

        </Card>
    </div>
}

export default Register;