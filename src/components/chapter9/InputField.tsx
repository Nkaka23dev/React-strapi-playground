/* eslint-disable @typescript-eslint/no-explicit-any */
export default function InputField({ label, onChange }: any) {
  return (
    <div>
      <h1>{label}</h1>
      <input
        type="text"
        // ref={ref}
        className="py-4 px-4 border border-gray-500 w-full outline-0"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
