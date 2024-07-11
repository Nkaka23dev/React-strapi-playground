/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, Ref } from "react";
import withDimensions from "./WithDimensions";

export type Comp1Props = {
  width: any;
  height: any;
  ref: Ref<any>;
  adProps: string;
};

function Comp1({ width, height, adProps }: Comp1Props, ref: any) {
  return (
    <div ref={ref} className="border-red-600 border-4 h-[140px] w-[401px]">
      <h1>Hey I Comp1</h1>
      <p>
        My width is: <b className="text-blue-500">{width}</b>
      </p>
      <p>
        My Height is: <b className="text-blue-500">{height}</b>
      </p>
      <b>Checks::::{adProps}</b>
    </div>
  );
}

const NewComp1 = withDimensions(forwardRef(Comp1));
export default NewComp1;
