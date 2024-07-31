import { forwardRef, Ref } from "react";
import withDimensions, { DimensionsProps } from "./WithDimensions";

function Comp(
  { width, height }: Omit<DimensionsProps, "ref">,
  ref: Ref<HTMLDivElement>
) {
  return (
    <div>
      <h1 className="text-lg font-semibold py-4 text-blue-800">
        Element 2 width & height
      </h1>
      <div
        ref={ref}
        className="w-[35rem] min-h-[1px] border-blue-500 border-4 p-5"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
        doloribus cum blanditiis culpa, nihil voluptatem optio corporis sapiente
        adipisci accusamus! Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Dolorem, nostrum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Et commodi, quia, ullam nobis repellendus, velit
        magnam nam animi voluptatibus error quibusdam magni! Reprehenderit nemo
        facilis quisquam maxime illum culpa ratione?
      </div>
      <p>
        Width is: <b className="text-blue-800">{width} px</b>
        <hr />
        Height is: <b className="text-blue-800">{height} px</b>
      </p>
    </div>
  );
}

const Comp2 = withDimensions(forwardRef(Comp));
export default Comp2;
