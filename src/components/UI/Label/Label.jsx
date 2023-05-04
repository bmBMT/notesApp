import React, { memo } from "react";

const Label = ({ str }) => {
  return <label style={{ marginBottom: 4 }} htmlFor={str}>{`${str}:`}</label>;
};

export default memo(Label);
