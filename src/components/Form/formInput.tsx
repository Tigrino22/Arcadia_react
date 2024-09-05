type FormInputProps = {
    label: string;
    type: string;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
};

export default function FormInput({
    label,
    type,
    id,
    name,
    value,
    onChange,
    required = false
}: FormInputProps): JSX.Element {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>{label}:</label>
            <input className="form-input"
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}
