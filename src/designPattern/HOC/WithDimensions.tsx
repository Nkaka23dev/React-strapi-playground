/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, useEffect, useRef, useState } from "react";

export default function withDimensions(Element: ComponentType<any>) {
  return function WithDimension(props: any) {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);

    const compRef = useRef<any>();

    useEffect(() => {
      if (compRef.current) {
        setWidth(compRef.current.offsetWidth);
        setHeight(compRef.current.offsetHeight);
      }
    }, [compRef]);

    return <Element ref={compRef} height={height} width={width} {...props} />;
  };
}
