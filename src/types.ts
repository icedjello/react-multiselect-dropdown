type Option = {
  value: string;
  label: string;
};

type GroupedOption = {
  groupName: string;
  values: Option[];
};

type NestedOption = GroupedOption & {
  nested: true;
};

type ParentCheckedState = "all" | "none" | "some";

export type { Option, GroupedOption, ParentCheckedState };
