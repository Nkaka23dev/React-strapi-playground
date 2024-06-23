import { LegacyRef, forwardRef } from "react";

type InputCompProps = {
  onChange: (e: string) => void;
  label: string;
};

function InputFieldWithRef(
  { label, onChange }: InputCompProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) {
  return (
    <div>
      <h1 className="text-lg font-semibold">{label}</h1>
      <input
        type="text"
        ref={ref}
        onChange={(e) => onChange(e.target.value)}
        className="py-4 px-4 border border-gray-500 w-full outline-0 "
      />
    </div>
  );
}

export const InputComp = forwardRef(InputFieldWithRef);
