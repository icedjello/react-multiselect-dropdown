import { Dispatch, useCallback, useState } from "react";
import LabelledCheckbox from "../Checkboxes/LabelledCheckbox";
import type { Option } from "../types";

type Props = {
  name: string;
  setSelectedOptions: Dispatch<React.SetStateAction<Option[]>>;
  selectedOptions: Option[];
  options: Option[];
};

function FlatDropdown({
  name,
  options,
  selectedOptions,
  setSelectedOptions,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = useCallback(
    (option: Option) => {
      setSelectedOptions((prevSelectedOptions) => {
        if (
          prevSelectedOptions.some(
            (selectedOption) => selectedOption.value === option.value
          )
        ) {
          return prevSelectedOptions.filter((o) => o.value !== option.value);
        } else {
          return [...prevSelectedOptions, option];
        }
      });
    },
    [setSelectedOptions]
  );

  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <p>click</p>
      </div>
      {isOpen && (
        <div>
          {options.map(({ value, label }) => (
            <LabelledCheckbox
              key={`${name}-dd-${label}`}
              value={value}
              label={label}
              name={name}
              checked={selectedOptions.some(
                ({ value: selectedValue }) => selectedValue === value
              )}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default FlatDropdown;
