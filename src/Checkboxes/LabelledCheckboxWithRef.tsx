import { forwardRef, useImperativeHandle } from "react";
import { Option } from "../types";

type Props = {
  name: string;
  option: Option;
  checked: boolean;
  onClick: (option: Option) => void;
};

const LabelledCheckboxWithRef = forwardRef<
  {
    setChecked: (checked: boolean) => void;
  },
  Props
>(({ option, name, checked, onClick }, ref) => {
  useImperativeHandle(ref, () => ({
    setChecked: (checked: boolean) => {
      console.log(checked);
    },
  }));

  return (
    <span>
      <input
        type="checkbox"
        name={name}
        value={option.value}
        checked={checked}
        onChange={() => onClick(option)}
      />
      <label htmlFor={option.value}>{option.label}</label>
    </span>
  );
});

export default LabelledCheckboxWithRef;
