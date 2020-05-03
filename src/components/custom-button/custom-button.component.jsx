import React from "react";

const CustomButtom = ({ ...otherProps }) => (
  <input type="submit" {...otherProps} />
);

export default CustomButtom;
