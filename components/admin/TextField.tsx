type TextFieldPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
};

const TextField = ({ label, value, onChange, disabled }: TextFieldPropType) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <input
        id={label}
        type="text"
        placeholder={label}
        className="input-post"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextField;
