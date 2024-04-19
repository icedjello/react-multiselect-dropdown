import NestedCheckboxes from "../Checkboxes/NestedCheckboxes";
import type { Option } from "../types";
import { Dispatch, useState } from "react";

type NestedOptions = {
  label: string;
  values: Option[];
};

type Props = {
  name: string;
  setSelectedOptions: Dispatch<React.SetStateAction<Option[]>>;
  selectedOptions: Option[];
  options: NestedOptions[];
};

function NestedDropdown({
  name,
  options,
  selectedOptions,
  setSelectedOptions,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>click</p>
      </div>
      {isOpen && (
        <div>
          {options.map(({ label, values }) => (
            <NestedCheckboxes
              label={label}
              name={name}
              key={`${name}-${label}-c`}
              values={values}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default NestedDropdown;
