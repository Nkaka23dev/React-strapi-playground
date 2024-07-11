/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function Input({ displayContent }: any) {
  const [value, setValue] = useState("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto py-5">
      <input
        type="text"
        onChange={(e) => handleChanges(e)}
        className="w-full  px-4 py-3 outline-none border-2 rounded-sm"
        placeholder="Enter anything..."
      />
      <p className="py-3 flex gap-3">
        Displayed values : {displayContent(value)}
      </p>
    </div>
  );
}
