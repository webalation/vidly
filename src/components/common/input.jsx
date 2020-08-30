import React from "react";
import { values } from "lodash";

const Input = ({ name, label, value, onChange, username }) => {
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
    </div>
  );
};

export default Input;
