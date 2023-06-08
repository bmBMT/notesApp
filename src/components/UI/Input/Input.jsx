import { forwardRef, memo } from "react";
import "./Input.css";

const Input = forwardRef((props, ref) => {
  return <input {...props} ref={ref} type="text" className="blur-bg" />;
});

export default memo(Input);
