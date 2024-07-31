import { forwardRef, Ref } from "react";
import withDimensions, { DimensionsProps } from "./WithDimensions";

function Comp(
  { width, height, name }: Omit<DimensionsProps, "ref">,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div>
      <h1 className="text-lg font-semibold py-4 text-red-800">
        Element 1 width & height
      </h1>
      <div
        ref={ref}
        className="w-[40rem] h-[10rem] border-red-500 border-4 p-5"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        doloribus cum blanditiis culpa, nihil voluptatem optio corporis sapiente
        adipisci accusamus!
      </div>
      <p>
        Width is: <b className="text-red-800">{width} px</b>
        <hr />
        Height is: <b className="text-red-800">{height} px</b>
        <br />
        Other PROPS: <b className="text-green-800">{name} </b>
      </p>
    </div>
  );
}

const Comp1 = withDimensions(forwardRef(Comp));
export default Comp1;
