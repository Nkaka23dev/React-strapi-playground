/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
// import { useRef } from "react";

export default function Ref3() {
  // const ref = useRef("DEFAULT");

  // const handleClick = () => {
  //   console.log("Value Before", ref.current);
  //   ref.current = "Nkaka";
  //   console.log("Value After", ref.current);
  // };

  /**
   * THE ABOVE CODE USE STATE TO CHECK THE VALUE BEFORE AND AFTER STATE UPDATE
   * **/

  const [value, setvalue] = useState("DEFAULT");

  const handleClick = () => {
    console.log("Value Before", value);
    setvalue("NKaka");
    console.log("Value After", value);
  };
  return (
    <form action="#">
      <input
        type="text"
        // onChange={onChange}
        className="py-4 px-4 border border-gray-500 w-full outline-0 "
      />

      {/* <h1 className="text-4xl">{ref.current}</h1> */}
      <h1 className="text-4xl">{value}</h1>
      <button onClick={handleClick}>Click</button>
    </form>
  );
}
