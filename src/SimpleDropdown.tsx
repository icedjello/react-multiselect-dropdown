import { Dispatch, useCallback, useState } from "react";
import LabelledCheckbox from "./LabelledCheckbox";

export type Option = {
  value: string;
  label: string;
};

type Props = {
  name: string;
  setSelectedOptions: Dispatch<React.SetStateAction<Option[]>>;
  selectedOptions: Option[];
  options: Option[];
};

export function SimpleDropdown({
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
          {options.map((option) => (
            <LabelledCheckbox
              key={`${name}-dd-${option.label}`}
              option={option}
              name={name}
              checked={selectedOptions.some(
                (selectedOption) => selectedOption.value === option.value
              )}
              onClick={handleOptionClick}
            />
          ))}
        </div>
      )}
    </>
  );
}
