import React from "react";
import SafesLeft from "./safesleft/safesLeft";
import SafesRight from "./safesright/safesRight";
import "./safes.css";

const Safes = () => {
  return (
    <section className="safes">
      <SafesLeft />
      <SafesRight />
    </section>
  );
};

export default Safes;
