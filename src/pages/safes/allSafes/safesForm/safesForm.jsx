import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalForm from "../../../../components/modal/modal";
import Input from "../../../../components/input/input";
import Select from "../../../../components/select/select";
import Button from "../../../../components/button/button";
import { apiCallBegan } from "../../../../store/middleware/api";
import { spaceRemover } from "../../../../utils/space";
import safeIcon from "../../../../assets/images/safe-icon.png";
import "./safesForm.css";

const SafesForm = ({ form, onForm, edit, setEdit }) => {
  const newSafe = {
    name: "",
    owner: "",
    type: "personal",
    description: "",
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

  const handleAdd = async (e) => {
    e.preventDefault();

    dispatch(
      apiCallBegan({
        url: "/safes",
        method: "post",
        data: safe,
        onSuccess: "safes/safeAdded",
      })
    );
    handleClose(e);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(
      apiCallBegan({
        url: `/safes/${safe._id}`,
        method: "patch",
        data: safe,
        onSuccess: "safes/safeUpdated",
      })
    );
    handleClose(e);
  };

  const validateSafeForm = () => {
    if (
      spaceRemover(safe.name).length < 1 ||
      spaceRemover(safe.owner).length < 1
    )
      return true;

    if (spaceRemover(safe.description).length < 10) return true;

    return false;
  };

  useEffect(() => {
    if (edit) {
      setSafe(safes.find((s) => s.selected === true));
    }
  }, [edit, safes]);

  return (
    <ModalForm showModal={form}>
      <form className="safes-form">
        <h1>Create Safe</h1>
        <div className="safes-form__info">
          <img src={safeIcon} alt="logo" className="safes-form__logo" />A Safe
          is a logical unit to store the secrets. All the safes are created
          within Vault. You can control access only at the safe level. As a
          vault administrator you can manage safes but cannot view the content
          of the safe.
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
          help
        >
          Please add a minimum of 10 characters
        </Input>
        <div className="safes-form__button-group">
          <Button label="Cancel" inverse onClick={handleClose} />
          {edit ? (
            <Button
              label="Update"
              onClick={handleUpdate}
              disabled={validateSafeForm()}
            />
          ) : (
            <Button
              label="+ Create"
              onClick={handleAdd}
              disabled={validateSafeForm()}
            />
          )}
        </div>
      </form>
    </ModalForm>
  );
};

export default SafesForm;
