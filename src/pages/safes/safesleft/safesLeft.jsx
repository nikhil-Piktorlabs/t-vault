import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "../../../components/card/card";
import SafesForm from "./safesform/safesForm";
import SearchBox from "../../../components/searchbox/searchBox";
import { safeDeleted, safeSelected } from "../../../store/safes/actions";
import addIcon from "../../../assets/images/add.png";
import safeIcon from "../../../assets/images/safe-icon.png";
import "./safesleft.css";

const SafesLeft = () => {
  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState(false);

  const safes = useSelector((state) => state.safes);
  const count = safes.length;

  const dispatch = useDispatch();

  const handleForm = () => setForm((form) => !form);

  const handleDelete = (e, id) => {
    e.stopPropagation();

    dispatch(safeDeleted(id));
  };

  const handleEdit = (e) => {
    e.stopPropagation();

    setEdit(true);
    handleForm();
  };

  const handleSelect = (id) => {
    dispatch(safeSelected(id));
  };

  return (
    <article className="safes-left">
      <header className="safes-left__header">
        <h2 className="safes-left__heading">
          All Safes <span className="safes-left__count">({safes.length})</span>
        </h2>
        <SearchBox />
      </header>
      <div className="hl"></div>
      <div
        className={`safes-left__list safes-left__empty${
          count === 0 ? "" : "--not"
        }`}
      >
        {count === 0 ? (
          <div className="safes-left__image">
            <div className="safes-left__caption">
              Create a Safe and get started!
            </div>
          </div>
        ) : (
          <ul className="list">
            {safes.map((safe) => (
              <li key={safe.id} className="list__item">
                <Card
                  logo={safeIcon}
                  item={safe}
                  selected={safe.selected}
                  onClick={handleSelect}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </li>
            ))}
          </ul>
        )}
        <img
          src={addIcon}
          alt="add"
          className="safes-left__add-button"
          onClick={() => handleForm()}
        />
      </div>
      <SafesForm
        form={form}
        onForm={handleForm}
        edit={edit}
        setEdit={setEdit}
      />
    </article>
  );
};

export default SafesLeft;
