import classes from "./input.module.css";

interface InputTextFieldProps {
  placeholder: string;
  value: string;
  type: string;
  error?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  className,
  placeholder,
  value,
  type,
  error,
  onChange,
}: InputTextFieldProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <input
        className={
          !!error ? `${classes.input} ${classes.error}` : `${classes.input}`
        }
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-red-500 text-end">{error}</span>}
    </div>
  );
}
