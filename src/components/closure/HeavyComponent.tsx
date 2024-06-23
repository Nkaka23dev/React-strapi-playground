import Button from "../Button";

type HeavyComponentProps = {
  title: string;
  onClick: () => void;
};

export default function HeavyComponent({
  title,
  onClick,
}: HeavyComponentProps) {
  console.log("Re-redering is happening right now!");
  return (
    <div className="mt-5">
      <h3 className="font-bold text-xl">{title}</h3>
      <h1 className="text-lg">Other stuff need to be here!</h1>
      <Button onClick={onClick} children={"done"} />
    </div>
  );
}
