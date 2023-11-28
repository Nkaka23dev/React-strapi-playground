/* eslint-disable @typescript-eslint/no-explicit-any */
import BasicModalDialog from "../components/BasicModalDialog";
import Button from "../components/Button";
import Button2 from "../components/chapter2/Button2";
import ScrollableComponentWithMovingBlock from "../components/ScrollableComponentWithMovingBlock";
// import ButtonWithModelDialoge from "../components/ButtonWithModelDialoge";
import { VerySlowComponent } from "../components/VerySlowComponent";
import { AnotherStuff, BunchOfStuff } from "../components/mocks/Mocks";
import { useButtonModal } from "../hooks/useButtonModal";

export default function PlayGround() {
  console.log("Rerender in roots component");
  const { isOpen, open, close } = useButtonModal();
  // const content = (
  //   <>
  // <VerySlowComponent />
  // <BunchOfStuff />
  // <AnotherStuff />
  //   </>
  // );
  return (
    <div className="max-w-4xl mx-auto border border-gray-100">
      {/* I created button component because state that toggled the model was here
      wiht all the logic and cousing a re-render which made it to slow */}
      {/* <ButtonWithModelDialoge /> */}
      <Button onClick={open}>click Me!</Button>
      {isOpen && <BasicModalDialog handleOpen={close} />}
      {/* the above modal trigerring was implemented using custom hooks,look like
      our re-rendering is not happening but it is.  thou the code*/}
      {/* <ScrollableComponentWithMovingBlock content={content} /> */}
      <ScrollableComponentWithMovingBlock>
        <VerySlowComponent />
        <BunchOfStuff />
        <AnotherStuff />
      </ScrollableComponentWithMovingBlock>
      <div className="mt-10">
        <Button2 isLoading={true} />
      </div>
    </div>
  );
}
