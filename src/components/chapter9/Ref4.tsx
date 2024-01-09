/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import InputField from "./InputField";

export default function Ref4() {
  const [value, setValue] = useState("");

  const ref = useRef<any>(null);
  function handleSubmit() {
    if (!value) {
      ref.current.focus();
    } else {
      alert(`${value} submitted success!`);
    }
  }

  return (
    <form action="#">
      <InputField label="Add a name" onChange={setValue} />
      <button
        onClick={handleSubmit}
        className={`py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium`}
      >
        submit
      </button>
    </form>
  );
}
