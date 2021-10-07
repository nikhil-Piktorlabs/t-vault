import React from "react";
import AllSafes from "./allSafes/allSafes";
import AboutSafe from "./aboutSafe/aboutSafe";
import "./safes.css";

const Safes = () => {
  return (
    <section className="safes">
      <AllSafes />
      <AboutSafe />
    </section>
  );
};

export default Safes;
