import React from "react";

const Vault = ({ match }) => {
  return (
    <div>
      Vault AppRoles
      <br />
      <div>{match.params.text}</div>
    </div>
  );
};

export default Vault;
