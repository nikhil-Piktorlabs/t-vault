import React from "react";
import "./input.css";

const Input = ({ id, label, value, rows, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      {rows ? (
        <React.Fragment>
          <textarea
            id={id}
            type="text"
            value={value}
            className="input"
            rows={rows}
            onChange={(e) => onChange(e)}
          />
          <div className="input-help">
            Please add a minimum of 10 characters
          </div>
        </React.Fragment>
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          className="input"
          onChange={(e) => onChange(e)}
        />
      )}
    </div>
  );
};

export default Input;
