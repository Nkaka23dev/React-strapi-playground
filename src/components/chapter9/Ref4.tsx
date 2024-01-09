import { useEffect, useRef } from "react";

export default function Ref4() {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current);
  });

  return (
    <form action="#">
      <input
        type="text"
        ref={ref}
        className="py-4 px-4 border border-gray-500 w-full outline-0 "
      />
      <button
        className={`py-2 px-8 border flex items-center gap-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-medium`}
      >
        submit
      </button>
    </form>
  );
}
