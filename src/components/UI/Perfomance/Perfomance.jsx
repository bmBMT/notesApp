import React from "react";
import styles from "./Perfomance.module.css";
import { Link } from "react-router-dom";

const Perfomance = ({ children, ...props }) => {
  return props.to ? (
    <Link {...props} className={`${styles.perfomance} blur-bg`}>
      {children}
    </Link>
  ) : (
    <div {...props} className={`${styles.perfomance} blur-bg`}>
      {children}
    </div>
  );
};

export default Perfomance;
