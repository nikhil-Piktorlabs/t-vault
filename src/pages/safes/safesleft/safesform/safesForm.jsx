import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../../../../components/modalform/modalForm";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import Button from "../../../../components/button/button";
import { safeAdded, safeUpdated } from "../../../../store/safes/actions";
import safeIcon from "../../../../assets/images/safe-icon.png";
import "./safesform.css";

const SafesForm = ({ form, onForm, edit, setEdit }) => {
  const newSafe = {
    name: "",
    owner: "",
    type: "personal",
    description: "",
    secrets: [],
  };
  const [safe, setSafe] = useState(newSafe);
  const safes = useSelector((state) => state.safes);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    const { id, value } = e.currentTarget;
    const updatedSafe = { ...safe, [id]: value };

    setSafe(updatedSafe);
  };

  const handleClose = (e) => {
    e.preventDefault();

    setEdit(false);
    setSafe(newSafe);
    onForm();
  };

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(safeAdded(safe));
    handleClose(e);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(safeUpdated(safe));
    handleClose(e);
  };

  useEffect(() => {
    if (edit) {
      setSafe(safes.find((s) => s.selected === true));
    }
  }, [edit, safes]);

  return (
    <ModalForm showModal={form}>
      <h1>Create Safe</h1>
      <div className="safes-form__info">
        <img src={safeIcon} alt="logo" className="safes-form__logo" />A Safe is
        a logical unit to store the secrets. All the safes are created within
        Vault. You can control access only at the safe level. As a vault
        administrator you can manage safes but cannot view the content of the
        safe.
      </div>
      <Input
        label="Safe Name"
        id="name"
        value={safe.name}
        onChange={handleChange}
      />
      <Input
        label="Owner"
        id="owner"
        value={safe.owner}
        onChange={handleChange}
      />
      <Select
        label="Type"
        id="type"
        value={safe.type}
        onChange={handleChange}
      />
      <Input
        label="Description"
        id="description"
        value={safe.description}
        rows={2}
        onChange={handleChange}
      />
      <div className="safes-form__button-group">
        <Button label="Cancel" inverse onClick={handleClose} />
        {edit ? (
          <Button label="Update" onClick={handleUpdate} />
        ) : (
          <Button label="+ Create" onClick={handleAdd} />
        )}
      </div>
    </ModalForm>
  );
};

export default SafesForm;
