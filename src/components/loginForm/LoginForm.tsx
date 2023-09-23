import * as yup from 'yup';
import {Formik, Form} from 'formik';
import {FormikHelpers} from "formik/dist/types";
import InputField from "../inputField/InputField";

interface LoginFormValues {
    email: string;
    password: string;
}


const LoginForm = () => {
    const onSubmit = (values: LoginFormValues, {setSubmitting}: FormikHelpers<LoginFormValues>) => {
        setSubmitting(false);
        console.log(JSON.stringify(values))
    }

    const validationSchema = yup.object().shape({
        email: yup.string().email('Invalid email address').required('Required'),
        password: yup.string().required('Required')
    });

    return <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({isSubmitting}) => (
            <Form className="space-y-6 grid gap-4 pb-6">
                <InputField label="Email address" name="email" type="email"/>
                <InputField label="Password" name="password" type="password"/>
                <div>
                    <button type="submit" disabled={isSubmitting} className="btn-primary">Sign in</button>
                </div>
            </Form>
        )}
    </Formik>
}
export default LoginForm;