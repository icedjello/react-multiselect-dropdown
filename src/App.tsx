import { useEffect, useState } from "react";
import "./App.css";
import { SimpleDropdown, Option } from "./MultiSelectDropdown";
import { easyData } from "./data.json";

function App() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  useEffect(() => {
    console.log({ selectedOptions });
  });

  return (
    <>
      <div>DROPDOWN</div>
      <SimpleDropdown
        options={easyData}
        name={"countries"}
        setSelectedOptions={setSelectedOptions}
        selectedOptions={selectedOptions}
      />
    </>
  );
}

export default App;
