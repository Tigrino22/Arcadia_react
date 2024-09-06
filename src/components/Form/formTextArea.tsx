type FormTextAreaProps = {
    label?: string;
    id: string;
    name: string;
    value: string;
    placeholder?: string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
};

export default function FormTextArea({
    label,
    id,
    name,
    value,
    placeholder="",
    onChange,
    required = false
}: FormTextAreaProps): JSX.Element {
    return (
        <div className="form-group">
            {
                label && <label className="form-label" htmlFor={id}>{label}:</label>
            }
            <textarea className="form-area"
                id={id}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            ></textarea>
        </div>
    );
}
