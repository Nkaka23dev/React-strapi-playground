/* eslint-disable @typescript-eslint/no-explicit-any */
import { LegacyRef, useEffect, useRef, useState } from "react";

export type DimensionsProps = {
  width: number;
  height: number;
  ref: LegacyRef<HTMLElement>;
  name: string;
};

export default function withDimensions(Component: any) {
  return function WithDimensions(props: any) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    const refValue = useRef<HTMLElement>(null);

    useEffect(() => {
      if (refValue.current) {
        setWidth(refValue.current.offsetWidth);
        setHeight(refValue.current.offsetHeight);
      }
    }, []);

    return (
      <Component ref={refValue} width={width} height={height} {...props} />
    );
  };
}
