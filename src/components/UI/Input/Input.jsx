import React, { memo, useMemo } from "react";
import styles from "./Input.module.css";
import Label from "../Label/Label";

const Input = ({ ...props }) => {
  return <input {...props} type="text" className="blur-bg" />;
};

export default memo(Input);
