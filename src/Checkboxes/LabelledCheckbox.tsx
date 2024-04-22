import { Option } from "../types";

type Props = {
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onClick: (option: Option) => void;
};

const LabelledCheckbox = ({ value, label, name, checked, onClick }: Props) => (
  <span>
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={() => onClick({ value, label })}
    />
    <label htmlFor={value}>{label}</label>
  </span>
);

export default LabelledCheckbox;
