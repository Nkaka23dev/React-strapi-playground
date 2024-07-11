import React, { useState } from "react";

interface ThemedInputProps {
  theme: { [key: string]: string };
  render: (value: string, theme: { [key: string]: string }) => React.ReactNode;
}

export default function ThemedInputExample({
  theme,
  render,
}: ThemedInputProps) {
  const [value, setValue] = useState("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto py-5">
      <input
        type="text"
        value={value}
        onChange={handleChanges}
        className={`w-full px-4 py-3 outline-none border-2 rounded-sm ${theme.input} ${theme.placeHolder}`}
        placeholder="Enter anything..."
      />
      <p className={`py-3 flex gap-3 ${theme.text}`}>{render(value, theme)}</p>
    </div>
  );
}
