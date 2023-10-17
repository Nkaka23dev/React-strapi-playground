import { useState } from "react";
import Button from "./Button";
import BasicModalDialog from "./BasicModalDialog";

export default function ButtonWithModelDialoge() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <Button onClick={handleOpen}>Click Me!</Button>
      </div>
      {open && <BasicModalDialog handleOpen={handleOpen} />}
    </>
  );
}
