import React, { useState } from "react";
import SafesList from "./safesList";
import SecretsList from "./secretsList";
import "./safes.css";

const Safes = () => {
  const [selectedSafe, setSelectedSafe] = useState(0);

  const handleSelectedSafe = (id) => {
    setSelectedSafe(id);
  };

  return (
    <div className="safes">
      <SafesList
        selectedSafe={selectedSafe}
        onSelectedSafe={handleSelectedSafe}
      />
      <SecretsList />
    </div>
  );
};

export default Safes;
