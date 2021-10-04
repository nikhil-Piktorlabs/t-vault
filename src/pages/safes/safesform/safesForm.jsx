import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ModalForm from "../../../components/modalform/modalForm";
import Input from "../../../components/input/input";
import Select from "../../../components/select/select";
import Button from "../../../components/button/button";
import { safeAdded } from "../../../store/safes/actions";
import safeIcon from "../../../assets/images/safe-icon.png";
import "./safesform.css";

const SafesForm = ({ showSafeForm, onShowSafeForm }) => {
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
    <ModalForm showModal={showSafeForm}>
      <h1>Create Safe</h1>
      <div className="safe-form__info">
        <img src={safeIcon} alt="logo" className="safe-form__logo" />A Safe is a
        logical unit to store the secrets. All the safes are created within
        Vault. You can control access only at the safe level. As a vault
        administrator you can manage safes but cannot view the content of the
        safe.
      </div>
      <Input
        label="Safe Name"
        id="name"
        value={safe.name}
        onChange={handleSafeChange}
      />
      <Input
        label="Owner"
        id="owner"
        value={safe.owner}
        onChange={handleSafeChange}
      />
      <Select
        label="Type"
        id="type"
        value={safe.type}
        onChange={handleSafeChange}
      />
      <Input
        label="Description"
        id="description"
        value={safe.description}
        rows={2}
        onChange={handleSafeChange}
      />
      <div className="safe-form__button-group">
        <Button label="Cancel" onClick={handleClose} />
        <Button label="+ Create" inverse onClick={handleAddSafe} />
      </div>
    </ModalForm>
  );
};

export default SafesForm;
