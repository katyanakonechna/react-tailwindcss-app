import {useField} from "formik";

interface Props {
    label: string;
    name: string,
    type: string;
    autoComplete?: string;
}

const InputField = ({label, ...props}: Props) => {
    const [field, meta] = useField(props);
    return <div className="mt-2 relative">
        <label>{label}
            <input
                {...field}
                {...props}
            />
        </label>
        {meta.touched && meta.error ? (
            <div className="input-error">{meta.error}</div>
        ) : null}
    </div>
}

export default InputField;