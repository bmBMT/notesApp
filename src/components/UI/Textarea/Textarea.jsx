import React, { forwardRef, memo } from "react";
import "./Textarea.css";

const Textarea = forwardRef((props, ref) => {
  return <textarea ref={ref} {...props} className="blur-bg" />;
});

export default memo(Textarea);
