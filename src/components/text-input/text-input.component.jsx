import React from "react";

const TextInput = ({ handleChange, ...otherProps }) => (
  <input type="text" className="form-control" onChange={handleChange} {...otherProps} />
);

export default TextInput;
