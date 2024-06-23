import React from "react";

export default function Parent() {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { additionalProp: "someValue" })
  );
  <div></div>;
  return <div>{childrenWithProps}</div>;
}
