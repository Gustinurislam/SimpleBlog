type TextFieldPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  errors: string[];
};

const TextField = ({
  label,
  value,
  onChange,
  disabled,
  errors,
}: TextFieldPropType) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <input
        id={label}
        type="text"
        placeholder={label}
        className={`input-post ${errors.length ? 'border-red-500' : 'border-blue-500'}`}
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

export default TextField;
