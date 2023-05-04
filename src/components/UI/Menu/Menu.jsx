import React from "react";
import styles from "./Menu.module.css";

const Menu = ({ title, children, editId, ...props }) => {
  const editing = editId ? 'isEdit' : '';

  return (
    <div {...props} className={`${styles.menu} blur-bg ${editing}`}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Menu;
