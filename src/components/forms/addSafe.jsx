import React from "react";
import safeIcon from "../../images/safe-icon.png";
import FormInput from "./formInput";
import FormSelect from "./formSelect";
import "./form.css";
import FormButton from "./formButton";

const AddSafe = ({ showForm, onShowForm }) => {
  return (
    <div className={`modal${!showForm ? " modal--hidden" : ""}`}>
      <form className="form">
        <h1>Create Safe</h1>
        <div className="form__info">
          <img src={safeIcon} alt="logo" className="form__logo" />A Safe is a
          logical unit to store the secrets. All the safes are created within
          Vault. You can control access only at the safe level. As a vault
          administrator you can manage safes but cannot view the content of the
          safe.
        </div>
        <FormInput label="Safe Name" id="name" />
        <FormInput label="Owner" id="owner" />
        <FormSelect label="Type" id="type" />
        <FormInput label="Description" id="description" rows={2} />
        <div className="form__buttons">
          <FormButton label="Cancel" onClick={onShowForm} />
          <FormButton label="+ Create" inverse />
        </div>
      </form>
    </div>
  );
};

export default AddSafe;
