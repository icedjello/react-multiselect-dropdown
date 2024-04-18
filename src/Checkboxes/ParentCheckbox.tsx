import "./ParentCheckbox.module.css";

import { PropsWithChildren } from "react";
type Props = {
  label: string;
  checked: "all" | "none" | "some";
};

function ParentCheckbox({
  label,
  children,
  checked,
}: PropsWithChildren<Props>) {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <label className="container">
          {label}
          <input
            type="checkbox"
            checked={checked === "all"}
            onClick={handleClick}
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
