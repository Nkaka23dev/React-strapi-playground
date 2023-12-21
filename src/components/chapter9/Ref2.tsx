/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";
import BasicModalDialog from "../BasicModalDialog";
import SearchComp from "./SearchComp";

export default function Ref2() {
  /*****
    IN THE FOLLOWING CODE I WAS CHECKING RERENDERING ON EVERY CHARACTER TYPING OR DELETING USING USE STATE
   * *****/

  //   const [value, setvalue] = useState("");

  //   const onChange = (e: any) => {
  //     setvalue(e.target.value);
  //   };
  //   console.log(value, "Value but re-rendered!");

  //   const submit = () => {
  //     console.log(value);
  //   };
  //   const numberOfLetters = value.length ?? 0;

  const ref: any = useRef();

  const numberOfLetters = ref.current?.length ?? 0;

  const onChange = (e: any) => {
    ref.current = e.target.value;
  };
  console.log(ref.current);

  const submit = () => {
    console.log(ref.current);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <form action="#">
        <input
          type="text"
          onChange={onChange}
          className="py-4 px-4 border border-gray-500 w-full outline-0 "
        />
        character Count:{numberOfLetters}
        <div className="flex gap-5 items-center">
          <button
            className={`py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium`}
            onClick={submit}
          >
            submit
          </button>
          <button
            className={`py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium`}
            onClick={() => setIsOpen(!isOpen)}
          >
            Open Dialog
          </button>
        </div>
      </form>
      {isOpen && <BasicModalDialog handleOpen={setIsOpen} isOpen={isOpen} />}
      <SearchComp search={ref.current} />
    </>
  );
}
