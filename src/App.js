import React from "react";
import NavBar from "./parts/navbar/navBar";
import Safes from "./pages/safes/safes";

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
