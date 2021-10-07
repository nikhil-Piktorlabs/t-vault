import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./parts/navbar/navBar";
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
          <Route exact path="/azure" component={Azure} />
          <Route exact path="/iam" component={Iam} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/vault" component={Vault} />
          <Route exact path="/safes" component={Safes} />
          <Redirect exact to="/safes" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
