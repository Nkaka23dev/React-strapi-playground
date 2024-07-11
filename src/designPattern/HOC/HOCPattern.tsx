import NewComp1 from "./Comp1";
import Comp2HOC from "./Comp2";

export default function HOCPattern() {
  return (
    <div className="max-w-6xl mx-auto p-5 py-10 space-y-3">
      <NewComp1 adProps="899" name="Nkaka" />
      <Comp2HOC />
    </div>
  );
}
