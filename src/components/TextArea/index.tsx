import classes from "./textarea.module.css";

interface TextAreaProps {
  placeholder: string;
  value: string;
  error?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({
  className,
  placeholder,
  value,
  error,
  onChange,
}: TextAreaProps) {
  return (
    <div className={`${className} flex flex-col`}>
      <textarea
        className={
          !!error
            ? `${classes.textarea} ${classes.error}`
            : `${classes.textarea}`
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="text-red-500 text-end">{error}</span>}
    </div>
  );
}
