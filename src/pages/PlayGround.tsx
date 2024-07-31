// import { useEffect, useState } from "react";

import HOCHome from "../designPattern/Hoc/HOCHome";

export default function PlayGround() {
  // const [count, setCount] = useState(0);

  // const childrenWithProps = React.Children.map(children, (child) =>
  //   React.cloneElement(child, { additionalProp: "someValue" })
  // );

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);
  return (
    <>
      {/* <div>
          <p className="p-10 text-4xl">You Clicked {count} times</p>
        </div> */}
      {/* <Register /> */}
      {/* <div className="flex justify-between items-center"> */}
      {/* <button
            onClick={handleAlertClick}
            className="text-lg bg-blue-500 rounded-md duration-300 hover:bg-blue-700 text-white font-semibold py-3 px-10"
          >
            Show Alert
          </button> */}
      {/* </div>
        <Chapter1 /> */}
      {/* <Ref /> */}
      {/* <Ref2 /> */}
      {/* <Parent /> */}
      {/* <div className="max-w-7xl mx-auto h-96 bg-red-700 grid">
        <Child />
      </div> */}
      {/* <CopilotComponent /> */}
      {/* <HOCPattern /> */}
      <HOCHome />
    </>
  );
}
