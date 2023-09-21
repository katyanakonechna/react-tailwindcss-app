import * as yup from 'yup';
import { Formik } from 'formik';
import {FormikHelpers} from "formik/dist/types";


interface LoginFormValues {
    email: string;
    password: string;
}


const LoginForm = () => {
    const onSubmit = (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
        setSubmitting(false);
        console.log(JSON.stringify(values))
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Required'),
        password: yup.string().required('Required')
    });

    return <Formik
    initialValues={{ email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    }) => (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email address</label>
                <div className="mt-2 relative">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <span className="input-error">{errors.email && touched.email && errors.email}</span>
                </div>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <div className="mt-2 relative">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <span className="input-error">{errors.password && touched.password && errors.password}</span>
                </div>
            </div>
            <div>
                <button type="submit" disabled={isSubmitting} className="btn-primary">Sign in</button>
            </div>
        </form>
    )}
</Formik>
}
export default LoginForm;