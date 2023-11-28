type Button2Props = {
  isLoading?: boolean;
};

export default function Button2({ isLoading }: Button2Props) {
  return (
    <button className="py-2 px-8 border flex items-center gap-2">
      <span className="font-semibold"> Submit </span>
      {isLoading ? <span className="text-green-400">Loading...</span> : null}
    </button>
  );
}
