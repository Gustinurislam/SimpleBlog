type TextAreaPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
  errors: string[];
};

const TextArea = ({
  label,
  value,
  onChange,
  disabled,
  errors,
}: TextAreaPropType) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <textarea
        id={label}
        placeholder={label}
        className={`input-post ${
          errors.length ? 'border-red-500' : 'border-blue-500'
        }`}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />

      {errors.length
        ? errors.map((error, index) => (
            <p key={label + error + index} className="text-red-500">
              {error}
            </p>
          ))
        : null}
    </div>
  );
};

export default TextArea;
