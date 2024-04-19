import "./NestedCheckboxes.module.css";
import { Option } from "../types";
import {
  Dispatch,
  ForwardRefExoticComponent,
  LegacyRef,
  RefAttributes,
  useRef,
} from "react";
import LabelledCheckboxWithRef from "./LabelledCheckboxWithRef";

type Thingy = ForwardRefExoticComponent<
  Props &
    RefAttributes<{
      setChecked: (checked: boolean) => void;
    }>
>;

type Props = {
  label: string;
  name: string;
  values: Option[];
  selectedOptions: Option[];
  setSelectedOptions: Dispatch<React.SetStateAction<Option[]>>;
};

// const handleOptionClick = useCallback(
//   (option: Option) => {
//     setSelectedOptions((prevSelectedOptions) => {
//       if (
//         prevSelectedOptions.some(
//           (selectedOption) => selectedOption.value === option.value
//         )
//       ) {
//         return prevSelectedOptions.filter((o) => o.value !== option.value);
//       } else {
//         return [...prevSelectedOptions, option];
//       }
//     });
//   },
//   [setSelectedOptions]
// );

const getCheckedState = (values: Option[], selectedOptions: Option[]) => {
  const amountOfMatches = selectedOptions.filter(({ value: selectedValue }) => {
    return values.find(({ value }) => value === selectedValue);
  }).length;

  return amountOfMatches === 0
    ? "none"
    : amountOfMatches === values.length
    ? "all"
    : "some";
};

function NestedCheckboxes({
  label,
  name,
  values,
  selectedOptions,
  setSelectedOptions,
}: Props) {
  const childRefs = useRef<
    Map<string, LegacyRef<{ setChecked: (checked: boolean) => void }>>
  >(new Map());
  const handleOptionClick = () => {};

  const handleParentClick = () => {
    const currentCheckedState = getCheckedState(values, selectedOptions);

    if (currentCheckedState === "none") {
      console.log("should check all");
      childRefs.current.forEach(({ setChecked }) => {
        setChecked(true);
      });
    }
  };

  return (
    <div>
      <div>
        <label className="container">
          {label}
          <input
            type="checkbox"
            checked={false}
            onChange={handleParentClick}
            // className={checked === "some" ? "some" : undefined}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      {values.map((option) => {
        const key = `dd-${option.label}`;
        return (
          <LabelledCheckboxWithRef
            ref={(
              el: LegacyRef<{ setChecked: (checked: boolean) => void }>
            ) => {
              if (el) childRefs.current.set(key, el);
            }}
            key={key}
            option={option}
            name={name}
            checked={selectedOptions.some(
              (selectedOption) => selectedOption.value === option.value
            )}
            onClick={handleOptionClick}
          />
        );
      })}
    </div>
  );
}

export default NestedCheckboxes;
