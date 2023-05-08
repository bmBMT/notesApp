import React, { memo } from "react";

const Label = ({ children, ...props }) => {
  return (
    <label style={{ marginBottom: 4 }} {...props}>
      {children}
    </label>
  );
};

export default memo(Label);
