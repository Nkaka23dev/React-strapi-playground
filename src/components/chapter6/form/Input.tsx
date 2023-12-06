type InputProps = {
  placeholder: string;
  id: string;
};

export default function Input({ placeholder, id }: InputProps) {
  return (
    <div>
      <input
        className="py-4 px-4 border border-gray-500 w-full outline-0 "
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
