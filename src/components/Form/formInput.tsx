type FormInputProps = {
    label?: string;
    type: string;
    id: string;
    name: string;
    value: string;
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

export default function FormInput({
    label,
    type,
    id,
    name,
    value,
    placeholder = "", 
    onChange,
    required = false
}: FormInputProps): JSX.Element {
    return (
        <div className="form-group">

            {label && id && (
                <label className="form-label" htmlFor={id}>
                    {label}:
                </label>
            )}

            <input className="form-input"
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}
