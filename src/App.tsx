import { useState } from "react";
import "./App.css";
import { SimpleDropdown, Option } from "./SimpleDropdown";
import { GroupedDropdown } from "./GroupedDropdown";
import { flatData, groupedData } from "./data.json";

function App() {
  const [selectedSimpleOptions, setSelectedSimpleOptions] = useState<Option[]>(
    []
  );
  const [selectedGroupedOptions, setSelectedGroupedOptions] = useState<
    Option[]
  >([]);

  return (
    <>
      <div>DROPDOWN</div>
      <SimpleDropdown
        options={flatData}
        name={"flat-countries"}
        setSelectedOptions={setSelectedSimpleOptions}
        selectedOptions={selectedSimpleOptions}
      />
      <pre>{JSON.stringify(selectedSimpleOptions)}</pre>
      <GroupedDropdown
        options={groupedData}
        name={"grouped-countries"}
        setSelectedOptions={setSelectedGroupedOptions}
        selectedOptions={selectedGroupedOptions}
      />
      <pre>{JSON.stringify(selectedGroupedOptions)}</pre>
    </>
  );
}

export default App;
