import React from 'react';
import { Formik } from 'formik';
import './Login.css';

const Login = () => {
    return <div className="login bg-gun-metal flex min-h-full flex-col justify-center">
        <div className="login-container">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
            </div>
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validate={values => {
                        const errors = { email: '', password: '' };
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                    }) => (
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">Email address</label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 bg-transparent"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                    <span className="sm:text-sm text-rose-700">{errors.email && touched.email && errors.email}</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-gray-100 hover:text-gray-100">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-transparent pl-2"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                    {errors.password && touched.password && errors.password}
                                </div>
                            </div>

                            <div>
                                <button type="submit" disabled={isSubmitting} className="flex w-full justify-center rounded-md bg-gray-100 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:gray-100">Sign in</button>
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        </div>

    </div>
}

export default Login;