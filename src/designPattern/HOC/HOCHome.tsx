import Comp1 from "./Comp1";
import Comp2 from "./Comp2";

export default function HOCHome() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="font-semibold text-2xl pb-7">Higher order components</h1>
      <Comp1 name="Eric Nkaka" />
      <div className="py-5" />
      <Comp2 />
    </div>
  );
}
