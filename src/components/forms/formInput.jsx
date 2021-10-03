import React from "react";

const FormInput = ({ id, label, value, rows, onChange }) => {
  return (
    <div className="form__input-group">
      <label htmlFor={id}>{label}</label>
      {rows ? (
        <React.Fragment>
          <textarea
            id={id}
            type="text"
            value={value}
            className="form__input"
            rows={rows}
            onChange={(e) => onChange(e)}
          />
          <div className="form__input-help">
            Please add a minimum of 10 characters
          </div>
        </React.Fragment>
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          className="form__input"
          onChange={(e) => onChange(e)}
        />
      )}
    </div>
  );
};

export default FormInput;
