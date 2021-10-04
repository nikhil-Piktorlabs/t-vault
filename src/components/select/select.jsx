import React from "react";
import "./select.css";

const Select = ({ id, label, value, onChange }) => {
  return (
    <div className="select-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="select"
        value={value}
        id={id}
        onChange={(e) => onChange(e)}
      >
        <option value="personal">Personal</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default Select;
