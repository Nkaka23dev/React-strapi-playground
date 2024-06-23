import React, { useState } from "react";
import HeavyComponent from "./HeavyComponent";

const HeavyComponentMemo = React.memo(HeavyComponent, (before, after) => {
  return before.title === after.title;
});

export default function Chapter1() {
  const [value, setValue] = useState<string>();

  //   const onClick = useCallback(() => {
  //     console.log(value);
  //   }, [value]);

  console.log(value, "I am outside");

  const onClick = () => {
    console.log(value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="py-4 px-4 border border-gray-500 w-full outline-0 "
      />
      <HeavyComponentMemo
        title={"Hello! I am title from Heavy comp."}
        onClick={onClick}
      />
    </div>
  );
}
