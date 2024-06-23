import { useRef, useState } from "react";
import { InputComp } from "./InputComp";

export default function Ref3() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!name) {
      inputRef.current?.focus();
    } else {
      console.log(name, "Name is printed here");
    }
  };

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <form action="#">
      <InputComp label={"Username"} onChange={setName} ref={inputRef} />
      <button
        onClick={handleSubmit}
        className="py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium"
      >
        Submit this form
      </button>
    </form>
  );
}
