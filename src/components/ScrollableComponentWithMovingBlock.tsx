import { useState } from "react";
import MovingBlock from "./MovingBlock";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ScrollableComponentWithMovingBlock({ children }: any) {
  const [position, setPosition] = useState(60);

  const getPosition = (value: number) => {
    return 60 - value / 2;
  };

  const onScroll = (e: any) => {
    const calculated = getPosition(e.target.scrollTop);
    setPosition(calculated);
    console.log(calculated);
  };

  return (
    <div
      className="p-10 h-[7rem]  overflow-scroll border relative z-10 border-red-800"
      onScroll={onScroll}
    >
      <MovingBlock position={position} />
      {children}
    </div>
  );
}
