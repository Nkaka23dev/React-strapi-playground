import Input from "./Input";
import ThemedInputExample from "./ThemedInputExample";
import WhenIgnoredRenderProps from "./WhenIgnoredRenderProps";

const displayContent = (value: string) => <div>{value}</div>;
const boldedContent = (value: string) => (
  <p className="font-bold  text-base">{value}</p>
);

export default function RenderProps() {
  const lightTheme = {
    input: "border-gray-300",
    placeHolder: "placeholder-black",
    text: "text-gray-700",
  };

  const darkTheme = {
    input: "border-green-700 bg-green-800 text-white",
    placeHolder: "placeholder-white",
    text: "text-green-300",
  };
  return (
    <>
      <div>
        <Input displayContent={displayContent} />;
        <Input displayContent={boldedContent} />;
      </div>
      <hr />
      <div>
        <h1 className="text-center text-xl font-bold underline py-4">
          Themed examples:::
        </h1>
        <ThemedInputExample render={displayContent} theme={darkTheme} />
        <ThemedInputExample render={boldedContent} theme={lightTheme} />
      </div>
      <hr />
      <div>
        <h1 className="text-center text-xl font-bold underline py-4">
          When Render props is not used:::
        </h1>
        <WhenIgnoredRenderProps variant="default" />
        <WhenIgnoredRenderProps variant="bolded" />
      </div>
    </>
  );
}
