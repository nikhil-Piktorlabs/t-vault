import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./parts/navBar/navBar";
import Safes from "./pages/safes/safes";
import Vault from "./pages/vault/vault";
import Service from "./pages/service/service";
import Iam from "./pages/iam/iam";
import Azure from "./pages/azure/azure";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/azure" component={Azure} />
          <Route path="/iam" component={Iam} />
          <Route path="/service" component={Service} />
          <Route path="/vault" component={Vault} />
          <Route path="/safes" component={Safes} />
          <Redirect to="/safes" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
