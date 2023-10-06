import React from "react";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import {Formik, Form} from 'formik';
import {FormikHelpers} from "formik/dist/types";
import InputField from "../../../components/inputField/InputField";
import Card from "../../../components/card/Card";
import {login} from "../../../api/api";
import {LoginData} from "../../../types/auth.interfaces";

const Login = () => {
    const navigate = useNavigate();
    const onSubmit = async (values: LoginData, {setSubmitting}: FormikHelpers<LoginData>) => {
        try {
            const res = await login(values);
            navigate('/');
        } catch (e) {
            console.log(e);
        }
        setSubmitting(false);
    }

    const validationSchema = yup.object().shape({
        username: yup.string().email('Invalid email address').required('Required'),
        password: yup.string().required('Required')
    });

    return <div className="bg-secondary-text flex min-h-screen flex-col justify-center items-center">
        <Card>
            <div className="p-5 w-96">
                <div className="mb-5">
                    <h2>Sign in to your account</h2>
                </div>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Formik
                        initialValues={{username: '', password: ''}}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({isSubmitting}) => (
                            <Form className="space-y-6 grid gap-4 pb-6">
                                <InputField label="Email address" name="username" type="email"/>
                                <InputField label="Password" name="password" autoComplete="current-password" type="password"/>
                                <div>
                                    <button type="submit" disabled={isSubmitting} className="btn-primary">Sign in
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </Card>
    </div>

}
export default Login;