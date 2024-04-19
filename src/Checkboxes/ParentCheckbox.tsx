import { ParentCheckedState } from "../types";
import "./ParentCheckbox.module.css";

import { PropsWithChildren } from "react";
type Props = {
  label: string;
  checked: ParentCheckedState;
  onParentClicked: (checked: ParentCheckedState) => void;
};

function ParentCheckbox({
  label,
  children,
  checked,
  onParentClicked,
}: PropsWithChildren<Props>) {
  return (
    <div>
      <div>
        <label className="container">
          {label}
          <input
            type="checkbox"
            checked={checked === "all"}
            onChange={() => onParentClicked(checked)}
            className={checked === "some" ? "some" : undefined}
          />
          <span className="checkmark"></span>
        </label>
      </div>
      {children}
    </div>
  );
}

export default ParentCheckbox;
