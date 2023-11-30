import Loading from "@mui/icons-material/HourglassEmpty";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import Button2 from "./Button2";

export default function ButtonsPage() {
  type IconProps = {
    color: string;
    size?: "large" | "medium" | "small";
  };
  const Error = ({ color, size }: IconProps) => (
    <ErrorIcon style={{ color }} fontSize={size} />
  );
  const Warning = ({ color, size }: IconProps) => (
    <WarningIcon style={{ color }} fontSize={size} />
  );
  const Avatar = () => (
    <span className="border border-gray-700 rounded-full p-1">AB</span>
  );

  return (
    <div className="mt-10 space-y-4">
      <Button2 icon={<Loading />} appearance={"bg-blue-500 text-white"} />
      <Button2
        icon={<Error color="red" />}
        appearance={"bg-black text-white"}
      />
      <Button2 size="text-3xl" icon={<Warning color="orange" />} />
      <Button2 icon={<Avatar />} />
    </div>
  );
}
