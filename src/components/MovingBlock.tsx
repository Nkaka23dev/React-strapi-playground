export default function MovingBlock({ position }: { position: number }) {
  return (
    <div
      className={`fixed text-white  items-center flex right-[27rem] bg-orange-500 w-[4rem] h-[2rem]`}
      style={{ top: position }}
    >
      <div className="m-auto"> {position}</div>
    </div>
  );
}
