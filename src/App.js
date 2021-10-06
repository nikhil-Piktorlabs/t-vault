import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./parts/navbar/navBar";
import Home from "./pages/home/home";
import Safes from "./pages/safes/safes";
import Vault from "./pages/vault/vault";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/vault/:text?" component={Vault} />
          <Route path="/safes" component={Safes} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
