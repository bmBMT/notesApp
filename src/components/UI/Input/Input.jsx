import React, { memo, useMemo } from "react";
import styles from "./Input.module.css";
import Label from "../Label/Label";

const Input = ({ title, ...props }) => {
  return (
    <div className={styles.input}>
      {title && <Label str={title} />}
      <input {...props} type="text" id={title} className="blur-bg" />
    </div>
  );
};

export default memo(Input);
