import React, { useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

export const NewContact = () => {
  const { store, actions } = useContext(Context);

  const { newContact } = store;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    actions.handleNewContactChange(key, value);
};

  const onSubmit = (e) => {
    e.preventDefault();
    if (store.isNew) return actions.addNewContact();
    actions.updateContact();
  };

  return (
    <div className="text-center mt-5">
      <h1>Add new contact</h1>
      <form onSubmit={onSubmit}>
        {inputFields.map((inputOptions) => {
          return (
            <ContactItem
              key={inputOptions.name}
              value={newContact[inputOptions.name]}
              handleChange={handleChange}
              inputOptions={inputOptions}
            />
          );
        })}
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
      <Link to="/" className="btn btn-primary mt-3">Go back</Link>
    </div>
  );
};

const ContactItem = ({ value, inputOptions, handleChange }) => {
  return (
    <div className="form-group text-center">
      <label htmlFor={inputOptions.name}>{inputOptions.label}</label>
      <input
        type={inputOptions.type}
        className="form-control centered-placeholder"
        onChange={handleChange}
        value={value}
        id={inputOptions.name}
        name={inputOptions.name}
        placeholder={inputOptions.label}
      />
    </div>
  );
};
const inputFields = [
  {
    label: "Full name",
    name: "full_name",
    type: "text",
  },
  {
    label: "Phone",
    name: "phone",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Address",
    name: "address",
    type: "text",
  },
];