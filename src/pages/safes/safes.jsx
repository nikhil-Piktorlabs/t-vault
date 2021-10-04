import React, { useState } from "react";
import SafesLeft from "./safesleft/safesLeft";
import SafesRight from "./safesright/safesRight";
import "./safes.css";

const Safes = () => {
  const [selectedSafe, setSelectedSafe] = useState(0);

  return (
    <div className="safes">
      <SafesLeft
        selectedSafe={selectedSafe}
        setSelectedSafe={setSelectedSafe}
      />
      <SafesRight selectedSafe={selectedSafe} />
    </div>
  );
};

export default Safes;
