import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="py-3 px-4 text-white bg-blue-500 hover:bg-blue-700 duration-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
