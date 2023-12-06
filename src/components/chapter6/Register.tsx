import { useState, useEffect } from "react";

type InputProps = {
  onChange: () => void;
  placeholder: string;
  label: string;
  id: string;
  className?: string;
};

const Input = ({ onChange, label, placeholder, id, className }: InputProps) => {
  useEffect(() => {
    console.info(`Input mounted`);
  }, []);

  return (
    <div>
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        onChange={onChange}
        className={className}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

const TextPlaceholder = () => (
  <p className="text-lg font-semibold text-green-500">
    Hello human! No tax for you
  </p>
);

export default function Register() {
  const [isCompany1, setIsCompany1] = useState(false);
  const [isCompany2, setIsCompany2] = useState(false);
  const [isCompany3, setIsCompany3] = useState(false);

  const [handling, setHandling] = useState(false);

  const handThis = () => {
    setHandling(!handling);
  };

  return (
    <div className="">
      <div className="border border-b">
        <h1 className="text-xl">Am I a person or a business?</h1>
        <p className="text-base">
          Turn the checkbox on and off to switch between person and business
          fields
        </p>
      </div>
      <div className="container  ">
        <div className="column mb-4 ">
          <h4 className="mb-1">Input will unmount and mount</h4>
          <label className="cursor-pointer">
            <input
              className=""
              type="checkbox"
              onChange={() => setIsCompany1(!isCompany1)}
            />
            <span className="mt-3 px-3">Check if you're a company</span>
          </label>
          {isCompany1 ? (
            <Input
              className="py-4 px-4 border border-gray-500 w-full outline-0"
              label="Company Tax Id"
              placeholder="Enter 12 digits"
              onChange={() => {}}
              id="company-tax-id"
            />
          ) : (
            <TextPlaceholder />
          )}
        </div>

        <div className="column">
          <h4 className="mb-1">Input will re-render</h4>
          <label className="space-y-4">
            <input
              className="px-3"
              type="checkbox"
              onChange={() => setIsCompany3(!isCompany3)}
            />
            Check if you're a company
          </label>
          {isCompany3 ? (
            <Input
              className="py-4 px-4 border border-gray-500 w-full outline-0"
              label="Company Tax Id"
              placeholder="Enter 12 digits"
              //these keys are added  to make sure that when react remove element it does't get confuse since all  element has type: Input, key also is there to show that element  or componet are not the same and should not be reused.
              // key="company-tax-id"
              onChange={() => {}}
              id="company-tax-id"
            />
          ) : (
            <Input
              className="py-4 px-4 border border-red-500 w-full outline-0"
              label="Person Tax Id"
              placeholder="Enter 8 digits and 3 letters"
              onChange={() => {}}
              //
              // key="person-tax-id"
              id="person-tax-id"
            />
          )}
        </div>
        {/* Updated version with best practice*/}
        <div className="column">
          <h4 className="mb-1">Input will re-render</h4>
          <label className="space-y-4">
            <input
              className="px-3"
              type="checkbox"
              onChange={() => setIsCompany2(!isCompany2)}
            />
            If you are registering as a company click here
          </label>
          {isCompany2 ? (
            <Input
              className="py-4 px-4 border border-gray-500 w-full outline-0"
              label="Company Tax Id"
              placeholder="Enter 12 digits"
              onChange={() => {}}
              id="company-tax-id"
            />
          ) : null}

          {!isCompany1 ? (
            <Input
              className="py-4 px-4 border border-green-500 w-full outline-0"
              label="Person Tax Id"
              placeholder="Enter 8 digits and 3 letters"
              onChange={() => {}}
              id="person-tax-id"
            />
          ) : null}
        </div>
        <button onClick={handThis}>Flip it</button>
      </div>
    </div>
  );
}
