import React from "react";
import NavBar from "./components/navbar/navBar";
import Safes from "./components/safes/safes";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Safes />
      </main>
    </React.Fragment>
  );
}

export default App;
