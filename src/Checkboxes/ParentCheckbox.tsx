import { PropsWithChildren } from "react";
type Props = {
  label: string;
};

function ParentCheckbox({ label, children }: PropsWithChildren<Props>) {
  console.log(children);

  return (
    <div>
      <b>{label}</b>
      {children}
    </div>
  );
}

export default ParentCheckbox;
