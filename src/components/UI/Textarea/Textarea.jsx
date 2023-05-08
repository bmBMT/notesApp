import React, { memo } from "react";
import "./Textarea.module.css";

const Textarea = ({ ...props }) => {
  return <textarea {...props} className="blur-bg" />;
};

export default memo(Textarea);
