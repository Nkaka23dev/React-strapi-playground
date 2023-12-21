import { useState } from "react";

type SearchCompProps = {
  search: string;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SearchComp({ search }: SearchCompProps) {
  const [showResults, setShowResults] = useState(false);
  console.log("SEARCHING COMPONENT RE-RENDERED BECAUSE OF SHOWRESULTS STATE");
  return (
    <>
      Searching for: {search} <br />
      {/*This will trigger re-render*/}
      <button
        className={`py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium`}
        onClick={() => setShowResults(!showResults)}
      >
        show results
      </button>
    </>
  );
}
