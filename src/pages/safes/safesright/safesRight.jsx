import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../../components/button/button";
import RightCard from "../../../components/card/rightCard";
import SecretsForm from "./secretsform/secretsForm";
import { safeSecretDeleted } from "../../../store/safes/actions";
import secretIcon from "../../../assets/images/secret.png";
import folderIcon from "../../../assets/images/folder.png";
import folderIconActive from "../../../assets/images/folder-active.png";
import addFolderIcon from "../../../assets/images/add-folder.png";
import addFolderActiveIcon from "../../../assets/images/add-folder-active.png";
import "./safesright.css";

const SafesRight = () => {
  const [form, setForm] = useState(false);

  const safes = useSelector((state) => state.safes);
  const safe = safes.find((s) => s.selected === true);

  const secrets = safe ? safe.secrets : null;
  const count = secrets ? secrets.length : 0;

  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    setForm((form) => !form);
  };

  const handleDelete = (index) => {
    dispatch(safeSecretDeleted(index));
  };

  return (
    <section className="safes-right">
      <div className="safes-right__banner">
        <div className="safes-right__caption">
          <h1>{safe ? safe.name : "No Safes Created Yet"}</h1>
          <p className="safes-right__safe-description">
            {safe
              ? safe.description
              : "Create a Safe to see your secrets, folders and permissions here"}
          </p>
        </div>
      </div>
      <div className="secrets">
        <header className="secrets__header">
          <h1 className="secrets__heading">Secrets</h1>
          <img
            className={`secrets__add-folder-icon${
              secrets ? " secrets__add-folder-icon--clickable" : ""
            }`}
            src={!secrets ? addFolderIcon : addFolderActiveIcon}
            alt="add folder"
            onClick={(e) => {
              if (secrets) handleForm(e);
            }}
          />
        </header>
        <div className="hl-1"></div>
        <div className="secrets__count">{count} Secrets</div>
        <div className={`secrets__list${count === 0 ? " secrets__empty" : ""}`}>
          {count === 0 ? (
            <React.Fragment>
              <img src={secretIcon} alt="secret" className="secrets__image" />
              <div className="secrets__caption">
                Add a <span className="secrets__caption-highlight">Folder</span>{" "}
                and then you’ll be able to add{" "}
                <span className="secrets__caption-highlight">Secrets</span> to
                view them all here
              </div>
              <Button
                label="+ Add"
                disabled={!safe && true}
                onClick={handleForm}
              />
            </React.Fragment>
          ) : (
            <ul className="list">
              {secrets.map((secret, index) => (
                <li className="list__item" key={index}>
                  <RightCard
                    logo={folderIcon}
                    logoActive={folderIconActive}
                    item={secret}
                    onDelete={handleDelete}
                    index={index}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <SecretsForm form={form} onForm={setForm} />
    </section>
  );
};

export default SafesRight;
