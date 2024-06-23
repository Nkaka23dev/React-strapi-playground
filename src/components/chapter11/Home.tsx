// import { ChangeEventHandler, useEffect, useState } from "react";

// const inputWithJustOnChange = () => {
//   const onchange: ChangeEventHandler<HTMLInputElement> = (e) => {
//     console.log("Changed value", e.target.value);
//   };
//   return (
//     <input
//       type="text"
//       className="w-full outline-none border border-black px-5 py-4"
//     />
//   );
// };

// export default function Home() {
//   const [data, setData] = useState("");

//   useEffect(() => {
//     console.log("Request is sent in  the backend");
//   }, [data]);

//   // ...

//   return (
//     <div className="max-w-6xl mx-auto p-10">
//       <h1 className="text-2xl font-semibold">Debounce and Throttle examples</h1>
//       <div>
//         <h1 className="py-3 text-base font-medium">
//           Open the console and type something in the input really fast
//         </h1>
//         <h1>{data}</h1>
//         <inputWithJustOnChange />
//       </div>
//     </div>
//   );
// }
