"use client";

interface ButtonProps {
  color: string;
  title: string;
  size: string;
  actionClick?: Function;
  loading: boolean;
}

import Spinner from "./icons/Spinner";

export const Button: React.FC<ButtonProps> = ({
  color,
  title,
  size,
  actionClick,
  loading,
}) => {
  return (
    <button
      onClick={() => (actionClick ? actionClick() : "")}
      className={`px-6 py-4 bg-blue-500 rounded-md text-white ${color} ${size} text-center`}
    >
      {loading ? <Spinner /> : title}
    </button>
  );
};
