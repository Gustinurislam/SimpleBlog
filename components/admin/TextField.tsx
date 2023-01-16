type TextFieldPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ label, value, onChange }: TextFieldPropType) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <input
        id={label}
        type="text"
        placeholder={label}
        className="bg-transparent p-1 border w-1/2 border-blue-500 rounded-md"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
