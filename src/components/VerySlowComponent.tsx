const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};
console.log("Rerender in Slow component");
export const VerySlowComponent = () => {
  wait(500);
  return <h1>I am Ver Slow</h1>;
};

export const AnotherVerySlowComponent = () => {
  wait(500);
  return <h1>I ma very slow</h1>;
};
