import * as yup from 'yup';
import {Formik, Form, FormikProps} from 'formik';
import InputField from "../inputField/InputField";

interface RegistrationFormValues {
    email: string;
    firstName: string;
    lastName: string;
    weight: number;
    height: number;
    password: string;
}

const RegistrationForm = () => {
    const initialValues: RegistrationFormValues = {
        email: "",
        firstName: "",
        lastName: "",
        weight: 0,
        height: 0,
        password: ""
    }
    const validationSchema = yup.object().shape({
        email: yup.string().email().required('Required'),
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        weight: yup.number().required('Required'),
        height: yup.number().required('Required'),
        password: yup.string().min(6).required('Password is required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
    });
    const onSubmit = () => {
        //sup
    };
    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {(props: FormikProps<RegistrationFormValues>) => (
            <Form>
                <div className="grid gap-4 pb-6">
                    <div className="grid gap-4 grid-cols-2">
                        <InputField name="firstName" type="string" label="First Name"/>
                        <InputField name="lastName" type="string" label="Last Name"/>
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        <InputField name="weight" type="number" label="Your weight"/>
                        <InputField name="height" type="number" label="Your height"/>
                    </div>
                    <InputField name="email" type="email" label="Your email"/>
                    <div className="grid gap-4 grid-cols-2">
                        <InputField name="password" type="password" label="Password"/>
                        <InputField name="confirmPassword" type="password" label="Confirm your password"/>
                    </div>
                </div>

                <button className="btn-primary" type="submit" disabled={props.isSubmitting}>Register</button>
            </Form>)}
    </Formik>
};

export default RegistrationForm;