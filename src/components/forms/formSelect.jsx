import React from "react";

const FormSelect = ({ id, label }) => {
  return (
    <div className="form__input-group">
      <label htmlFor={id}>{label}:</label>
      <select className="form__input" id={id}>
        <option value="personal">Personal</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default FormSelect;
