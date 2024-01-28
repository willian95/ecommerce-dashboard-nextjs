import { useState } from "react";
import EyeIcon from "./icons/EyeIcon";
import EyeSlashIcon from "./icons/EyeSlashIcon";

export interface TextFieldProps {
  label: string;
  placeholder: string;
  name: string;
}

export const PasswordField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  name,
}) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <div className="py-3">
      <p>{label}</p>
      <div className="flex border border-gray-200 mt-2 w-full rounded-md px-3 py-2 justify-between">
        <input
          className="outline-none"
          name={name}
          type={hidePassword ? "password" : "text"}
          placeholder={placeholder}
        />
        <button
          className="w-1/12 justify-end flex"
          onClick={() => setHidePassword(!hidePassword)}
        >
          {hidePassword ? <EyeIcon /> : <EyeSlashIcon />}
        </button>
      </div>
    </div>
  );
};
