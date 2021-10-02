import React from "react";
import SafesList from "./safesList";
import SecretsList from "./secretsList";
import "./safes.css";

const Safes = () => {
  return (
    <div className="safes">
      <SafesList />
      <SecretsList />
    </div>
  );
};

export default Safes;
