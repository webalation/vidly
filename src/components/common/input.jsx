import React from "react";
import { values } from "lodash";

const Input = ({ name, label, value, onChange, error, username }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        name={name}
        ref={username}
        id={name}
        type="text"
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
