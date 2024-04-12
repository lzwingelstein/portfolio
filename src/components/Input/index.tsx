import classes from './input.module.css';

interface InputTextFieldProps {
    placeholder: string;
    value: string;
    type: string;
    error?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, value, type, error, onChange }: InputTextFieldProps) {
    return (
        <div className="flex flex-col">
            <input
                className={classes.input}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
}