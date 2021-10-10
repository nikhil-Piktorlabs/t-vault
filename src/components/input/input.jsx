import React from "react";
import "./input.css";

const Input = ({
  id,
  label,
  value,
  rows,
  onChange,
  help = false,
  children,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      {rows ? (
        <textarea
          id={id}
          type="text"
          value={value}
          className="input"
          rows={rows}
          onChange={(e) => onChange(e)}
          placeholder={label}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={value}
          className="input"
          onChange={(e) => onChange(e)}
          placeholder={label}
        />
      )}
      {help && <div className="input-help">{children}</div>}
    </div>
  );
};

export default Input;
