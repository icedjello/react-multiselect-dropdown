import LabelledCheckbox from "../Checkboxes/LabelledCheckbox";
import ParentCheckbox from "../Checkboxes/ParentCheckbox";
import type { Option } from "../types";
import { Dispatch, useCallback, useState } from "react";

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
          {options.map(({ label, values }) => (
            <ParentCheckbox label={label} key={`${name}-${label}-c`}>
              {values.map((option) => (
                <LabelledCheckbox
                  key={`${name}-${label}-dd-${option.label}`}
                  option={option}
                  name={name}
                  checked={selectedOptions.some(
                    (selectedOption) => selectedOption.value === option.value
                  )}
                  onClick={handleOptionClick}
                />
              ))}
            </ParentCheckbox>
          ))}
        </div>
      )}
    </>
  );
}

export default NestedDropdown;

//   {
//     options.map(({ groupName, values }) => {
//       return (
//         <div key={`${name}-${groupName}-g`}>
//           <b>{groupName}</b>
//           {values.map((option) => (
//             <LabelledCheckbox
//               key={`${name}-${groupName}-dd-${option.label}`}
//               option={option}
//               name={name}
//               checked={selectedOptions.some(
//                 (selectedOption) =>
//                   selectedOption.value === option.value
//               )}
//               onClick={handleOptionClick}
//             />
//           ))}
//         </div>
//       );
//     });
//   }
