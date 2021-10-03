import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "./formInput";
import FormSelect from "./formSelect";
import FormButton from "./formButton";
import { safeAdded } from "../../store/safe";
import safeIcon from "../../images/safe-icon.png";
import "./form.css";

const AddSafe = ({ showSafeForm, onShowSafeForm }) => {
  const newSafe = {
    name: "",
    owner: "",
    type: "personal",
    description: "",
  };
  const [safe, setSafe] = useState(newSafe);

  const dispatch = useDispatch();

  const handleSafeChange = (e) => {
    e.preventDefault();

    const { id, value } = e.currentTarget;
    const updatedSafe = { ...safe, [id]: value };

    setSafe(updatedSafe);
  };

  const handleClose = (e) => {
    e.preventDefault();

    setSafe(newSafe);
    onShowSafeForm();
  };

  const handleAddSafe = (e) => {
    e.preventDefault();

    dispatch(safeAdded(safe));
    handleClose(e);
  };

  return (
    <div className={`modal${!showSafeForm ? " modal--hidden" : ""}`}>
      <form className="form">
        <h1>Create Safe</h1>
        <div className="form__info">
          <img src={safeIcon} alt="logo" className="form__logo" />A Safe is a
          logical unit to store the secrets. All the safes are created within
          Vault. You can control access only at the safe level. As a vault
          administrator you can manage safes but cannot view the content of the
          safe.
        </div>
        <FormInput
          label="Safe Name"
          id="name"
          value={safe.name}
          onChange={handleSafeChange}
        />
        <FormInput
          label="Owner"
          id="owner"
          value={safe.owner}
          onChange={handleSafeChange}
        />
        <FormSelect
          label="Type"
          id="type"
          value={safe.type}
          onChange={handleSafeChange}
        />
        <FormInput
          label="Description"
          id="description"
          value={safe.description}
          rows={2}
          onChange={handleSafeChange}
        />
        <div className="form__buttons">
          <FormButton label="Cancel" onClick={handleClose} />
          <FormButton label="+ Create" inverse onClick={handleAddSafe} />
        </div>
      </form>
    </div>
  );
};

export default AddSafe;
