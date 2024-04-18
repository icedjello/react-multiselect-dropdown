import { Dispatch, useCallback, useState } from "react";
import LabelledCheckbox from "../Checkboxes/LabelledCheckbox";
import { Option } from "../types";

type GroupedOptions = {
  groupName: string;
  values: Option[];
};

type Props = {
  name: string;
  setSelectedOptions: Dispatch<React.SetStateAction<Option[]>>;
  selectedOptions: Option[];
  options: GroupedOptions[];
};

function GroupedDropdown({
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
          {options.map(({ groupName, values }) => {
            return (
              <div key={`${name}-${groupName}-g`}>
                <b>{groupName}</b>
                {values.map((option) => (
                  <LabelledCheckbox
                    key={`${name}-${groupName}-dd-${option.label}`}
                    option={option}
                    name={name}
                    checked={selectedOptions.some(
                      (selectedOption) => selectedOption.value === option.value
                    )}
                    onClick={handleOptionClick}
                  />
                ))}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default GroupedDropdown;
