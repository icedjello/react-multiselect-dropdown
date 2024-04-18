import { memo } from "react";
import { Option } from "../types";

type Props = {
  name: string;
  option: Option;
  checked: boolean;
  onClick: (option: Option) => void;
};

const LabelledCheckbox = memo(({ option, name, checked, onClick }: Props) => (
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
));

export default LabelledCheckbox;
