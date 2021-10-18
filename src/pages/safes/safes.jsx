import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AllSafes from "./allSafes/allSafes";
import AboutSafe from "./aboutSafe/aboutSafe";
import { loadSafes } from "../../store/safes";
import "./safes.css";

const Safes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSafes());
  }, [dispatch]);

  return (
    <section className="safes">
      <AllSafes />
      <AboutSafe />
    </section>
  );
};

export default Safes;
