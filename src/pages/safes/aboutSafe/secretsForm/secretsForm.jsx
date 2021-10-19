import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../../components/input/input";
import Button from "../../../../components/button/button";
import ModalForm from "../../../../components/modal/modal";
import { apiCallBegan } from "../../../../store/middleware/api";
import { spaceRemover } from "../../../../utils/space";
import "./secretsForm.css";

const SecretsForm = ({ form, onForm, selectedSafe }) => {
  const newSecret = { name: "" };
  const [secret, setSecret] = useState(newSecret);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();

    const { id, value } = e.currentTarget;
    const updatedSecret = { ...secret, [id]: value };

    setSecret(updatedSecret);
  };

  const handleClose = (e) => {
    e.preventDefault();

    setSecret(newSecret);
    onForm(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    dispatch(
      apiCallBegan({
        url: `/safes/${selectedSafe._id}/secrets`,
        method: "patch",
        data: secret,
        onSuccess: "safes/safeUpdated",
      })
    );
    handleClose(e);
  };

  const validateSecretsForm = () => {
    if (/^\w+$/.test(spaceRemover(secret.name))) return false;

    return true;
  };

  return (
    <ModalForm showModal={form} handleShowModal={handleClose}>
      <form className="secrets-form">
        <h1 className="secrets-form__heading">Add Folder</h1>
        <Input
          label="Folder Name"
          id="name"
          value={secret.name}
          onChange={handleChange}
          help
        >
          Please enter lowercase alphabets, numbers and underscores only.
        </Input>
        <div className="secrets-form__button-group">
          <Button label="Cancel" inverse onClick={handleClose} />
          <Button
            label="Save"
            onClick={handleAdd}
            disabled={validateSecretsForm()}
          />
        </div>
      </form>
    </ModalForm>
  );
};

export default SecretsForm;
