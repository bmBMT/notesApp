import React from "react";
import Label from "../Label/Label";
import styles from "./Textarea.module.css";

const Textarea = ({ title, ...props }) => {
  return (
    <div className={styles.textarea}>
      <Label str={title} />
      <textarea {...props} id={title} className="blur-bg" />
    </div>
  );
};

export default Textarea;
