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
              onChange={() => setIsCompany2(!isCompany2)}
            />
            Check if you're a company
          </label>
          {isCompany2 ? (
            <Input
              className="py-4 px-4 border border-gray-500 w-full outline-0"
              label="Company Tax Id"
              placeholder="Enter 12 digits"
              onChange={() => {}}
              id="company-tax-id"
            />
          ) : (
            <Input
              className="py-4 px-4 border border-red-500 w-full outline-0"
              label="Person Tax Id"
              placeholder="Enter 8 digits and 3 letters"
              onChange={() => {}}
              id="person-tax-id"
            />
          )}
        </div>
      </div>
    </div>
  );
}
