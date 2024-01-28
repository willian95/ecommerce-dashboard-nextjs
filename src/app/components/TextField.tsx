export interface TextFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  name,
}) => {
  return (
    <div className="py-3">
      <p>{label}</p>
      <input
        name={name}
        type="email"
        className="border border-gray-200 mt-2 w-full rounded-md px-3 py-2 outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};
