import React from "react";

const FormSelect = ({ id, label, onChange }) => {
  return (
    <div className="form__input-group">
      <label htmlFor={id}>{label}</label>
      <select className="form__input" id={id} onChange={(e) => onChange(e)}>
        <option value="personal">Personal</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default FormSelect;
