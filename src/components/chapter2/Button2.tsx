import { ReactNode } from "react";

type Button2Props = {
  appearance?: string;
  icon: ReactNode;
  size?: string;
};

export default function Button2({ icon, appearance, size }: Button2Props) {
  return (
    <button
      className={`py-2 px-8 border ${appearance}  flex items-center gap-2 cursor-pointer`}
    >
      <span className={`font-semibold ${size} `}> Submit </span>
      {icon}
    </button>
  );
}
