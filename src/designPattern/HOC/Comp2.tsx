/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { Comp1Props } from "./Comp1";
import withDimensions from "./WithDimensions";

function Comp2({ width, height }: Comp1Props, ref: any) {
  return (
    <div ref={ref} className="border-8 border-green-600">
      <h1 className="">Height is:: {height}</h1>
      <h1>Width is:: {width}</h1>
    </div>
  );
}

const Comp2HOC = withDimensions(forwardRef(Comp2));
export default Comp2HOC;
