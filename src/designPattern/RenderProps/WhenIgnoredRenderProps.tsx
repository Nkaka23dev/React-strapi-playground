import { useState } from "react";

type InputProps = {
  variant?: "default" | "bolded";
};

export default function WhenIgnoredRenderProps({
  variant = "default",
}: InputProps) {
  const [value, setValue] = useState("");

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const renderContent = () => {
    switch (variant) {
      case "bolded":
        return <p className="font-bold text-red-500 text-lg">{value}</p>;
      case "default":
      default:
        return <div>{value}</div>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-5">
      <input
        type="text"
        onChange={handleChanges}
        className="w-full px-4 py-3 outline-none border-2 rounded-sm"
        placeholder="Enter anything..."
      />
      <p className="py-3 flex gap-3">Displayed values: {renderContent()}</p>
    </div>
  );
}
/**
 DISADVANTAGES::: 

 - Reduced Flexibility in Customization: With render props or children approach, consumers of the component have more control over how the content is displayed because they can define any custom rendering logic they want. In the refactored approach, they are limited to the predefined variants (default or bolded).

 - Code Readability: Conditional rendering within components can sometimes make the code less readable, especially if the logic for different variants becomes complex. It might be harder to understand how each variant affects the rendering without diving into the Input component code.

 -Scalability: If the number of variants grows significantly, managing them all within a single Input component might become unwieldy. This can potentially lead to a bloated component with many conditional checks.
 * ***/
