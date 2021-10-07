import React from "react";
import queryString from "query-string";

const Vault = ({ location }) => {
  const query = queryString.parse(location.search);

  return (
    <section>
      Vault AppRoles
      <br />
      <br />
      {Object.keys(query).map((key, index) => (
        <div key={index}>
          {key} = {query[key]}
        </div>
      ))}
    </section>
  );
};

export default Vault;
