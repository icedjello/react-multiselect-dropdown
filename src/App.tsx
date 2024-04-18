import { useState } from "react";
import "./App.css";
import FlatDropdown from "./Dropdowns/FlatDropdown";
import GroupedDropdown from "./Dropdowns/GroupedDropdown";
import { flatData, groupedData, nestedData } from "./data.json";
import type { Option } from "./types";
import NestedDropdown from "./Dropdowns/NestedDropdown";

function App() {
  const [selectedSimpleOptions, setSelectedSimpleOptions] = useState<Option[]>(
    []
  );
  const [selectedGroupedOptions, setSelectedGroupedOptions] = useState<
    Option[]
  >([]);
  const [selectedNestedOptions, setSelectedNestedOptions] = useState<Option[]>(
    []
  );

  return (
    <>
      <div>DROPDOWN</div>
      <FlatDropdown
        options={flatData}
        name={"flat-countries"}
        setSelectedOptions={setSelectedSimpleOptions}
        selectedOptions={selectedSimpleOptions}
      />
      <pre>{JSON.stringify(selectedSimpleOptions)}</pre>
      <br />
      <GroupedDropdown
        options={groupedData}
        name={"grouped-countries"}
        setSelectedOptions={setSelectedGroupedOptions}
        selectedOptions={selectedGroupedOptions}
      />
      <pre>{JSON.stringify(selectedGroupedOptions)}</pre>
      <br />
      <NestedDropdown
        options={nestedData}
        name={"nested-letters"}
        setSelectedOptions={setSelectedNestedOptions}
        selectedOptions={selectedNestedOptions}
      />
      <pre>{JSON.stringify(selectedNestedOptions)}</pre>
    </>
  );
}

export default App;
