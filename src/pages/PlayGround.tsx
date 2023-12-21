// import { useEffect, useState } from "react";
import Ref3 from "../components/chapter9/Ref3";

export default function PlayGround() {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);
  return (
    <>
      <div className="max-w-4xl mx-auto border border-gray-100"></div>
      <div className="max-w-4xl mx-auto border border-gray-100">
        {/* <div>
          <p className="p-10 text-4xl">You Clicked {count} times</p>
        </div> */}
        {/* <Register /> */}
        <div className="flex justify-between items-center">
          {/* <button
            onClick={handleAlertClick}
            className="text-lg bg-blue-500 rounded-md duration-300 hover:bg-blue-700 text-white font-semibold py-3 px-10"
          >
            Show Alert
          </button> */}
        </div>
        {/* <Ref /> */}
        {/* <Ref2 /> */}
        <Ref3 />
      </div>
    </>
  );
}
