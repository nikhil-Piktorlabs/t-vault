import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import LeftCard from "../../../components/card/leftCard";
import SafesForm from "./safesForm/safesForm";
import SearchBox from "../../../components/searchBox/searchBox";
import { safeDeleted, safeSelected } from "../../../store/safes/actions";
import debounce from "../../../utils/debounce";
import filterArrays from "../../../utils/filter";
import addIcon from "../../../assets/images/add.png";
import safeIcon from "../../../assets/images/safe-icon.png";
import "./allSafes.css";

const AllSafes = () => {
  const [form, setForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [query, setQuery] = useState("");

  const safes = useSelector((state) => state.safes);
  const count = safes.length;

  const filteredSafes = filterArrays(safes, query);
  const filteredCount = filteredSafes.length;

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

  const handleQuery = debounce(function (query) {
    setQuery(query);
  }, 500);

  return (
    <article className="all-safes">
      <header className="all-safes__header">
        <h2 className="all-safes__heading">
          All Safes <span className="all-safes__count">({filteredCount})</span>
        </h2>
        <SearchBox searchQuery={query} onQuery={handleQuery} />
      </header>
      <div
        className={`all-safes__list all-safes__empty${
          count === 0 ? "" : "--not"
        }`}
      >
        {count === 0 ? (
          <div className="all-safes__image">
            <div className="all-safes__caption">
              Create a Safe and get started!
            </div>
          </div>
        ) : filteredCount === 0 ? (
          <div className="all-safes__not-found">No Safe Found!</div>
        ) : (
          <ul className="list">
            {filteredSafes.map((safe) => (
              <li key={safe.id} className="list__item list__item--margin">
                <LeftCard
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
          className="all-safes__add-button"
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

export default AllSafes;
