import React from "react";
import SafesLeft from "./safesleft/safesLeft";
import SafesRight from "./safesright/safesRight";
import "./safes.css";

const Safes = () => {
  return (
    <div className="safes">
      <SafesLeft />
      <SafesRight />
    </div>
  );
};

export default Safes;
