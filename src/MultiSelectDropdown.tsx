import { Dispatch, useCallback, useState } from "react";

export type Option = {
  value: string;
  label?: string;
};

type Props = {
  name: string;
  options: Option[];
  setSelectedOptions: Dispatch<React.SetStateAction<Option[]>>;
  selectedOptions: Option[];
};

export function SimpleDropdown({
  name,
  options,
  selectedOptions,
  setSelectedOptions,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = useCallback(
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
      <div onClick={() => setIsOpen(!isOpen)}>click to open</div>
      {isOpen && (
        <div>
          {options.map((option) => (
            <span key={`${name}-dd-${option.label}`}>
              <input
                type="checkbox"
                name={name}
                value={option.value}
                checked={selectedOptions.some(
                  (selectedOption) => selectedOption.value === option.value
                )}
                onChange={() => handleChange(option)}
              />
              <label htmlFor={option.value}>{option.label}</label>
            </span>
          ))}
        </div>
      )}
    </>
  );
}
