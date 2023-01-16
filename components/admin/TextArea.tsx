type TextAreaPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled: boolean;
};

const TextArea = ({ label, value, onChange, disabled }: TextAreaPropType) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <textarea
        id={label}
        placeholder={label}
        className="input-post"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default TextArea;
