import React from "react";

const FormInput = ({ id, label, rows }) => {
  return (
    <div className="form__input-group">
      <label htmlFor={id}>{label}</label>
      {rows ? (
        <React.Fragment>
          <textarea id={id} type="text" className="form__input" rows={rows} />
          <div className="form__input-help">
            Please add a minimum of 10 characters
          </div>
        </React.Fragment>
      ) : (
        <input id={id} type="text" className="form__input" />
      )}
    </div>
  );
};

export default FormInput;
