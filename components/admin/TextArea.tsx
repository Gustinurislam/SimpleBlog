type TextAreaPropType = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ label, value, onChange }: TextAreaPropType) => {
  return (
    <div>
      <label htmlFor={label} className="block text-sm mb-4">
        {label}
      </label>

      <textarea
        id={label}
        placeholder={label}
        className="bg-transparent p-1 border w-1/2 border-blue-500 rounded-md focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
