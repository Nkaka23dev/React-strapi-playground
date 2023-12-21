/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useRef, useState } from "react";
import { useRef } from "react";

export default function Ref() {
  //   const ref = useRef({ id: "Nkaka" });
  //   const [value, setvalue] = useState("");
  //   console.log(ref.current, "Re-rendering is happening");
  //   useEffect(() => {
  //     console.log(ref.current);
  //   }, []);

  //   const onChange = (e: any) => {
  //     setvalue(e.target.value);
  //   };

  /***
   the following code will be implemented using ref instead of 
   * ***/

  const ref = useRef({ id: "Nkaka" });
  console.log(ref.current, "Re-rendering is happening");
  const ref2 = useRef();

  const onChange = (e: any) => {
    ref2.current = e.target.value;
  };

  const submit = () => {
    console.log(ref2.current);
  };
  return (
    <form action="#">
      <input
        type="text"
        onChange={onChange}
        className="py-4 px-4 border border-gray-500 w-full outline-0 "
      />
      <button
        className={`py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium`}
        onClick={submit}
      >
        submit
      </button>
    </form>
  );
}
